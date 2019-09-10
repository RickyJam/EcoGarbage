import React from 'react'
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Header from "../UseFullComponent/Header";

export default class StartUpPage extends React.Component {
    constructor(props){
        super(props)
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                1000
            )
        )
    }

    async componentDidMount(): void {
        let data = await this.performTimeConsumingTask()

        if (data !== null)
            this.isFirstLog()
    }

    isFirstLog = async () => {
        try {
            await AsyncStorage.getItem("city").then((city) => {
                if (city !== undefined && city !== null && city !== '') {
                    global.city = city
                    this.props.navigation.navigate('HomePage')
                } else {
                    this.props.navigation.navigate('FirstLogin')
                }
            }).done();
        } catch (e) {
            console.log('error logged in isAlreadyJoined()')
        }
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Header login={false} navigation={navigation}/>,
        headerLeft: null
    });

    render() {
        return(
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#00ff00"/>
                <Text>Loading Content</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})
