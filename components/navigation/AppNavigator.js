import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign: 'center', // This centers the header title
        }}
      />
    </Stack.Navigator>
  );
};


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
}, 
{
defaultNavigationOptions: {
    title: 'Aligned Center',
    headerTitleAlign: 'center'
}
});

export default AppNavigator;
