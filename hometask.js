import React, { useState } from "react";
import { View,Text,Image,StyleSheet,TouchableOpacity,FlatList,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

// import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home(){

    const [showAll,setShowAll] =useState(false);

    const elements =  [
        {label:"home",icon:"home"},
        {label:"star",icon:"star"},
        {label:"search",icon:"search"},
        {label:"user",icon:"user"},
        {label:"lock",icon:"lock"},
        {label:"save",icon:"bookmark"},
        {label:"like",icon:"thumbs-o-up"},
        {label:"connect",icon:"linkedin-square"},
        {label:"git",icon:"github"},
        {label:"filter",icon:"filter"},
        {label:"pinterest",icon:"pinterest"},
        {label:"restart",icon:"undo"}
    ]

    const visibleElements = showAll ? elements :elements.slice(0,8);

    return (
        <View>
        <SafeAreaView>
          <ScrollView>
          <View style={styles.colors}>
       <Image source={require("./assets/thub.png")} style={styles.imgc} resizeMode="contain"></Image>
       <Icon name="bell" size={22} color="orange" />
       </View>

       {/* <Text style={{fontSize:20,marginLeft:16}}>Welcome, Shiva</Text>
       <View>
        <Image source={require("./assets/thub2.jpg")}  style={{width:350,height:200}}resizeMode="contain"></Image>
       </View> */}

       <View style={styles.pic}>
        <View style={styles.texts}>
        <Text style={{color:"white",fontSize:22,marginBottom:100,marginRight:10}}>Welcome</Text>
        <Text style={{color:"yellow",fontSize:20,marginTop:2}}>Shiva Kumar</Text>
        </View>
        <Image source={require("./assets/shiva.png")} style={styles.myimg} resizeMode="contain"></Image>
       </View>  

       <View>
        <Image source={require("./assets/thub2.jpg")}  style={{width:350,height:200,marginLeft:5}} resizeMode="contain"></Image>
       </View>

       <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => setShowAll(!showAll)}
        >
          <Text style={styles.text}>{showAll ? "Less" : "More"}</Text>
          <Icon
            name={showAll ? "caret-up" : "caret-down"}
            size={20}
            color="green"
          />
        </TouchableOpacity>
      </View>

      
        <FlatList
        data={visibleElements}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4} 
        renderItem={({ item }) => (
          <View style={styles.elements}>
            <View style={styles.iconones}>
            <Icon name={item.icon} size={30} color="white" /> 
            </View>
            <Text style={styles.elementText}>{item.label}</Text>
          </View>
        )}
        contentContainerStyle={styles.gridContainer}  
        scrollEnabled={false}
      />
      
    </View>
    <View>
        <Image source={require("./assets/thub1.jpg")}  style={{width:350,height:200,marginLeft:5}} resizeMode="contain"></Image>
       </View>
       </ScrollView>
        </SafeAreaView>
        
        </View>
    )
}

const styles = StyleSheet.create({
    imgc:{
       flex:1,
       
    },
    colors:{
      paddingRight:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    container: {
        margin: 20,
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      title: {
        fontSize: 20,
        color: "orange",
        fontWeight: "bold",
      },
      btn1: {
        flexDirection: "row",
        alignItems: "center",
      },
      text: {
        fontSize: 16,
        color: "green",
        fontWeight: "bold",
        marginRight: 5,
      },
      gridContainer: {
        marginTop: 10,
        paddingBottom: 10,
      },
      elements: {
        flex: 1,
        alignItems: "center",
        margin: 10,  
      },
      elementText: {
        fontSize: 14,
        color: "#333",
        marginTop: 5,
      },
      iconones:{
        width:60,
        height:60,
        backgroundColor:"green",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
      },
      pic: {
        height: 200,
        width: 360,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "space-around",
        display:"flex",
        flexDirection:'row',
    },
    texts:{
      flexDirection:"row",
      justifyContent:"flex-end",
      marginRight:10,
    },
    myimg:{
      width:160,
      height:200,
      backgroundColor:"green",
    }

})
 