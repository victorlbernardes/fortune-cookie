import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';

class Botao extends Component {
  
  constructor(props){
    super(props);
    this.setState = {};
    this.styles = StyleSheet.create({
      button: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor:props.color,
        backgroundColor: 'transparent',
        borderRadius: 25,
      },

      areaButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }, 

      buttonText: {
        color: props.color,
        fontSize: 14,
        fontWeight: 'bold',
      }
    });
  }

render(){

  return (
    <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}> 
      <View style={this.styles.areaButton}>   
        <Text style={this.styles.buttonText} >{this.props.text}</Text>
      </View>
    </TouchableOpacity>

  );
}

}

export default class FortuneCookie extends Component {

  constructor(props){
    super(props);
    this.state = {sentece: 'A culpa é sua e você coloca em quem quiser'};
    this.brokeCookie = this.brokeCookie.bind(this);
    this.sentences = ['A vida trará coisas boas se tiveres paciência.', 
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 
    'Não compense na ira o que lhe falta na razão.', 
    'Defeitos e virtudes são apenas dois lados da mesma moeda.', 
    'A maior de todas as torres começa no solo.', 
    'Não há que ser forte. Há que ser flexível.', 
    'Gente todo dia arruma os cabelos, por que não o coração?'];

  }

  brokeCookie(){
    let state = this.state;

    let randomSentence = Math.floor(Math.random() * this.sentences.length);

    state.sentece = this.sentences[randomSentence];

    this.setState(state);
  }

   render(){
    
    return (
      <View style={styles.body}>   
        <Image source={require('./images/cookie.png')} />
        <Text style={styles.text} >"{this.state.sentece}"</Text>
        <Botao color="#B59619" text="Quebrar Biscoito" onPress={this.brokeCookie}/>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize:17,
    color:'#B59619',
    margin: 30,
    fontStyle: 'italic',
    textAlign:'center'
  }
});