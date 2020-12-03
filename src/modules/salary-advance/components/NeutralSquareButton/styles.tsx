import { StyleSheet } from 'react-native';

const buttonDefault = {
  width: 335,
  height: 60,
  borderRadius: 16,
  marginTop: 45,
};

export const styles = StyleSheet.create({
  button: {
    ...buttonDefault,
    backgroundColor: '#49E295',
  },
  buttonDisabled: {
    ...buttonDefault,
    backgroundColor: '#F1F1F1',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonLabelDisabled: {
    fontSize: 16,
    color: '#C3C3C3',
  },
});
