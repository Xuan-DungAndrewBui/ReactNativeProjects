import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class Display extends React.Component {

    constructor(props) {
        super(props);
    }

    fontType(displayType) {
        switch (displayType) {
            case "Display":
                return style.displayText;
            case "Memory":
                return style.memoryText; 
        }
    }

    render() {
        return (
            // <View style={style.display}>
                <Text style={this.fontType(this.props.displayType)}>{this.props.value}</Text>
            // </View>
        )
    }
}

const style = StyleSheet.create({
    display: {
        paddingRight: 16,
      },
      
      displayText: {
        color: 'white',
        fontSize: 45,
        textAlign: 'right',
        textAlignVertical: 'center',
      },
      memoryText: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'right',
        textAlignVertical: 'center',
      },

    }
);