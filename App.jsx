import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            // backgroundColor: '#ffffff',
            borderRadius: 30,
            height: 70,
            marginBottom: 25,
            marginHorizontal: 25,
            // shadowColor: '#000',
            // shadowOffset: { width: 0, height: 10 },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.5,
            // elevation: 5,
            overflow: 'hidden',
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={['#1A1A19', '#31511E']} // Your gradient colors
              style={{flex:1,borderRadius:30}} // Fill entire tab bar
              // start={{x:0,y:0}}
              // end={{x:1,y:1}}
            />
          ),
          tabBarActiveTintColor:"white",  
          tabBarInactiveTintColor:"#CCCCCC",
          tabBarIconStyle: {
            justifyContent: 'center', // Center the icon vertically
            alignItems: 'center',
            height: '100%',
          },
        }}
      >
      <Tab.Screen name ="Home" component={HomeScreen} 
          options={{tabBarIcon: ({color,focused,size}) =>{
            return <AntDesign name={"home"} size={focused?31:22} color={color}/>
          }
        }}/>
      <Tab.Screen name ="Collections" component={HomeScreen}          
          options={{tabBarIcon: ({color,focused,size}) =>{
            return <MaterialIcons name={"collections"} size={focused?31:22} color={color}/>
          }
        }}/>
      <Tab.Screen name ="Search" component={HomeScreen}          
          options={{tabBarIcon: ({color,focused,size}) =>{
            return <AntDesign name={"search1"} size={focused?31:22} color={color}/>
          }
        }}/>
      <Tab.Screen name ="Liked" component={HomeScreen}          
          options={{tabBarIcon: ({color,focused,size}) =>{
            return <AntDesign name={"hearto"} size={focused?31:22} color={color}/>
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})