import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';

const Stack = createStackNavigator();

export const Navigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{
                title: "Anasayfa"
            }}/>
            <Stack.Screen name='profile' component={Profile} options={{
                title: "Profile"
            }}/>
        </Stack.Navigator>
    )
}
export default Navigator;