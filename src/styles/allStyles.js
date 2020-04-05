import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(100,120,255)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 15,
    color: 'rgb(255,255,255)',
    textAlign: 'center',
  },
  touchableBtn: {
    marginTop: -20,
    marginBottom: 10,
    padding: 5,
    width: '80%',
    borderRadius: 30,
    backgroundColor: 'rgba(200,200,220,0.8)',
  },
});

export default allStyles;
