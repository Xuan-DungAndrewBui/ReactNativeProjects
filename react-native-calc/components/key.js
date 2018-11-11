import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class Key extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={keyStyle.keyBtn}>
                <Text style={keyStyle.keyText}> {this.props.value}</Text>
            </View>
        )
    }
}

const keyStyle = StyleSheet.create({
    keyBtn: {
        flex: 1,
        backgroundColor: '#6B6B6B',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },

    keyText: {
        color: 'white',
        fontSize: 40,
    },
});