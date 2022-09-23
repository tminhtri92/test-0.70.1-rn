/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {AlphabetList} from 'react-native-section-alphabet-list';

import sampleData from './src/sampleData';
import colors from './src/values/colors';
import sizes from './src/values/sizes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderListItem = (item: any) => {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>{item.value}</Text>
      </View>
    );
  };

  const renderSectionHeader = (section: any) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
      </View>
    );
  };

  const renderCustomListHeader = () => {
    return (
      <View style={styles.listHeaderContainer}>
        <Text>List Header</Text>
      </View>
    );
  };

  return (
    <AlphabetList
      style={{flex: 1}}
      data={sampleData}
      renderCustomItem={renderListItem}
      renderCustomSectionHeader={renderSectionHeader}
      renderCustomListHeader={renderCustomListHeader}
      getItemHeight={() => sizes.itemHeight}
      sectionHeaderHeight={sizes.headerHeight}
      listHeaderHeight={sizes.listHeaderHeight}
      indexLetterStyle={{color: colors.primary}}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },

  listItemContainer: {
    flex: 1,
    height: sizes.itemHeight,
    paddingHorizontal: sizes.spacing.regular,
    justifyContent: 'center',
    borderTopColor: colors.seperatorLine,
    borderTopWidth: 1,
  },

  listItemLabel: {
    color: colors.text.dark,
    fontSize: 14,
  },

  sectionHeaderContainer: {
    height: sizes.headerHeight,
    backgroundColor: colors.background.dark,
    justifyContent: 'center',
    paddingHorizontal: sizes.spacing.regular,
  },

  sectionHeaderLabel: {
    color: colors.background.light,
  },

  listHeaderContainer: {
    height: sizes.listHeaderHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
