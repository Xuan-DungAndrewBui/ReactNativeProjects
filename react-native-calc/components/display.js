import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

const style = StyleSheet.create({
    display: {
        color: 'white',
        fontSize: 70,
        // fontFamily: 'inherit',
        textAlign: 'right',
        paddingTop: 25,
        paddingRight: 16,
        paddingBottom: 20,
        overflow: 'scroll',
      }
    }
);

export default class Display extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={style.display}>0</Text>
            </View>
        )
    }
}

