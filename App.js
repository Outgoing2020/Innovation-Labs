import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"

import SwipeUp from './components/SwipeUp';
import RegForm from './screens/RegForm';
import ListPage from './screens/ListPage';
import Accepted from './screens/Accepted';
import ProfileUI from './screens/ProfileUI';
import Recommandation from './screens/Recommandation';
import Group from './screens/Groups';

const Header =({name, openDrawer})=> (
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>openDrawer()}>
 
    </TouchableOpacity>
    <Text>{name}</Text>
    <Text style={{width:50}}></Text>
  </View>
)
const Home = ({navigation}) => (
  
     <ProfileUI/>
  
)

const Profile = ({navigation}) => (
     <ListPage/>
)

const Requests = ({navigation}) => (
 
    <Accepted/>
)

const Groups = ({navigation}) => (
  
    <Group/>
  
)

const Recommandations = ({navigation}) => (

    <Recommandation/>
)


function Item({ item, navigate }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>

      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
      routes:[
          {
              name:"Home",
              icon:"ios-home"
          },
          {
              name:"Profile",
              icon:"ios-contact"
          },
          {
              name:"Requests",
              icon:"ios-Requests"
          },
          {
              name:"Groups",
              icon:"ios-Groups"
          },

           {
              name:"Recommandations",
              icon:"ios-Recommandation"
          },
      ]
  }

  
  render(){
      return (
          <View style={styles.container}>
              <Image source={require("./assets/pp.jpg")} style={styles.profileImg}/>
              <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>AlexGeorg</Text>
              <Text style={{color:"gray",marginBottom:10}}>gherghescu_alex1@yahoo.ro</Text>
              <View style={styles.sidebarDivider}></View>
              <FlatList
                  style={{width:"100%",marginLeft:30}}
                  data={this.state.routes}
                  renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                  keyExtractor={item => item.name}
              />
          </View>
      )
  }
}

const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home},
    Profile:{ screen: Profile},
    Requests:{ screen: Requests},
    Groups:{ screen: Groups},
    Recommandations:{ screen: Recommandations}

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    unmountInactiveRoutes: true
  }
)

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render(){

    return (
      <AppContainer />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:40,
    alignItems:"center",
    width:"100%",

  },
  listItem:{
      height:60,
      alignItems:"center",
      flexDirection:"row",
  },
  title:{
      fontSize:18,
      marginLeft:20
  },
  header:{
    width:"100%",
    height:60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
  },
  profileImg:{
    width:80,
    height:80,
    borderRadius:40,
    marginTop:20
  },
  sidebarDivider:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  }
});