
import {ScrollView, Text, StyleSheet,  Dimensions,View} from 'react-native';


import { useState } from 'react';

import Items from "./Items";

 
  
let screenWidh=Dimensions.get('window').width
let screenHeight=Dimensions.get('window').height

  export default function MailingMethod() {
const options=["email","SMS","Push"]
const [selectedOption,setSelectedOption]=useState([])
const [selected, setSelected] = useState(false);
 
    
    return(
   
       <ScrollView horizontal={true} 
       pagingEnabled={true}
       showsHorizontalScrollIndicator={true}
       scrollIndicatorInsets={{top:10,left:18,bottom:10,right:10}}//ios
       >
        <View style={styles.container}>
       <Text style={styles. headerText}>Please choose your mailing method</Text>
        {options.map((option,index)=>{
          return(
            <View key={index} style={styles.checkboxContainer}>
              <Text  onPress={()=>{
              
                alert(option,selectedOption)}}>
                  {option}
              </Text>
              
            </View>
          )
        })}
       </View>
        <View style={styles.container}>
       <Items style={styles.container}/>
       </View>
       </ScrollView>
       
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:(screenWidh/100)*90,
      height:(screenHeight/100)*70,
      backgroundColor: "#5BA199",
      marginRight:(screenWidh/100)*5,
      marginLeft:(screenWidh/100)*5,
      marginTop:(screenHeight/100)*7,
      borderRadius:15,
     } ,
     checkboxContainer: {
      flex: 1,
     flexDirection: 'row',
    justifyContent:'space-around'
      
    },
   
     paragraph: {
      fontSize: 15,
    },
    headerBox: {
      
      marginTop: 80,
      backgroundColor: "#5BA199",
      borderRadius: 5,
      width: "100%",
    },
    headerText: {
      marginTop: 80,
      marginBottom: 50,
      textAlign: "center",
      fontSize: 25,
      color: "white",
    },
    appButtonContainer: {
     backgroundColor: "#009688",
     color: "white",
      textAlign:"center",
      marginTop:10
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      
    },
    checkbox: {
      margin: 8,
    },
    
  })