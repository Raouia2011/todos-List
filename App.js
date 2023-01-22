import { StyleSheet,   Text,
  SafeAreaView,
  ScrollView,
  StatusBar} from "react-native";
import Header from "./components/Header";
import MailingMethod from "./components/MailingMethod";
export default function App() {
  return(
    <SafeAreaView style={styles.container}>
          <Header>ToDo-Liste</Header>
         <MailingMethod/>
         </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDBEAA"
  }  
})