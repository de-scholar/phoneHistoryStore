import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import CallLogPermsReqsScreen from './src/screens/CallLogPermsReqsScreen';
import CallLogListScreen from './src/screens/CallLogListScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DashbordScreen from './src/screens/DashboardScreen';
import SmsPermsReqsScreen from './src/screens/SmsPermsReqsScreen';
import SmsListScreen from './src/screens/SmsListScreen';

const navigator = createSwitchNavigator(
  {
    WelcomeScreen,
    DashbordScreen,
    CallLogPermsReqsScreen,
    CallLogListScreen,
    SmsPermsReqsScreen,
    SmsListScreen,
  },
  {
    initialRouteName: 'DashbordScreen',
    defaultNavigationOptions: {
      title: 'Phone History Store',
    },
  },
);

export default createAppContainer(navigator);
