import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class SignUpLoginScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '', password: ''
        }
    }

    userLogin  = (email , password)=>{
firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
    return(
        Alert.alert("User Successfully Logged In")
    )
})
.catch(error=>{
    var errorCode = error.code
    var errorMessage = error.message
    Alert.alert(errorMessage)
})
    }

    userSignUp  = (email , password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            return(
                Alert.alert("User Successfully Signed Up")
            )
        })
        .catch(error=>{
            var errorCode = error.code
            var errorMessage = error.message
            Alert.alert(errorMessage)
        })
            }

    render() {
        return (
            <View style = {styles.container}>

                <TextInput placeholder="Email"
                    onChangeText={text => { this.setState({ email: text }) }} 
                    value = {this.state.email}
                    style = {styles.inputBox} />

                <TextInput placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => { this.setState({ password: text }) }} 
                    value = {this.state.password}
                    style = {styles.inputBox} />

<TouchableOpacity 
onPress = {()=>this.userLogin(this.state.email, this.state.password)}
style = {styles.button}>
    <Text>
        LOGIN
    </Text>
</TouchableOpacity>

<TouchableOpacity 
onPress = {()=>this.userSignUp(this.state.email, this.state.password)}
style = {styles.button}>
    <Text>
        SIGN UP
    </Text>
</TouchableOpacity>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputBox: {
  marginTop: 10,
  justifyContent: 'center',
  borderWidth: 1,
  borderRadius: 10,
  width: 200,
  height: 50
    },
    button: {
      justifyContent: 'center',
      borderRadius: 50,
      width: 100,
      height: 40  
    }
})