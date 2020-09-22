import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen011003Navigator from '../features/CopyOfBlankScreen011003/navigator';
import BlankScreen011002Navigator from '../features/BlankScreen011002/navigator';
import BlankScreen410999Navigator from '../features/BlankScreen410999/navigator';
import BlankScreen310998Navigator from '../features/BlankScreen310998/navigator';
import BlankScreen110989Navigator from '../features/BlankScreen110989/navigator';
import BlankScreen010979Navigator from '../features/BlankScreen010979/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen011003: { screen: CopyOfBlankScreen011003Navigator },
BlankScreen011002: { screen: BlankScreen011002Navigator },
BlankScreen410999: { screen: BlankScreen410999Navigator },
BlankScreen310998: { screen: BlankScreen310998Navigator },
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
