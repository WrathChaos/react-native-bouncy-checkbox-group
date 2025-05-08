import * as React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import BouncyCheckbox, {
  BouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';
import styles from './BouncyCheckboxGroup.style';
import useStateWithCallback from './helpers/useStateWithCallback';

export interface CheckboxButton extends Omit<BouncyCheckboxProps, 'id'> {
  id: string | number;
}

interface BouncyCheckboxGroupProps {
  style?: StyleProp<ViewStyle>;
  initial?: number;
  data: CheckboxButton[];
  onChange: (selectedItem: CheckboxButton) => void;
  checkboxProps?: BouncyCheckboxProps;
}

const BouncyCheckboxGroup: React.FC<BouncyCheckboxGroupProps> = ({
  style,
  checkboxProps,
  initial,
  data,
  onChange,
}) => {
  const [selectedItem, setSelectedItem] = useStateWithCallback<
    CheckboxButton | undefined
  >(undefined);

  const handleItemPress = (item: CheckboxButton) => {
    setSelectedItem(item, newItem => onChange && onChange(newItem));
  };

  return (
    <View style={[styles.container, style]}>
      {data &&
        data.map((item: CheckboxButton) => {
          const isActive =
            item.id === (selectedItem ? selectedItem?.id : initial);
          return (
            <BouncyCheckbox
              innerIconStyle={{borderWidth: 0}}
              {...checkboxProps}
              {...item}
              key={item.checkboxId}
              isChecked={isActive}
              onPress={() => handleItemPress(item)}
            />
          );
        })}
    </View>
  );
};

export default BouncyCheckboxGroup;
