import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import FlatListBasics from './screens/FlatListBasic';

export default function App() {
  return (
    <View style={styles.container}>
     <FlatListBasics></FlatListBasics>
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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#ff00ff",
  },
  input: {
    height: 40,
    borderBottomWidth: 1.0
  },
});
