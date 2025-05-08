import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import BouncyCheckbox, {
  BouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
import styles from "./BouncyCheckboxGroup.style";
import useStateWithCallback from "./helpers/useStateWithCallback";

export interface CheckboxItem extends Omit<BouncyCheckboxProps, "id"> {
  id: string | number;
}

export type SelectionID = string | number;
export type InitialSelection = SelectionID | SelectionID[];

export interface BouncyCheckboxGroupProps {
  style?: StyleProp<ViewStyle>;
  initial?: InitialSelection;
  data: CheckboxItem[];
  onChange: (selectedItem: CheckboxItem | CheckboxItem[]) => void;
  checkboxProps?: BouncyCheckboxProps;
  /**
   * Allow multiple checkboxes to be selected simultaneously
   * @default false
   */
  multiple?: boolean;
  /**
   * Ensures one checkbox is always selected (works only in single select mode)
   * If trying to unselect the only selected item, it will remain selected
   * @default false
   */
  alwaysSelect?: boolean;
  /**
   * Custom animation duration for bounce effect
   * @default 300
   */
  animationDuration?: number;
  /**
   * Custom spacing between checkboxes
   * @default 0
   */
  spacing?: number;
  /**
   * Custom container style for each checkbox
   */
  itemContainerStyle?: StyleProp<ViewStyle>;
}

const BouncyCheckboxGroup: React.FC<BouncyCheckboxGroupProps> = ({
  style,
  checkboxProps,
  initial,
  data,
  onChange,
  multiple = false,
  alwaysSelect = false,
  animationDuration = 300,
  spacing = 0,
  itemContainerStyle,
}) => {
  const normalizeId = (id: SelectionID): string => String(id);

  const getInitialSelection = React.useCallback((): CheckboxItem[] => {
    if (!initial) {
      // If alwaysSelect is true and no initial is provided, select the first item
      if (alwaysSelect && !multiple && data.length > 0) {
        return [data[0]];
      }
      return [];
    }

    // Convert the initial value to array of strings for comparison
    const initialIds = Array.isArray(initial)
      ? initial.map(normalizeId)
      : [normalizeId(initial)];

    return data.filter((item) => initialIds.includes(normalizeId(item.id)));
  }, [initial, data, alwaysSelect, multiple]);

  const [selectedItems, setSelectedItems] = useStateWithCallback<
    CheckboxItem[]
  >(getInitialSelection());

  // Handle selection changes
  const updateSelection = React.useCallback(
    (newItems: CheckboxItem[]) => {
      setSelectedItems(newItems, (items) => {
        onChange(multiple ? items : items[0]);
      });
    },
    [multiple, onChange, setSelectedItems],
  );

  // Check if a specific item is currently selected
  const isItemSelected = React.useCallback(
    (item: CheckboxItem): boolean => {
      return selectedItems.some(
        (selectedItem: CheckboxItem) =>
          normalizeId(selectedItem.id) === normalizeId(item.id),
      );
    },
    [selectedItems],
  );

  const handleItemPress = React.useCallback(
    (item: CheckboxItem) => {
      if (multiple) {
        // For multiple selection mode
        const isSelected = isItemSelected(item);

        let newSelectedItems: CheckboxItem[];
        if (isSelected) {
          // Remove from selection
          newSelectedItems = selectedItems.filter(
            (selectedItem: CheckboxItem) =>
              normalizeId(selectedItem.id) !== normalizeId(item.id),
          );
        } else {
          // Add to selection
          newSelectedItems = [...selectedItems, item];
        }

        updateSelection(newSelectedItems);
      } else {
        // For single selection mode
        const isSelected = isItemSelected(item);

        // If alwaysSelect is true and this is the only selected item,
        // don't allow deselection by tapping it again
        if (isSelected && alwaysSelect && selectedItems.length === 1) {
          return;
        }

        // If the item is already selected and we can deselect it, deselect it
        // Otherwise, select the new item
        const newSelectedItems = isSelected ? [] : [item];
        updateSelection(newSelectedItems);
      }
    },
    [multiple, selectedItems, alwaysSelect, isItemSelected, updateSelection],
  );

  // Render a single checkbox with appropriate configuration
  const renderCheckbox = React.useCallback(
    (item: CheckboxItem) => {
      const { id, ...checkboxItemProps } = item;
      const isSelected = isItemSelected(item);

      // Determine if this checkbox should be disallowed from toggling off
      // (When it's an already selected item in alwaysSelect mode)
      const isUntoggleable =
        alwaysSelect && !multiple && isSelected && selectedItems.length === 1;

      return (
        <View
          key={normalizeId(id)}
          style={[{ marginRight: spacing }, itemContainerStyle]}
        >
          <BouncyCheckbox
            innerIconStyle={{ borderWidth: 0 }}
            bounceEffect={0.8}
            bounceFriction={10}
            useNativeDriver={true}
            {...checkboxProps}
            {...checkboxItemProps}
            isChecked={isSelected}
            useBuiltInState={!isUntoggleable}
            onPress={() => handleItemPress(item)}
          />
        </View>
      );
    },
    [
      spacing,
      itemContainerStyle,
      checkboxProps,
      alwaysSelect,
      multiple,
      selectedItems,
      isItemSelected,
      handleItemPress,
    ],
  );

  return (
    <View style={[styles.container, style]}>{data.map(renderCheckbox)}</View>
  );
};

export default BouncyCheckboxGroup;
