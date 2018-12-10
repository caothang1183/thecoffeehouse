import React from 'react';
import { StyleSheet, View, Image, Button, ImageBackground, TextInput, Text, Linking } from 'react-native';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');
export default class AccountComponent extends React.Component {
    loginAccount = () => {

    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/background_blur.jpg')} style={styles.backgroundImage}>
                <View style={styles.logoArea}>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                </View>
                <View style={styles.inputArea}>
                    <TextInput style={styles.inputAccount} placeholder="Username, Phone number or E-mail" placeholderTextColor="rgb(255,255,255)" />
                    <TextInput style={styles.inputAccount} secureTextEntry={true} placeholder="Password" placeholderTextColor="rgb(255,255,255)" />
                    <Text style={{ marginTop: 10, color: 'rgb(0,0,0)', textDecorationLine: 'underline', }} onPress={() => Linking.openURL('https://google.com')}>Forget your password?</Text>
                </View>
                <View style={styles.buttonArea}>
                    <View style={styles.btnLogin}>
                        <Button title="Login" color="orange" onPress={() => this.loginAccount()} containerStyle={{ marginTop: 20 }} />
                    </View>
                    <View style={styles.btnRegister}>
                        <Button title="Register" color="#ccc"
                            onPress={() => { this.props.navigation.navigate('Register') }}
                            containerStyle={{ marginTop: 20 }}
                        />
                    </View>
                </View>
                <View style={styles.socialArea}>
                    <View style={styles.social}>
                        <Image style={styles.socialLogo} source={require('../../assets/images/social/zalo.png')} />
                    </View>
                    <View style={styles.social}>
                        <Image style={styles.socialLogo} source={require('../../assets/images/social/facebook.png')} />
                    </View>
                    <View style={styles.logo} style={styles.social}>
                        <Image style={styles.socialLogo} source={require('../../assets/images/social/google.png')} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoArea: {
        height: 130,
        width: 130,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 100,
        padding: 10
    },
    logo: {
        height: 100,
        width: 100,
        marginLeft: 20,
    },
    inputArea: {
        height: 150,
        width: width,
        alignItems: 'center',
    },
    inputAccount: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        marginTop: 25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: width * 0.7,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    buttonArea: {
        height: 100,
        width: width,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLogin: {
        marginTop: 10,
        width: width * 0.7,
    },
    btnRegister: {
        marginTop: 5,
        width: width * 0.7,
    },
    socialArea: {
        marginTop: 20,
        flexDirection: 'row',
        height: 50,
        width: width,
        justifyContent: 'center'
    },
    social: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,

    },
    socialLogo: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1
    }
});
