import { View, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [newItemText, setItemText] = useState("");
  const [input,setInput]=useState()

  const trackText = (text) => {
    setItemText(text);
   

  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput
          placeholder="Item..."
          style={styles.itemText}
          placeholderTextColor={"white"}
          onChangeText={trackText}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.appButtonContainer}
          title="Add Item"
          onPress={() => {
            onAddItem(newItemText);
          }}
        >Add Item</Text>
      </View>
    </View>
  );
};

export default NewItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#469597",
    borderRadius: 20,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemText: {
    color: "white",
    
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: "white",
    textAlign:"center"
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});