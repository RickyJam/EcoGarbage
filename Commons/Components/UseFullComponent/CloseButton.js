import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from "react-native";

import React from 'react'

export default class CloseButton extends React.Component {

    constructor(props){
        super(props)
    }

    setModalVisible = () => {
        this.props.showModal()
    }

    render() {
        return(
            <View style={styles.buttonViewExit}>
                <TouchableHighlight
                    style={styles.buttonExit}
                    onPress={this.setModalVisible}>
                    <Text style={styles.textOut}>OK</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    buttonViewExit: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignContent: 'flex-end',
    },
    buttonExit: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 15,
        minWidth: 40,
        minHeight: 40,
        maxWidth: 40,
        maxHeight: 40,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 45
    },
    textOut:{
        alignSelf: 'center',
        //fontStyle: 'bold'
    }
})
