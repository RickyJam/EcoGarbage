import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';

import GlobalStyle from '../StyleSheet/GlobalStyle'

import {Icon} from 'react-native-elements'


export default class Header extends Component {

    constructor(props){
        super(props)
    }

    state = {
        iconSize: 40
    }


    openModal = () =>{
        this.props.showModal()
    }

    gotToHomePage = () => {
        this.props.navigation.navigate('HomePage')
    }

    render() {

        let menuIcon = null
        if(!this.props.login){
            menuIcon = (
                <Icon style={styles.ButtonMenu} name='menu' type='material' size={this.state.iconSize} onPress={() => this.openModal()}/>
            )
        }

        return (
            <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
                <View style={styles.Header}>
                    <Icon style={styles.Icon} name='menu' size={this.state.iconSize} onPress={this.gotToHomePage}/>
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}> EcoWorld </Text>
                    </View>
                    {menuIcon}
                </View>
                <View style={styles.ViewBorder}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Header : {
        flexDirection : 'row',
        minHeight: 50
    },
    Icon : {
        flex: 2
    },
    Title: {
        flex : 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleText: {
        color: 'green',
        fontSize: 25,
    },
    ButtonMenu: {
        flex : 2
    },
    ViewBorder:{
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
});
