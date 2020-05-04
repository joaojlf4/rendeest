import React from 'react';
import { View, Image, Text } from 'react-native';

const Lessons = () => {
  return( 
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }}>
    <Image 
      source={require('../../../assets/target.png')}
      style={{
        height: 80,
        width: 80
      }}/>
      <Text style={{
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: '80%',
        textAlign: 'center'
      }}>Parabéns! Você está mais próximo do seus objetivos.</Text>
      <Text style={{
        maxWidth: '80%',
        textAlign: 'center'
      }}>5 de 5 acertos </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%',
        alignItems: "center",
        marginTop: 15
      }}>
        <Text style={{
          color: "#DEC85B",
          fontWeight: 'bold',
          fontSize: 16
        }}>50</Text>
        <Image 
          source={require('../../../assets/coin.png')}
          style={{
            height: 26,
            width: 26
          }}/>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16
        }}> / 120 XP</Text>
      </View>
  </View>);
}

export default Lessons;