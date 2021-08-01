import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
});

export default commonStyles;
