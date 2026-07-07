import {
  createStackNavigator
} from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { NavigationContainer } from '@react-navigation/native';

const MyStack = createStackNavigator();

export const AppRoutes = () => (
    <NavigationContainer>
        <MyStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <MyStack.Screen name="Home" component={Home} />
            <MyStack.Screen name="Settings" component={Settings} />
        </MyStack.Navigator>
    </NavigationContainer>
);