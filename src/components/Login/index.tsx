import React, {useState} from 'react';

import {
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  Button,
} from 'react-native';

import styles from './style';
const Login: React.FC = () => {
  const dimensions = Dimensions.get('window');
  const [values, setValues] = useState<{email: string; password: string}>({
    email: '',
    password: '',
  });
  console.log(values);
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../../images/background-logo.png')}
        style={{
          ...styles.background,
          width: dimensions.width,
          height: dimensions.height,
        }}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
        <TextInput
          keyboardType="email-address"
          onChangeText={e => {
            setValues(s => ({...s, email: e}));
          }}
          placeholder="Email"
          value={values.email}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          onChangeText={e => {
            setValues(s => ({...s, password: e}));
          }}
          placeholder="Password"
          value={values.password}
          style={styles.input}
        />
        <Button title="Entrar" color="#C94848" />
        <Button title="Continuar com o Facebook" />
        <Button title="Registrar" color="#F11" />
      </ImageBackground>
    </View>
  );
};

export default Login;
