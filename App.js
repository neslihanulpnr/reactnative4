import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigator';
import { View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{backgroundColor: "white", flex: 1}}>
        <StatusBar style="auto" />
        <Navigator />
      </View>
    </NavigationContainer>

  );
}
