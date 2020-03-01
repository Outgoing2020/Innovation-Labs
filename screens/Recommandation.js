import React, { Component } from 'react';
import { Dimensions, Image} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Title } from 'native-base';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import SlidingUpPanel from 'rn-sliding-up-panel';

const {height} = Dimensions.get('window');

const cards = [
  {
    id: 1,
    text: 'Pub 18',
    location: 'Regie',
    review: "Good",
    image: require('../assets/taietorul-de-lemne-wide.jpg'),
    imageSmall: require('../assets/pub18_small.jpeg')
  },
  {
    id: 2,
    text: 'Maria si Ion',
    location: 'Regie',
    review: "Traditional",
    image: require('../assets/maria_si_ion.jpg'),
    imageSmall: require('../assets/maria_si_ion_profile.png')
  },

  {
    id: 3,
    text: 'Quantic',
    location: 'Grozavesti',
    review: "Rock",
    image: require('../assets/q.jpg'),
    imageSmall: require('../assets/q.jpg')
  }
];

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    flexDirection:"column",
    justifyContent:'space-between',  
    flex: 1,
    marginTop: 10
  },

  good: {
    flexDirection:"column",
    justifyContent:'space-between',  
    flex: 1,
    margin: 100
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
}

export default class Recommandation extends Component {

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  state = {
      hits: [],
      elements: []
   }
   alertItemName = (item) => {
      alert(item.name);
   }

   componentDidMount() {
    fetch('http://outgoing.pythonanywhere.com/places')
      .then(response => response.json())
      .then(resp => this.setState({ hits: resp }) );
    
  }

  createTable = () => {
    console.log(this.state.hits)
    for (var key in this.state.hits) {
  if (!this.state.hits.hasOwnProperty(key)) continue;
  console.log(key); 
  console.log(this.state.hits[key].date);
  this.state.elements.push({
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
      <Container>
        <Header> 
            <Body>
            <Title>OutGoing</Title>
            </Body>
        </Header>
        <View>
      
        <DeckSwiper
        onSwipeLeft={console.log("Left")}
        onSwipeRight={console.log("Right")}
            dataSource={cards}
            renderItem={item =>
            <View style={styles.red}> 
             <View style={styles.red}>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.imageSmall} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.location}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="chatbubbles" style={{ color: 'blue' }} />
                  <Text>Reviews</Text>
                </CardItem>
              </Card>
              </View>
              <View style={styles.good}>
             <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height, bottom: 120}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={{color: '#FFF'}}>SwipeUp for more</Text>
            </View>
            <View style={styles.container}>
              <Text>{item.review}</Text>
            </View>
          </View>
        </SlidingUpPanel>
        </View>
        </View>
            }/>
         
        </View>
       
      </Container>
    );
  }
}