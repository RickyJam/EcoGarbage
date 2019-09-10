import React from 'react'
import {
    View, TextInput, StyleSheet,
    KeyboardAvoidingView, Button, Text,
} from 'react-native'

import Header from "../UseFullComponent/Header";

import SafeAreaView from 'react-native-safe-area-view';
import GlobalStyle from "../StyleSheet/GlobalStyle";
import AsyncStorage from "@react-native-community/async-storage";

export default class FirstLogin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            city: '',
            br:"\n"
        }
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Header login={true} navigation={navigation}/>,
        headerLeft: null
    });

    componentDidMount(): void {
    }

    validateChangeView = () => {
        //TODO controlli sul comune inserito
        global.city = this.state.city
        AsyncStorage.setItem('city',this.state.city)
        this.props.navigation.navigate('HomePage')
    }

    render() {
        const br = "\n"
        return (
            <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
                <KeyboardAvoidingView style={styles.homePageContainer}
                                      behavior="padding">
                    <View style={styles.textInputContainer}>
                        <Text style={styles.presentationText}>
                            Benvenuto nella nostra applicazione!{br}
                            Comunicandoci il vostro comune di residenza,{br}
                            noi potremo fornirle tutte le informazioni{br}
                            riguardanti la raccolta dei rifiuti.

                            {br}{br}{br}
                            Iniziamo:
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(city) => {this.setState({city})}}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            buttonStyle={styles.button}
                            onPress={this.validateChangeView}
                            title="Avanti"
                            accessibilityLabel="Vai Alla HomePage"/>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    homePageContainer:{
        margin: 20,
        justifyContent: 'center',
        flex:1
    },
    textInputContainer:{
        flex: 1,
        alignItems: 'center'
    },
    presentationText:{
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 17,
    },
    textInput: {
        height: 35,
        minWidth: 250,
        maxWidth: 250,
        borderColor: '#299A02',
        borderWidth: 2,
        borderRadius: 3
    },
    button: {
        backgroundColor: '#299A02'
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
})
