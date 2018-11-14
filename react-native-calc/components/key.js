import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class Key extends React.Component {

    constructor(props) {
        super(props);
    }

    //Method to determine what colour the key should be
    buttonColour() {
        switch (this.props.btnType) { 
            case ('keyBtnFunc'):
                return keyStyle.keyBtnFunc;
            case ('equals'):
                return keyStyle.keyBtnEq;
            default: 
                return keyStyle.keyBtnNum;
        }
    }

    textColour() {
        switch (this.props.textType) {
            case ('funcOp'):
                return keyStyle.keyTextFuncOp;
            case ('equals'):
                return keyStyle.keyTextEq;
            default:
                return keyStyle.keyTextNum;
        }
    }

    render() {
        return (
            <TouchableOpacity style={[keyStyle.keyBtn, this.buttonColour()]} onPress={this.props.onPress} activeOpacity={0.7} >
                <View>
                    <Text style={[keyStyle.keyTextSize, this.textColour()]}>{this.props.value}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const keyStyle = StyleSheet.create({
    keyBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.7,
        borderColor: '#1C1C1C',
        backgroundColor: '#6B6B6B',
    },
    keyBtnNum: {
        backgroundColor: 'transparent',
    },
    keyBtnEq: {
        backgroundColor: '#0BB5FF',
    },
    keyBtnFunc: {
        backgroundColor: '#1C1C1C',
    },
    keyTextSize: {
        fontSize: 40,
        fontFamily: 'sans-serif'
    },
    keyTextNum: {
        color: 'white',
    },
    keyTextFuncOp: {
        color: '#0BB5FF',
    },
    keyTextEq: {
        color: 'black',
    }
});