import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Ponha teu nome abaixo:</Text>
      <TextInput style={styles.caixaTexto}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  field:{
    color: '#fff',
    fontSize: 20,
  },

  caixaTexto:{
    backgroundColor: 'black',
    width: 300,
    borderRadius: 10,
    padding: 15,
    marginTop: 20
  },

});
