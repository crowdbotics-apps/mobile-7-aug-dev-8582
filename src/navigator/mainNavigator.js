import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen09713Navigator from '../features/BlankScreen09713/navigator';
import BlankScreen09711Navigator from '../features/BlankScreen09711/navigator';
import BlankScreen59708Navigator from '../features/BlankScreen59708/navigator';
import BlankScreen09707Navigator from '../features/BlankScreen09707/navigator';
import CopyOfBlankScreen09706Navigator from '../features/CopyOfBlankScreen09706/navigator';
import CopyOfBlankScreen19705Navigator from '../features/CopyOfBlankScreen19705/navigator';
import BlankScreen09700Navigator from '../features/BlankScreen09700/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen09713: { screen: BlankScreen09713Navigator },
BlankScreen09711: { screen: BlankScreen09711Navigator },
BlankScreen59708: { screen: BlankScreen59708Navigator },
BlankScreen09707: { screen: BlankScreen09707Navigator },
CopyOfBlankScreen09706: { screen: CopyOfBlankScreen09706Navigator },
CopyOfBlankScreen19705: { screen: CopyOfBlankScreen19705Navigator },
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
