import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

// const imageURL="https://wallpapers.com/images/high/messi-iphone-fhku23h1ap4e31ql.webp";

const ImageCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:item.image}} style={styles.coverImage}/>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
            <AntDesign name={"hearto"} size={30} color={"#F6FCDF"}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Feather name={"download"} size={30} color={"#F6FCDF"}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    container:{
        height:300,
        width:"46%",
        backgroundColor:"pink",
        margin:8,
        borderWidth:1,
        borderColor:"black",
        borderRadius:20,
        overflow:"hidden",
        marginTop:15,
        // paddingTop:20,
        // marginRight:,
        // borderRadius:"hidden",
        // marginRight:8,
    },
    coverImage:{
        flex:1,
    },
    iconContainer:{
        position:'absolute',
        bottom:10,
        left:"5%",
    }
})