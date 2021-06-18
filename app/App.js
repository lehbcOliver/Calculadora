import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text, TextInput, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Display from './src/components/Display';
import Btn from './src/components/Buttons';
import styles from './style';


let state = {
  value: '',
  result: 0,
  calc: false,
  ponto: false, 
 
}

const App = () => {

  const [display, setDisplay] = useState(state.value);
  const [resultado, setResultado] = useState(state.result);

  const store = (chave, valor) =>{
    AsyncStorage.setItem(chave, valor);
  }
  

  const addNumber = (digito) => {
    
    if(digito == '+' || digito == '-' || digito == '*' || digito == '/'){
      state.ponto = false;  
    }
    
    
    if(digito == '.' && !state.ponto){
      state.ponto = true;
      state.calc = false;
    }
    else if(digito == '.' && state.ponto){
      return;
    }
    if((digito == '+' || digito == '-' || digito == '*' || digito == '/')&& state.calc){
      state.value = state.result
      state.result = 0
    }
    
    
    state.value = state.value + digito;
    setDisplay(state.value);
    setResultado(state.result);
    state.calc = false;
  }
  const clear = () =>{
    state ={
      value: '',
      result: 0,
      calc: false,
      ponto: false,
     
    }
    setDisplay(state.value);
    setResultado(state.result);
  }

  const porcento =  (digito) => {
    const op = state.value.split('', (state.value.length));
    
    op.map(item=> {
      if(item == '+'){
        const number = state.value.split('+');
        const resultado = ((number[0] * number[1])/100).toFixed(2);
        state.value = (number[0] + '+' + resultado);
        setDisplay(state.value);
        setResultado(resultado);
      }
      if(item == '-'){
        const number = state.value.split('-');
        const resultado =  ((number[0] * number[1])/100);
        state.value = (number[0] + '-' + resultado);
        setDisplay(state.value);
        setResultado(resultado);
      }
      if(item == '*'){
        const number = state.value.split('*');
        const resultado =  ((number[0] * number[1])/100);
        state.value = (number[0] + '*' + resultado);
        setDisplay(state.value);
        setResultado(resultado);
      }
      if(item == '/'){
        const number = state.value.split('/');
        const resultado =  ((number[0] * number[1])/100);
        state.value = (number[0] + '/' + resultado);
        setDisplay(state.value);
        setResultado(resultado);
      }
    })
  }

  const op =  (digito) => {
    if(digito =='AC'){
      clear();
      AsyncStorage.clear();
      return;
    }
    if(digito == 'back'){
      const vt =  display.substr(0, (display.length -1));
      state.value = vt;
      setDisplay(state.value);
      return;
    }
    try {
      state.result = eval(display);
      state.calc = true;
      store('calc', display);
      setResultado(state.result);
    } catch (error) {
      state.result = 'ERROR';
      state.calc = true;
      setResultado(state.result);
    }
  }
  

  useEffect(async()=> {
    const lastCalc = await AsyncStorage.getItem('calc');
    setDisplay(lastCalc);
  },[]);

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Display value={display} results={resultado}/>
      <View style={styles.buttons}>
          <Btn label='AC' ac click={()=>{op('AC')}}></Btn>
          <Btn label='(' click={()=>{addNumber('(')}}></Btn>
          <Btn label=')' click={()=>{addNumber(')')}}></Btn>
          <Btn label='%' Operacao click={()=>{porcento('%')}}></Btn>
          <Btn label='7' click={()=>{addNumber('7')}}></Btn>
          <Btn label='8' click={()=>{addNumber('8')}}></Btn>
          <Btn label='9' click={()=>{addNumber('9')}}></Btn>
          <Btn label='*' Operacao click={()=>{addNumber('*')}}></Btn>
          <Btn label='4' click={()=>{addNumber('4')}}></Btn>
          <Btn label='5' click={()=>{addNumber('5')}}></Btn>
          <Btn label='6' click={()=>{addNumber('6')}}></Btn>
          <Btn label='/' Operacao click={()=>{addNumber('/')}}></Btn>
          <Btn label='1' click={()=>{addNumber('1')}}></Btn>
          <Btn label='2' click={()=>{addNumber('2')}}></Btn>
          <Btn label='3' click={()=>{addNumber('3')}}></Btn>
          <Btn label='+' Operacao click={()=>{addNumber('+')}}></Btn>
          <Btn label='0' click={()=>{addNumber('0')}}></Btn>
          <Btn label='.' click={()=>{addNumber('.')}}></Btn>
          <Btn label='<-' click={()=>{op('back')}}></Btn>
          <Btn label='-' Operacao click={()=>{addNumber('-')}}></Btn>
          <Btn label='=' dual Igual click={()=>{op('=')}}></Btn>
          
      </View>
    </SafeAreaView>
  );
}

export default App;