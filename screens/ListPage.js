import React, { Component } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Dimensions, Image} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Title } from 'native-base';

import SlidingUpPanel from 'rn-sliding-up-panel';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

class ListPage extends Component {

   state = {
      names: [
         {
            id: 0,
            name: 'Produs1',
            price: 10,
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/outgoing-c10ee.appspot.com/o/maria_si_ion.jpg?alt=media&token=9caeab0c-053b-4f80-b29b-e92b06f47311'
         },
         {
            id: 1,
            name: 'Produs2',
            price: 20,
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/outgoing-c10ee.appspot.com/o/judas_priest.jpg?alt=media&token=85823974-4f11-4294-ba8e-5c86408b08aa'
         },
         {
            id: 2,
            name: 'Produs3',
            price: 30,
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/outgoing-c10ee.appspot.com/o/anthrax.jpg?alt=media&token=526a6bd6-6613-4043-ae5e-3a47d527de81'
         },
         {
            id: 3,
            name: 'Produs4',
            price: 40,
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/outgoing-c10ee.appspot.com/o/an_theos.jpg?alt=media&token=5afbd427-a181-4c6a-97fe-cccc899797fe'
         }
      ],
      hits: [],
      elements: []
   }
   alertItemName = (item) => {
      alert(item.name);
   }

   componentDidMount() {
    fetch('http://outgoing.pythonanywhere.com/events')
      .then(response => response.json())
      .then(resp => this.setState({ hits: resp }) );
    
  }


  createTable = () => {
    console.log(this.state.hits)
    for (var key in this.state.hits) {
  if (!this.state.hits.hasOwnProperty(key)) continue;
  console.log(key); 
  console.log(this.state.hits[key].date);
  this.state.elements.push({date: this.state.hits[key].date, 
    id: this.state.hits[key].id,
    imageURL: this.state.hits[key].imageURL,
    link: this.state.hits[key].link,
    name: this.state.hits[key].name,
    review: this.state.hits[key].review,
    score: this.state.hits[key].score
  })
}
  }

   render() {

      return ( 

          <SafeAreaView style={styles.container}>
          {this.createTable()}
      <ScrollView style={styles.scrollView}>
            {
               this.state.elements.map((item, index) => (
                  
                    <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.date}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 400, flex: 1 }} source={{uri: item.imageURL}} />
                </CardItem>
                <CardItem>
                  <Icon name="chatbubbles" style={{ color: 'blue' }} />
                  <Text>Details</Text>
                </CardItem>
              </Card>
              
               ))
            }
          </ScrollView>
    </SafeAreaView>

      )
   }
}
export default ListPage;

