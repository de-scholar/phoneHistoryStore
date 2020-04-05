import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import CallLogPermsReqsScreen from './src/screens/CallLogPermsReqsScreen';
import CallLogListScreen from './src/screens/CallLogListScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const navigator = createSwitchNavigator(
  {
    WelcomeScreen,
    CallLogPermsReqsScreen,
    CallLogListScreen,
  },
  {
    initialRouteName: 'CallLogPermsReqsScreen',
    defaultNavigationOptions: {
      title: 'Phone History Store',
    },
  },
);

export default createAppContainer(navigator);
