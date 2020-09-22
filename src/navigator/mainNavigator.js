import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen011012Navigator from '../features/BlankScreen011012/navigator';
import BlankScreen411011Navigator from '../features/BlankScreen411011/navigator';
import CopyOfBlankScreen011010Navigator from '../features/CopyOfBlankScreen011010/navigator';
import CopyOfBlankScreen011009Navigator from '../features/CopyOfBlankScreen011009/navigator';
import CopyOfBlankScreen011005Navigator from '../features/CopyOfBlankScreen011005/navigator';
import BlankScreen011004Navigator from '../features/BlankScreen011004/navigator';
import CopyOfBlankScreen011003Navigator from '../features/CopyOfBlankScreen011003/navigator';
import BlankScreen011002Navigator from '../features/BlankScreen011002/navigator';
import BlankScreen410999Navigator from '../features/BlankScreen410999/navigator';
import BlankScreen110989Navigator from '../features/BlankScreen110989/navigator';
import BlankScreen010979Navigator from '../features/BlankScreen010979/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen011012: { screen: BlankScreen011012Navigator },
BlankScreen411011: { screen: BlankScreen411011Navigator },
CopyOfBlankScreen011010: { screen: CopyOfBlankScreen011010Navigator },
CopyOfBlankScreen011009: { screen: CopyOfBlankScreen011009Navigator },
CopyOfBlankScreen011005: { screen: CopyOfBlankScreen011005Navigator },
BlankScreen011004: { screen: BlankScreen011004Navigator },
CopyOfBlankScreen011003: { screen: CopyOfBlankScreen011003Navigator },
BlankScreen011002: { screen: BlankScreen011002Navigator },
BlankScreen410999: { screen: BlankScreen410999Navigator },
BlankScreen110989: { screen: BlankScreen110989Navigator },
BlankScreen010979: { screen: BlankScreen010979Navigator },

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
