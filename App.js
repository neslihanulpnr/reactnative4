import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { UserList } from './UserList';

export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />

<UserList/>

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
