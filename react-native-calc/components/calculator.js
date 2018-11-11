import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Display from './display';
import Key from './key';

export default class Calculator extends React.Component {
    render() {
        return(
            <View style={{flex: 1,  flexDirection: 'column',  justifyContent: 'flex-start'}}>
                <View style={{flex: 2, backgroundColor: '#303030'}}>
                    <Display />
                </View>
                <View style={{flex: 7}}>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='C' /></View>
                        <View style={{flex:1}} ><Key value='+/-' /></View>
                        <View style={{flex:1}} ><Key value='%' /></View>
                        <View style={{flex:1}} ><Key value='÷' /></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='7' /></View>
                        <View style={{flex:1}} ><Key value='8' /></View>
                        <View style={{flex:1}} ><Key value='9' /></View>
                        <View style={{flex:1}} ><Key value='x' /></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='4' /></View>
                        <View style={{flex:1}} ><Key value='5' /></View>
                        <View style={{flex:1}} ><Key value='6' /></View>
                        <View style={{flex:1}} ><Key value='-' /></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='1' /></View>
                        <View style={{flex:1}} ><Key value='2' /></View>
                        <View style={{flex:1}} ><Key value='3' /></View>
                        <View style={{flex:1}} ><Key value='+' /></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:2}} ><Key value='0' /></View>
                        <View style={{flex:1}} ><Key value='.' /></View>
                        <View style={{flex:1}} ><Key value='=' /></View>
                    </View>
                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({
    rowStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    operator: {
        backgroundColor: 'orange',
    }
})


