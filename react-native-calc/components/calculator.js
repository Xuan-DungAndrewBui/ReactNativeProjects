import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import Display from './display';
import Key from './key';

// calculate expression based on the operator that is provided
const calcExpression = {
    '+': function(firstValue, secondValue ) { return firstValue+secondValue },
    '-': function(firstValue, secondValue ) { return firstValue-secondValue },
    '*': function(firstValue, secondValue ) { return firstValue*secondValue },
    "/": function(firstValue, secondValue ) { return firstValue/secondValue },
    "=": function(firstValue, secondValue ) { return secondValue}
};

const operators = '+-/*=';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            operator: '',
            expression: [], 
            inMemory: '',
            displayValue: '0',
            firstValue: null,
            needOperator: true,
        }
    }

    //Basic functionality of inputting a number into the display
    addInput(number) {
        // const needOperator = this.state.needOperator;
        const expression = this.state.expression;
        //Determine if number input is for a new number or to write on an existing number
        // if (needOperator) {
        //     this.setState({
        //         displayValue: String(number),
        //         needOperator: false,
        //         expression: expression.concat(number)
        //     });
        // } else {
        const combine = String(expression.join("")) + String(number) 
        const inMemory = String(eval(combine))
        // const inMemory = eval(String(expression.join("")));


        this.setState({
            inMemory: inMemory,
            displayValue: combine,
            expression: expression.concat(number),
        });
        // }           
    }

    //Calculate expression when clicking equals 
    setEquals() {
        //Grab variables needed to make calculation
        // const operator = this.state.operator;
        // const firstValue = this.state.firstValue;
        // const value = parseFloat(this.state.displayValue);

        const expression = this.state.expression.join("");
        //go to key of operator and use 
        const result = eval(String(expression));

        //Update calculator display
        this.setState({
            // firstValue: result,
            displayValue: String(result),
            inMemory: '',
            needOperator: true,
            expression: []
        });
    }

    //Set the current operator that is being used
    setOperation(operator) {

        const expression = this.state.expression;

 
        if (operator === '=') {
            const result = eval(String(expression.join("")));
            this.setState({
                displayValue: result,
                expression: [],
                inMemory: '',
            });
        } else if (operators.indexOf(expression[expression.length - 1]) > -1) {
            expression[expression.length - 1] = operator;
                this.setState({
                    expression: expression,
                    displayValue: expression
                });
        } else {
            this.setState({
                inMemory: '',
                expression: expression.concat(operator),
                displayValue: expression.concat(operator),
            })
        }

        this.setState({
            needOperator: true,
        });
    } 

    //Clearing the calculator to initial state
    clearAll() {
        this.setState({
            displayValue: '0',
            firstValue: null,
            needOperator: true,
            expression: [],
            inMemory: ''
        })
    }

    //Toggle between positive and negative
    changeSign() {
        this.setState({
            displayValue: this.state.displayValue * -1
        })
    }

    //Divide the current display by 100
    setPercent() {
        const value = parseFloat(this.state.displayValue);
        const percentValue = value/100;
        this.setState({
            displayValue: percentValue.toString(),
        })
    }

    //Add decimal point to the current value
    decimalInput() {
        const displayValue = this.state.displayValue;
        
        if (displayValue.indexOf('.') > -1) {
            return null;
        } else {
            this.setState({
                displayValue: displayValue + '.',
            })
        }
    }

    render() {
        const displayValue = this.state.displayValue;
        const inMemory = this.state.inMemory;

        return(
            <View style={{flex: 1,  flexDirection: 'column',  justifyContent: 'flex-start',  backgroundColor: 'black'}}>
                <ScrollView style={{flex: 1, paddingRight: 16}}>
                    <Display value={displayValue} displayType="Display"/>
                </ScrollView>
                <View style={{flex: 0.5, paddingTop: 25, paddingRight: 16 }}>
                    <Display value={inMemory} displayType="Memory"/>
                </View>
                <View style={{flex: 4}}>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='C' onPress={() => this.clearAll()} btnType='keyBtnFunc' textType='funcOp'/></View>
                        {/* <View style={{flex:1}} ><Key value='+/-' onPress={() => this.changeSign()} btnType='keyBtnFunc' textType='funcOp'/></View> */}
                        {/* <View style={{flex:1}} ><Key value='%' onPress={() => this.setPercent()} btnType='keyBtnFunc' textType='funcOp'/></View> */}
                        <View style={{flex:1}} ><Key value='÷' onPress={() => this.setOperation('/')} btnType='keyBtnFunc' textType='funcOp'/></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='7' onPress={() => this.addInput(7)}/></View>
                        <View style={{flex:1}} ><Key value='8' onPress={() => this.addInput(8)}/></View>
                        <View style={{flex:1}} ><Key value='9' onPress={() => this.addInput(9)}/></View>
                        <View style={{flex:1}} ><Key value='x' onPress={() => this.setOperation('*')} btnType='keyBtnFunc' textType='funcOp'/></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='4' onPress={() => this.addInput(4)}/></View>
                        <View style={{flex:1}} ><Key value='5' onPress={() => this.addInput(5)}/></View>
                        <View style={{flex:1}} ><Key value='6' onPress={() => this.addInput(6)}/></View>
                        <View style={{flex:1}} ><Key value='-' onPress={() => this.setOperation('-')} btnType='keyBtnFunc' textType='funcOp'/></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:1}} ><Key value='1' onPress={() => this.addInput(1)}/></View>
                        <View style={{flex:1}} ><Key value='2' onPress={() => this.addInput(2)}/></View>
                        <View style={{flex:1}} ><Key value='3' onPress={() => this.addInput(3)}/></View>
                        <View style={{flex:1}} ><Key value='+' onPress={() => this.setOperation('+')} btnType='keyBtnFunc' textType='funcOp'/></View>
                    </View>
                    <View style={style.rowStyle}>
                        <View style={{flex:2}} ><Key value='0' onPress={() => this.addInput(0)}/></View>
                        {/* <View style={{flex:1}} ><Key value='.' onPress={() => this.decimalInput()} /></View> */}
                        <View style={{flex:1}} ><Key value='=' onPress={() => this.setOperation('=')} btnType='equals' textType='equals'/></View>
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
})


