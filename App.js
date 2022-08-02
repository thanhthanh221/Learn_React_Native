/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//Bình Luận như thế này

import React, {useState} from 'react';
import {Button,
  FlatList, 
  RefreshControl, 
  ScrollView, 
  ScrollViewBase, 
  SectionList, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [Items, setItems] = useState([
    {key:1, name: 'Item 1'},
    {key:2, name: 'Item 2'},
    {key:3, name: 'Item 3'},
    {key:4, name: 'Item 4'},
    {key:5, name: 'Item 5'},
    {key:6, name: 'Item 6'},
    {key:7, name: 'Item 7'},
    {key:8, name: 'Item 8'},
    {key:9, name: 'Item 9'},
    {key:10, name: 'Item 10'},
    {key:11, name: 'Item 11'},
    {key:12, name: 'Item 12'},
    {key:13, name: 'Item 13'},
    {key:14, name: 'Item 14'},
    {key:15, name: 'Item 15'},  
  ])
  const DATA = [
    {
      title:'Title 1',
      data: ['Item 1-1', 'Item 1-2']
    },
    {
      title:'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
    },
    {
      title:'Title 3',
      data: ['Item 3-1', 'Item 3-2']
    },
    {
      title:'Title 4',
      data: ['Item 4-1', 'Item 4-2']
    },
  ]
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 17, name: 'Item 69'}])
    setRefreshing(false);
  }
  return (
    <View>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}> {item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text style= {styles.sectionTitle}>{title}</Text>
          </View>
        )}
      />
      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data={Items}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}> {item.name}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }
      />
      <ScrollView 
      // cái quay quay tron tròn
        refreshControl={
          <RefreshControl refreshing ={refreshing}
          onRefresh= {onRefresh}
          colors={['#ff00ff']}
        />} 
        style={styles.body}
      >
        {
          Items.map((object) => {
            return (
              <View style={styles.item} key= {object.key}>
                <Text style={styles.text}> {object.item}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  item: {
    margin: 10,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle:'italic',
    margin: 10
  },
  sectionTitle: {
    marginLeft:'40%',
    color: '#000000',
    fontSize: 30,
    fontWeight:'bold'
  }
});

export default App;
