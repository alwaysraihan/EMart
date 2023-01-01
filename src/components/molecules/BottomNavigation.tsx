import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  TableCellsIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import { Colors } from '../../styles';
import { FONT_FAMILY_REGULAR } from '../../styles/typography';

const Icon = ({ label, isFocused }) => {
  switch (label) {
    case 'Home':
      return isFocused ? <HomeIcon color={Colors.PRIMARY} /> : <HomeIcon color={Colors.BLACK} />;
    case 'Tools':
      return isFocused ? (
        <AdjustmentsHorizontalIcon color={Colors.PRIMARY} />
      ) : (
        <AdjustmentsHorizontalIcon color={Colors.BLACK} />
      );
    case 'Data':
      return isFocused ? (
        <TableCellsIcon color={Colors.PRIMARY} />
      ) : (
        <TableCellsIcon color={Colors.BLACK} />
      );
    case 'Message':
      return isFocused ? (
        <ChatBubbleOvalLeftEllipsisIcon color={Colors.PRIMARY} />
      ) : (
        <ChatBubbleOvalLeftEllipsisIcon color={Colors.BLACK} />
      );
    case 'Me':
      return isFocused ? <UserIcon color={Colors.PRIMARY} /> : <UserIcon color={Colors.BLACK} />;
    default:
      return <HomeIcon color={Colors.PRIMARY} />;
  }
};
const BottomNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map(
        (route: { key: string | number; name: any }, index: React.Key | null | undefined) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ alignItems: 'center' }}
            >
              <Icon label={label} isFocused={isFocused} />
              <Text
                style={{
                  color: isFocused ? Colors.PRIMARY : Colors.BLACK,
                  textAlign: 'center',
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontWeight: '500',
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    paddingTop: 7,
    paddingBottom: 6,
    paddingHorizontal: 27,
    justifyContent: 'space-between',
    shadowColor: ' rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
});
