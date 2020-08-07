import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen19705Navigator from '../features/CopyOfBlankScreen19705/navigator';
import BlankScreen19704Navigator from '../features/BlankScreen19704/navigator';
import BlankScreen09700Navigator from '../features/BlankScreen09700/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen19705: { screen: CopyOfBlankScreen19705Navigator },
BlankScreen19704: { screen: BlankScreen19704Navigator },
BlankScreen09700: { screen: BlankScreen09700Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
