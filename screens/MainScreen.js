import React, { Component } from "react";
import { 
    StyleSheet
} from "react-native";

import {Button,Icon} from 'native-base'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ExploreScreen from '../component/ExploreScreen'
import Details from "../ExploreScreen/Details";
import InboxScreen from '../component/InboxScreen'
import PostScreen from '../component/PostScreen'
import NotificationsScreen from '../component/NotificationsScreen'
import Notify from "../NotificationsScreen/Notify"
import NewsScreen from '../component/NewsScreen'
import ProfileScreen from '../component/ProfileScreen'
import CameraScreen from '../component/CameraScreen'

const ExploreStackScreen = ({navigation}) => {
    return(
    <ExploreStack.Navigator screenOptions={{headerTitleStyle: {
        paddingLeft:66,color:'dodgerblue',justifyContent:'center'
    }}}>
        <ExploreStack.Screen name="Home" component={ExploreScreen} options={{
            headerRight: () => (
                <Button onPress={() => navigation.navigate('Inbox')} transparent>
                <Icon style={{color:"dodgerblue",fontSize:28,marginTop:7}} name="ios-rocket" />
                </Button>
            ),
            headerTitle: "Moments",
            headerLeft: () => (
                <Button onPress={() => navigation.navigate('Camera')} transparent>
                <Icon style={{color:"dodgerblue",fontSize:32,marginTop:7}} name='md-aperture' />
                </Button>
            )
        }}/>
        <ExploreStack.Screen name="Inbox" component={InboxScreen} />
        <ExploreStack.Screen name="Camera" component={CameraScreen} options={{headerShown:false}} />
        <ExploreStack.Screen name="Details" component={Details} />
    </ExploreStack.Navigator>
    )
}

const NotificationsStackScreen = () => {
    return(
    <NotificationsStack.Navigator>
        <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} options={{headerShown:false}}/>
        <NotificationsStack.Screen name="Notify" component={Notify} options={({route}) => ({title: route.params.name})}/>
    </NotificationsStack.Navigator>
    )
}

const NewsStackScreen = () => {
    return(
    <NewsStack.Navigator screenOptions={{headerTitleStyle: {
        paddingLeft:138
    }}}>
        <NotificationsStack.Screen name="News" component={NewsScreen} options={{headerLeft:null}}/>
    </NewsStack.Navigator>
    )
}

const PostStackScreen = () => {
    return(
    <PostStack.Navigator>
        <PostStack.Screen name="Post" component={PostScreen} options={{headerShown:false}}/>
    </PostStack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return(
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    </ProfileStack.Navigator>
    )
}




class MainScreen extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName='Home' backBehavior='none' tabBarOptions={{activeTintColor:'dodgerblue', inactiveTintColor:'black', showLabel: false, keyboardHidesTabBar: true}}>

                <Tab.Screen name='Home' 
                component={ExploreStackScreen}
                options={{
                    tabBarColor: 'red',
                    tabBarIcon:({color,size}) => (
                       <Icon3 name = "home" color={color} size={28} />
                    )
                }} />
                <Tab.Screen name='News' 
                component={NewsStackScreen}
                options={{
                    tabBarColor: 'black',
                    tabBarIcon:({color,size}) => (
                       <MaterialCommunityIcons name= "newspaper" color={color} size={30} />
                    )
                }} />
                <Tab.Screen name='Post' 
                component={PostStackScreen}
                options={{
                    tabBarColor:'blue',
                    tabBarIcon:({color,size}) => (
                       <Icon1 name = "ios-add-circle" color={color} size={50}  />
                    ),
                }} />
                <Tab.Screen name='Notifications'
                 component={NotificationsStackScreen}
                 options={{
                    tabBarColor: 'purple',
                     tabBarIcon:({color,size}) => (
                         <Ionicons name = "ios-flash" color={color} size={30} />
                     )
                 }} />
                <Tab.Screen name='Profile' 
                component={ProfileStackScreen}
                options={{
                    tabBarColor: 'black',
                    tabBarIcon:({color,size}) => (
                       <MaterialCommunityIcons name= "alien" color={color} size={34} />
                    )
                }} />
            </Tab.Navigator>
        );
    }
}


const Tab = createBottomTabNavigator();
const ExploreStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const NewsStack = createStackNavigator();
const PostStack = createStackNavigator();
const ProfileStack = createStackNavigator();


export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
