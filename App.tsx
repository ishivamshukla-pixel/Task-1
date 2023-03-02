import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FormData } from './FormData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    dob: '',
    country: '',
    phone: '',
  });

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleButtonPress = () => {
    const { name, email, dob, country, phone } = formData;
    const message = `Name: ${name}\nEmail: ${email}\nDOB: ${dob}\nCountry: ${country}\nPhone: ${phone}`;
    Alert.alert(message);
    console.log(message);
    
  };

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.profile}>

        <Image style={styles.logo} source={require('./src/Assets/account.png')} />

      </TouchableOpacity>


      <View style={styles.mainContainer}>

        <View style={styles.form}>
          <View >
            <TouchableOpacity style={styles.profileData}>
              <View >
                <Text style={{ fontSize: 18, color: 'red', fontWeight: '800' }}>Samuel_ceaser</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ fontWeight: '800', color: 'black', top: 150 }}>PERSONAL INFORMATION</Text>

            <TextInput style={styles.input} placeholder='Name' value={formData.name} onChangeText={(text) => handleInputChange('name', text)} />


            <TextInput style={styles.input} placeholder='Email Address' value={formData.email} onChangeText={(text) => handleInputChange('email', text)} />

            <TextInput
              style={styles.input}
              placeholder='DOB'
              value={formData.dob}
              onChangeText={(text) => handleInputChange('dob', text)}
            />


            <TextInput style={styles.input} placeholder='Country' value={formData.country} onChangeText={(text) => handleInputChange('country', text)} />


            <TextInput style={styles.input} placeholder='Phone Number' value={formData.phone} onChangeText={(text) => handleInputChange('phone', text)} />



            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <View>
                <Text style={{ color: 'white', fontWeight: '800', fontSize: 20 }}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  profile: {
    backgroundColor: 'red',
    height: '16%',
    width: '30%',
    justifyContent: 'center',
    zIndex: 1,
    elevation: 1,
    top: 20,
    borderRadius: 60,
    position: 'absolute'
  },

  mainContainer: {
    backgroundColor: '#ebecf0',
    width: '90%',
    height: '76%',
    borderRadius: 10,



  },
  form: {
    padding: 16,
  },

  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    padding: 4,
    marginBottom: 2,
    backgroundColor: 'white',
    margin: 4,
    top: 200,
    shadowColor: 'black',
    shadowRadius: 2

  },
  profileData: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,

  },
  button: {
    backgroundColor: 'red',
    top: 250,
    width: '100%',
    height: '15%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
