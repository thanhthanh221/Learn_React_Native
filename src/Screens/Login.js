import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import react, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setAge, setName} from '../redux/actions';
import img from '../../assets/redux.png';

const Login = ({navigation}) => {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const setData = async () => {
    if (name.length === 0) {
      Alert.alert('Nguy Hiểm');
    } else {
      dispatch(setName(name));
      dispatch(setAge(age));
      navigation.navigate('Home')
    }
  };
  return (
    <View style={styles.body}>
      <View>
        <Image source={img} style={styles.logo} />
      </View>
      <Text style={styles.text}>Redux</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn..."
        onChangeText={value => dispatch(setName(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi"
        onChangeText={value => dispatch(setAge(value))}
      />
      <Button title="Login" color="#ff00ff" onPress={setData} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00ff',
  },
  logo: {
    marginTop: 0,
    width: 450,
    height: 400,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  input: {
    width: 340,
    borderColor: '#555',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 9,
    textAlign: 'center',
    marginBottom: 10,
  },
});
