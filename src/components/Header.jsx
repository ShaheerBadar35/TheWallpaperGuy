import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Feather name={menu}/> */}
      <AntDesign name={"menuunfold"} color={"white"} size={30}/>
      <Image source={require("../assets/logo.png")} style={styles.appLogo}/>
      {/* <AntDesign name={"menuunfold"} color={"white"} size={30}/> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Distributes space evenly between children
        paddingHorizontal: 10, // Adds some padding on the left and right
        borderBottomColor:"#31511E",
        borderBottomWidth:2,        
    },
    appLogo: {
        height: 60,
        width: '50%', // Limits logo width to half the container
        resizeMode: 'contain', // Ensures the logo fits within the width and height
        marginRight: '22%',
        paddingTop:"20%",
    },
})