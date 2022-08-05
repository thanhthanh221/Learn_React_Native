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
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MashButton from './CustomButton';
import { styles } from '../Styles/Styles';
import Header from './Header'


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
    <ImageBackground 
      source={{uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-fresh-and-simple-h5-background-app-guide-page-design-background-download-image_121781.jpg'}} 
      style={styles.body}>
        <Header />
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
      <MashButton
        onPressHandler = {onPressHandler}
        title = {submitted ? 'Clear' : 'Submit'}
        color= {'#00ff00'}
      />
      <MashButton
        onPressHandler = {onPressHandler}
        title = {'Test'}
        color= {'#ff00ff'}
        style= {{margin: 10}}
      />
      
      {
        submitted ?
          <View style={styles.body}> 
            <Text style={styles.text}>
                Tên là : {name}
              </Text>
              <Image
              resizeMode='cover'
              style={styles.image} 
              source={{uri: 'https://vioa.com.vn/wp-content/uploads/2020/08/done.png'}} 
              />  
          </View>
          :
          <Image
            resizeMode='cover'
            style={styles.image} 
            source={{uri: 'https://i.pinimg.com/originals/97/96/e0/9796e0dff2ee66b1b8c529e61f8668fc.png'}} 
            />
      }
    </ImageBackground>
  );
};



export default App;
