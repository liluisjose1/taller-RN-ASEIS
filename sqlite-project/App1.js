import { Icon, SQLite } from 'expo';
import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View, Text
} from 'react-native';

const db = SQLite.openDatabase('db.db');


const styles = StyleSheet.create({
  swipeoutSide: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: '#6772e5',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    height: 124
  },
  listHeader: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  listTitle: {
    fontSize: 22,
    color: '#999999',
    marginBottom: 2
  },
  listSubTitle: {
    fontSize: 14,
    color: '#a6a6a6'
  }
});

var swipeoutRightBtns = [
  {
    backgroundColor: '#fff',
    component: (
      <View style={styles.swipeoutSide}>
        <Icon.Ionicons
          size={40}
          onPress={() => alert("Edit")}
          color='#ffc107'
          name={
            Platform.OS === 'ios'
              ? `ios-create-outline`
              : 'md-create'
          } />
      </View>
    )
  },
  {
    backgroundColor: '#fff',
    component: (
      <View style={styles.swipeoutSide}>
        <Icon.Ionicons
          size={40}
          onPress={() => alert("Delete")}
          color='#dc3545'
          name={
            Platform.OS === 'ios'
              ? `ios-trash-outline`
              : 'md-trash'
          }
        />
      </View>
    )
  }
];

var swipeoutLeftBtns = [
  {
    backgroundColor: '#fff',
    component: (
      <View style={styles.swipeoutSide}>
        <Icon.Ionicons
          size={40}
          onPress={() => alert("Complete")}
          color='#28a745'
          name={
            Platform.OS === 'ios'
              ? `ios-checkmark-circle-outline`
              : 'md-checkmark-circle-outline'
          } />
      </View>
    )
  },
  {
    backgroundColor: '#fff',
    component: (
      <View style={styles.swipeoutSide}>
        <Icon.Ionicons
          size={40}
          onPress={() => alert("Share")}
          color='#007bff'
          name={
            Platform.OS === 'ios'
              ? `ios-share-outline`
              : 'md-share-alt'
          } />
      </View>
    )
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      items: null,
    };
  }
  
  render() {
    const { items } = this.state;
    if (items === null || items.length === 0) {
      return null;
    }
    return (
      <Swipeout left={swipeoutLeftBtns} right={swipeoutRightBtns} backgroundColor="#fff">
        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Test Store</Text>
            <Text style={styles.listSubTitle}>Test Item</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }
}

