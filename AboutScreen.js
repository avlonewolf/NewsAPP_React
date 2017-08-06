import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  backgroundColor: '#202020',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img:{

    flex: 3,
    width: 450,
  height: 350,  },
textcontainer:{
flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: '#202020',
},
canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  newscontent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: 'white'
  },
});

export default class SecondScreen extends Component {
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
  return (
    <View style={styles.container}>
<View style={styles.img}>
< Image source={{ uri: params.newsImage}}
 resizeMode="stretch"
 style={styles.img}
   />
</View>
<View style={styles.textcontainer}>
    <View><Text style={styles.heading}>
    {params.newsTitle}
  </Text></View>
    <View><Text style={styles.newscontent}>
    {params.newsDescription}
  </Text></View>
</View>

  </View>
  );
}
}
SecondScreen.navigationOptions = ({ navigation }) => ({
    title: 'News',
headerTitleStyle:{ color: 'white'},
    headerStyle:{ backgroundColor: '#000000'},
  });
