import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
/**
 * ? Local Imports
 */
import styles from "./BouncyCheckboxGroup.style";
import useStateWithCallback from "./helpers/useStateWithCallback";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface ICheckboxButton extends IBouncyCheckboxProps {
  id: number;
}

interface IBouncyCheckboxGroupProps {
  style?: CustomStyleProp;
  initial?: number;
  data: ICheckboxButton[];
  onChange: (selectedItem: ICheckboxButton) => void;
}

const BouncyCheckboxGroup: React.FC<IBouncyCheckboxGroupProps> = ({
  style,
  initial,
  data,
  onChange,
}) => {
  const [selectedItem, setSelectedItem] = useStateWithCallback<
    ICheckboxButton | undefined
  >(undefined);

  const handleItemPress = (item: ICheckboxButton) => {
    setSelectedItem(item, (newItem) => onChange && onChange(newItem));
  };

  return (
    <View style={[styles.container, style]}>
      {data &&
        data.map((item: ICheckboxButton) => {
          const isActive =
            item.id === (selectedItem ? selectedItem?.id : initial);
          return (
            <BouncyCheckbox
              {...item}
              key={item.id}
              disableBuiltInState
              isChecked={isActive}
              onPress={() => handleItemPress(item)}
            />
          );
        })}
    </View>
  );
};

export default BouncyCheckboxGroup;
