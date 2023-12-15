import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Btn } from './Btn';

export default function App() {
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <ScrollView>
      <Btn color={"blue"} text={"TEXT1"}/>
      <Btn color={"purple"} text={"TEXT2"}/>
      <Btn color={"pink"} text={"TEXT3"}/>
      <Btn color={"yellow"} text={"TEXT4"}/>
      <Btn color={"lightgrey"} text={"TEXT5"}/>
      <Btn color={"red"} text={"TEXT6"}/>
      </ScrollView>
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
