import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';

export default class UsersView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"johndoe1"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"johndoe2"},
         {image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"johndoe3"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"johndoe4"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"johndoe5"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"johndoe6"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"johndoe7"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"johndoe8"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"johndoe2"},
      ]
    };
  }

  removePeople(item){
 this.state.dataSource = this.state.dataSource.splice(this.state.dataSource.indexOf(item), 1);
 
}

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.body}>
           <FlatList
        data={this.state.dataSource}
        renderItem={({ item }) =>        
                    <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: item.image}}/>
                      <Text style={styles.username}>{item.username}</Text>
                    <View style={styles.iconContent} >
                      <TouchableWithoutFeedback onPress={() => Alert.alert('Person invited')}>
                        <Text style={{ fontSize: 18, color: "white" }}>Invite</Text>                     
                       </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text style={{ fontSize: 18, color: "red" }}>Ignore</Text>                     
                       </TouchableWithoutFeedback>
                    </View>
        </View>
                   </TouchableOpacity>
                   }
        keyExtractor={item => item.id}
      />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: 60,
    height: 60,
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  box: {
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  iconContent:{
    width: 60,
    height: 60,
    backgroundColor: '#40E0D0',
    marginLeft: 'auto',
    alignItems: 'center'
  },

  btn:{
    fontSize:10
  },
  icon:{
    width: 40,
    height: 40,
  }
});