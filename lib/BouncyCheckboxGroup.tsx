import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import BouncyCheckbox, {
  BouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
import styles from "./BouncyCheckboxGroup.style";
import useStateWithCallback from "./helpers/useStateWithCallback";

export interface CheckboxButton extends Omit<BouncyCheckboxProps, "id"> {
  id: string | number;
}

interface BouncyCheckboxGroupProps {
  style?: StyleProp<ViewStyle>;
  initial?: number | number[] | string | string[];
  data: CheckboxButton[];
  onChange: (selectedItem: CheckboxButton | CheckboxButton[]) => void;
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
  const [selectedItems, setSelectedItems] = useStateWithCallback<
    CheckboxButton[]
  >(
    React.useMemo(() => {
      if (!initial) {
        if (alwaysSelect && !multiple && data.length > 0) {
          return [data[0]];
        }
        return [];
      }

      const initialIds = Array.isArray(initial)
        ? initial.map((id) => String(id))
        : [String(initial)];

      return data.filter((item) => initialIds.includes(String(item.id)));
    }, [initial, data, alwaysSelect, multiple]),
  );

  React.useEffect(() => {
    if (selectedItems.length === 0) {
      let initialItems: CheckboxButton[] = [];

      if (initial) {
        const initialIds = Array.isArray(initial)
          ? initial.map((id) => String(id))
          : [String(initial)];

        initialItems = data.filter((item) =>
          initialIds.includes(String(item.id)),
        );
      } else if (alwaysSelect && !multiple && data.length > 0) {
        initialItems = [data[0]];
      }

      if (initialItems.length > 0) {
        setSelectedItems(initialItems, (newItems) => {
          onChange && onChange(multiple ? newItems : newItems[0]);
        });
      }
    }
  }, []);

  const handleItemPress = (item: CheckboxButton) => {
    if (multiple) {
      const isAlreadySelected = selectedItems.some(
        (selectedItem: CheckboxButton) =>
          String(selectedItem.id) === String(item.id),
      );

      let newSelectedItems: CheckboxButton[];
      if (isAlreadySelected) {
        newSelectedItems = selectedItems.filter(
          (selectedItem: CheckboxButton) =>
            String(selectedItem.id) !== String(item.id),
        );
      } else {
        newSelectedItems = [...selectedItems, item];
      }

      setSelectedItems(newSelectedItems, (newItems) => {
        onChange && onChange(newItems);
      });
    } else {
      const isAlreadySelected =
        selectedItems.length === 1 &&
        String(selectedItems[0].id) === String(item.id);

      if (isAlreadySelected && alwaysSelect) {
        return;
      }

      setSelectedItems([item], (newItems) => {
        onChange && onChange(newItems[0]);
      });
    }
  };

  const isItemSelected = (item: CheckboxButton): boolean => {
    return selectedItems.some(
      (selectedItem: CheckboxButton) =>
        String(selectedItem.id) === String(item.id),
    );
  };

  const renderBouncyCheckbox = (item: CheckboxButton, isActive: boolean) => {
    const { id, ...checkboxItemProps } = item;

    const isUntoggleable =
      alwaysSelect && !multiple && isActive && selectedItems.length === 1;

    return (
      <BouncyCheckbox
        innerIconStyle={{ borderWidth: 0 }}
        bounceEffect={0.8}
        bounceFriction={10}
        useNativeDriver={true}
        {...checkboxProps}
        {...checkboxItemProps}
        isChecked={isActive}
        useBuiltInState={!isUntoggleable}
        onPress={() => handleItemPress(item)}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
      {data &&
        data.map((item: CheckboxButton) => {
          const isActive = isItemSelected(item);
          const { id } = item;

          return (
            <View
              key={String(id)}
              style={[{ marginRight: spacing }, itemContainerStyle]}
            >
              {renderBouncyCheckbox(item, isActive)}
            </View>
          );
        })}
    </View>
  );
};

export default BouncyCheckboxGroup;
