import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen111021Navigator from '../features/CopyOfBlankScreen111021/navigator';
import BlankScreen011020Navigator from '../features/BlankScreen011020/navigator';
import BlankScreen011019Navigator from '../features/BlankScreen011019/navigator';
import BlankScreen411018Navigator from '../features/BlankScreen411018/navigator';
import CopyOfBlankScreen011017Navigator from '../features/CopyOfBlankScreen011017/navigator';
import BlankScreen011016Navigator from '../features/BlankScreen011016/navigator';
import BlankScreen411014Navigator from '../features/BlankScreen411014/navigator';
import CopyOfBlankScreen011013Navigator from '../features/CopyOfBlankScreen011013/navigator';
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

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen111021: { screen: CopyOfBlankScreen111021Navigator },
BlankScreen011020: { screen: BlankScreen011020Navigator },
BlankScreen011019: { screen: BlankScreen011019Navigator },
BlankScreen411018: { screen: BlankScreen411018Navigator },
CopyOfBlankScreen011017: { screen: CopyOfBlankScreen011017Navigator },
BlankScreen011016: { screen: BlankScreen011016Navigator },
BlankScreen411014: { screen: BlankScreen411014Navigator },
CopyOfBlankScreen011013: { screen: CopyOfBlankScreen011013Navigator },
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
