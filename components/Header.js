import { StyleSheet, View, Text } from "react-native";

const Header = ({ children }) => {
  return (
    <View style={styles.headerBox}>
      <Text style={[styles.headerText]}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    paddingVertical: 30,
    marginTop: 100,
    backgroundColor: "#5BA199",
    borderRadius: 5,
    width: "100%",
  },
  headerText: {
  
    textAlign: "center",
    fontSize: 28,
    color: "white",
  },
});