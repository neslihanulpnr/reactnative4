import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { User } from './User';

export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />

<User/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
