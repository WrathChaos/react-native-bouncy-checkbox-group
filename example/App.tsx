import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import AppleHeader from 'react-native-apple-header';
import BouncyCheckboxGroup, { CheckboxButton } from './lib/BouncyCheckboxGroup';

const _iconStyle = (borderColor: string) => ({
  height: 50,
  width: 50,
  borderRadius: 25,
  borderColor: borderColor,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verticalStyle: {
    marginTop: 16,
  },
  textStyle: {
    textDecorationLine: 'none',
    fontSize: 16,
  },
  iconImageStyle: {
    height: 20,
    width: 20,
  },
  sectionTitle: {
    color: '#a8a8ac',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 32,
    marginTop: 24,
  },
  checkboxContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalCheckboxContainer: {
    marginTop: 16,
    marginLeft: 32,
    justifyContent: 'center',
  },
  scrollView: {
    paddingBottom: 48,
  },
  selected: {
    marginLeft: 32,
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
  description: {
    marginLeft: 32,
    marginTop: 4,
    fontSize: 12,
    color: '#888',
    maxWidth: '90%',
  },
});

const staticData: CheckboxButton[] = [
  {
    id: 0,
    fillColor: '#ff7473',
    unFillColor: '#fbbfbb',
    iconStyle: _iconStyle('#fbbfbb'),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 1,
    fillColor: '#5567e9',
    unFillColor: '#afb5f5',
    iconStyle: _iconStyle('#afb5f5'),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 2,
    fillColor: '#a98ae7',
    unFillColor: '#cab6f4',
    iconStyle: _iconStyle('#cab6f4'),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 3,
    fillColor: '#fcb779',
    unFillColor: '#ffd1a7',
    iconStyle: _iconStyle('#ffd1a7'),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 4,
    fillColor: '#2be055',
    unFillColor: '#cbf2d5',
    iconStyle: _iconStyle('#cbf2d5'),
    iconImageStyle: styles.iconImageStyle,
  },
];

const verticalStaticData: CheckboxButton[] = [
  {
    id: 0,
    text: 'Watermelon',
    fillColor: '#ff7473',
    unFillColor: '#fbbfbb',
    iconStyle: _iconStyle('#fbbfbb'),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 1,
    text: 'Ultramarine Blue',
    fillColor: '#5567e9',
    unFillColor: '#afb5f5',
    iconStyle: _iconStyle('#afb5f5'),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 2,
    text: 'Soft Purple',
    fillColor: '#a98ae7',
    unFillColor: '#cab6f4',
    iconStyle: _iconStyle('#cab6f4'),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 3,
    text: 'Takao',
    fillColor: '#fcb779',
    unFillColor: '#ffd1a7',
    iconStyle: _iconStyle('#ffd1a7'),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 4,
    text: 'Malachite',
    fillColor: '#2be055',
    unFillColor: '#cbf2d5',
    iconStyle: _iconStyle('#cbf2d5'),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
];

const App = () => {
  const [singleSelected, setSingleSelected] = useState<CheckboxButton | null>(null);
  const [multipleSelected, setMultipleSelected] = useState<CheckboxButton[]>([]);
  const [verticalSelected, setVerticalSelected] = useState<CheckboxButton | null>(null);
  const [fastAnimationSelected, setFastAnimationSelected] = useState<CheckboxButton | null>(null);
  const [alwaysSelected, setAlwaysSelected] = useState<CheckboxButton | null>(null);

  const imageSource = {
    uri: 'https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
  };

  const horizontalCheckboxGroupContainer = () => (
    <>
      <Text style={styles.sectionTitle}>
        Single Select - Pick your favorite color
      </Text>
      <View style={styles.checkboxContainer}>
        <BouncyCheckboxGroup
          data={staticData}
          spacing={8}
          initial={0}
          onChange={(selectedItem: CheckboxButton) => {
            setSingleSelected(selectedItem);
            console.log('Single Selected: ', JSON.stringify(selectedItem));
          }}
        />
      </View>
      {singleSelected && (
        <Text style={styles.selected}>
          Selected: {singleSelected.id}
        </Text>
      )}
    </>
  );

  const alwaysSelectCheckboxGroupContainer = () => (
    <>
      <Text style={styles.sectionTitle}>
        Always Selected Mode - Can't deselect
      </Text>
      <Text style={styles.description}>
        Once an option is selected, it can't be deselected. You must select another option to change.
      </Text>
      <View style={styles.checkboxContainer}>
        <BouncyCheckboxGroup
          data={staticData}
          spacing={8}
          initial={0}
          alwaysSelect={true}
          onChange={(selectedItem: CheckboxButton) => {
            setAlwaysSelected(selectedItem);
            console.log('Always Selected: ', JSON.stringify(selectedItem));
          }}
        />
      </View>
      {alwaysSelected && (
        <Text style={styles.selected}>
          Selected: {alwaysSelected.id}
        </Text>
      )}
    </>
  );

  const multiSelectCheckboxGroupContainer = () => (
    <>
      <Text style={styles.sectionTitle}>
        Multi Select - Choose multiple colors
      </Text>
      <View style={styles.checkboxContainer}>
        <BouncyCheckboxGroup
          data={staticData}
          spacing={8}
          multiple={true}
          initial={[1, 3]}
          onChange={(selectedItems: CheckboxButton[]) => {
            setMultipleSelected(selectedItems);
            console.log('Multiple Selected: ', JSON.stringify(selectedItems));
          }}
        />
      </View>
      {multipleSelected.length > 0 && (
        <Text style={styles.selected}>
          Selected: {multipleSelected.map(item => item.id).join(', ')}
        </Text>
      )}
    </>
  );

  const verticalCheckboxGroupContainer = () => (
    <>
      <Text style={styles.sectionTitle}>
        Vertical Layout - Pick your favorite color
      </Text>
      <View style={styles.verticalCheckboxContainer}>
        <BouncyCheckboxGroup
          data={verticalStaticData}
          style={{ flexDirection: 'column' }}
          spacing={0}
          onChange={(selectedItem: CheckboxButton) => {
            setVerticalSelected(selectedItem);
            console.log('Vertical Selected: ', JSON.stringify(selectedItem));
          }}
        />
      </View>
      {verticalSelected && (
        <Text style={styles.selected}>
          Selected: {verticalSelected.text}
        </Text>
      )}
    </>
  );

  const fastAnimationCheckboxGroupContainer = () => (
    <>
      <Text style={styles.sectionTitle}>
        Custom Animation Speed (100ms)
      </Text>
      <View style={styles.checkboxContainer}>
        <BouncyCheckboxGroup
          data={staticData}
          spacing={8}
          animationDuration={100}
          onChange={(selectedItem: CheckboxButton) => {
            setFastAnimationSelected(selectedItem);
          }}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollView}>
        {horizontalCheckboxGroupContainer()}
        {alwaysSelectCheckboxGroupContainer()}
        {multiSelectCheckboxGroupContainer()}
        {verticalCheckboxGroupContainer()}
        {fastAnimationCheckboxGroupContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
