/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//Bình Luận như thế này

import React, {useState} from 'react';
import {Alert, Button,
  FlatList, 
  Modal, 
  Pressable, 
  RefreshControl, 
  ScrollView, 
  ScrollViewBase, 
  SectionList, 
  StyleSheet, 
  Text, 
  TextInput, 
  ToastAndroid, 
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { styles } from './Styles';


const App = () => {
  const [name, setName] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const onPressHandler = () => {
    if(name.length> 3) {
      setSubmitted(!submitted);
    }
    else {
      // Alert.alert('Cảnh báo', 'Tên của bạn quá ngắn',
      //   [
      //     {text: 'Ok',onPress: () => console.warn('Nguy hiểm'), style: 'cancel' },
      //     {text: 'Hủy',onPress: () => console.warn('Nguy hiểm'), style: 'cancel' },
      //     {text: 'Sau',onPress: () => console.warn('Nguy hiểm'), style: 'destructive' },
      //   ],{
      //     cancelable: true,
      //     onDismiss: () => console.warn('Warring của cancelable')
      //   });
      // ToastAndroid.showWithGravityAndOffset(
      //   'Tên ngắn hơn 3 kí tự',
      //   ToastAndroid.SHORT,
      //   ToastAndroid.TOP,
      //   -200,
      //   100
      // )
      setModalVisible(!modalVisible );
    }
    
  }
  return (
    <View style={styles.body}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose= {() => setModalVisible(false)}
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style= {styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>

            <View style={styles.warning_body}>
              <Text style={styles.text}>Tên quá ngắn</Text>
            </View>

            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style= {styles.warning_button}
              android_ripple={{Colors: '#fff'}}
            >
              <Text style={styles.text}>Ok</Text>
            </Pressable>
            
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Vui lòng nhập tên của bạn: 
      </Text>
      <TextInput
      // nhiều dòng
        multiline = {true}
        style={styles.input}
        placeholder='vd: Nhập họ tên'
        onChangeText={(value) => setName(value)}
        keyboardType={'default'}
        maxLength={30}
        editable={true}
      />
      
      {/* <TouchableWithoutFeedback
        onPress={onPressHandler}
      >
        <View style= {styles.button}>
          <Text style = {styles.text}>
            {submitted? 'Gửi đi' : 'Xóa'}
          </Text>
        </View>
      </TouchableWithoutFeedback> */}
      <Pressable
        onLongPress={onPressHandler}
        delayLongPress={500}
        hitSlop= {{bottom: 10, left: 10, right: 10, top: 10}}
        android_ripple={{color: '#00f'}}
        style = {({pressed}) => [
          {backgroundColor: pressed? '#dddddd': '#00ff00'},
          styles.button
        ]}
      >
        <Text style = {styles.text}>
          {submitted ? 'Gửi đi' : 'Xóa'}
        </Text>
      </Pressable>
      {
        submitted ? 
          <Text style={styles.text}>Tên là : {name}</Text>
          : null
      }
    </View>
  );
};



export default App;
