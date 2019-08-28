import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements'

export interface AppProps {
    navigation: any;
}

export interface AppState {
    email: string;
    senha: string;
}

export default class LoginScreen extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
        this.realizarLogin = this.realizarLogin.bind(this);
    }

    public realizarLogin() {
        if (this.state.email == 'teste@gmail.com' && this.state.senha == '123456')
            this.props.navigation.navigate('principal');
    }

    public render() {
        return (
            <ImageBackground source={require('./../../assets/imgs/background.png')} style={styles.background}>
                <View style={styles.conteudo}>
                    <Text style={styles.nomeApp}>E-commerce</Text>
                    <Input placeholder='Digite seu e-mail'
                        leftIcon={{ name: 'person', color: 'white' }}
                        inputContainerStyle={styles.input}
                        inputStyle={{ color: 'white' }}
                        keyboardType={"email-address"}
                        onChangeText={(email) => this.setState({ email: email })}
                    />
                    <Input placeholder='Digite sua senha'
                        secureTextEntry={true}
                        leftIcon={{ name: 'lock', color: 'white' }}
                        inputContainerStyle={styles.input}
                        inputStyle={{ color: 'white' }}
                        keyboardType={"numeric"}
                        onChangeText={(senha) => this.setState({ senha: senha })}
                    />

                    <Button onPress={this.realizarLogin}
                        title='Entrar'
                        raised={true}
                        titleStyle={{ fontSize: 20 }}
                        buttonStyle={{ borderRadius: 25 }}
                        containerStyle={styles.btnLogin}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    conteudo: {
        flex: 1,
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nomeApp: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        padding: 5,
        marginBottom: 8
    },
    btnLogin: {
        width: '80%',
        marginTop: '10%'
    }
});
