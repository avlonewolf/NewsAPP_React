import React, { Component } from 'react';
import {Alert, ActivityIndicator, ListView, Text, View,StyleSheet,Image,TouchableOpacity,StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  text: {flex: 1,
      color: 'white',
      marginLeft: 12,
      marginBottom:6,
      fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#404040',
  },
});

export default class News extends Component
{
  constructor(props) {
    super(props);
//this.onPressButton = this.onPressButton.bind(this);
    this.state = {
      isLoading: true
    }
  }
  static navigationOptions = {
      title: '        News List',
      headerStyle:{ backgroundColor: '#000000'},
      headerTitleStyle:{ color: 'white'},
          };
 componentDidMount() {
    return fetch('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bb170e423a7647bf8f889939621bd2a3')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.articles),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    <StatusBar hidden={true} />
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );}
      const { navigate } = this.props.navigation;




    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) =>   <TouchableOpacity style={styles.container} onPress={() => navigate('SecondScreen',{ newsTitle: data.title,newsDescription: data.description,newsImage: data.urlToImage })}>
              <Image source={{ uri: data.urlToImage}} style={styles.photo} />
              <Text style={styles.text}>
                {`${data.title}`}
              </Text>
            </TouchableOpacity>
 }
renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }

  /*onPressButton() {
    const { navigate } = this.props.navigation;
     navigate('SecondScreen');
   }*/
}
