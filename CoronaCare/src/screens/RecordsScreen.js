import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

export default class RecordsScreen extends Component {
  constructor(props) {
    
    super(props);

    // this.array = [{
    //   title: 'ONE'
    // },
    // {
    //   title: 'TWO'
    // },
    // {
    //   title: 'THREE'
    // },
    // {
    //   title: 'FOUR'
    // },
    // {
    //   title: 'FIVE'
    // }
    // ],

    // this.state = {
    //   arrayHolder: [],
    // }
  }

  // componentDidMount() {
  //   this.setState({ arrayHolder: [...this.array] })
  // }

  render() {
    const DATA = [
      {title: "jerome", image:"https://reactnative.dev/img/tiny_logo.png", key: "1"},
      {title: "rishab",  image:"https://reactnative.dev/img/tiny_logo.png",  key: "2" }
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Records</Text> 
        <FlatList
          keyExtractor={(item) => item.key}
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <Image source = {{uri: item.image}} style={styles.Image}></Image>
            <Text style={styles.title}> {item.title} </Text>
            </View> 
          )}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    width:50,
    height:50,
    margin:7,
    borderRadius: 7
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 40,
    color: '#000000',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 30,
  },
});

