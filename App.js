import { StyleSheet,  SafeAreaView } from "react-native";
import Header from "./components/Header";
import Items from "./components/Items";


export default function App() {
  return(
  <SafeAreaView style={styles.container}>
        <Header>ToDo-Liste</Header>
        <Items></Items>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  }  
})