import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ImageCard from '../components/ImageCard'
import data from '../data/data.json'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      {/* <View style={{flex:1,flexDirection:"row",alignContent:'space-between',}}>
        <ImageCard/>
        <ImageCard/>
      </View> */}
      <FlatList
        data={data}
        renderItem={({item,index})=><ImageCard item={item} index={index}/>}
        numColumns={2}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#1A1A19",
  },
})