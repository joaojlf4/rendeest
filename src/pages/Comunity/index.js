import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  StatusBar,
  TouchableOpacity,
  Image, 
  SafeAreaView,
  ScrollView,
  TextInput, 
  Picker} from 'react-native';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { Feather, EvilIcons } from '@expo/vector-icons';

const Comunity = () => {

  const [isVisible, setVisible] = useState(true);
  

  return (
    <>
    <StatusBar backgroundColor="#542BA8"/>
    
    
      <ImageBackground 
        style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}
        source={require('../../../assets/photo-1557682268-e3955ed5d83f.jpg')}>
          
          {/* <Text style={styles.title}>Seja recompensado por ajudar outras pessoas a conquistarem seus objetivos.</Text> */}
          <View style={styles.header}>
            <Feather name="menu" size={40} color="#FFF"/>
            <Text style={{ color: "#fFf", fontWeight: 'bold', fontSize: 20 }}>Comunidade</Text>
            <EvilIcons name="user" size={45} color="#FFF"/>
          </View>

          <View style={styles.write}>
            <Feather 
              name="edit-2" 
              size={25} 
              color="#999" 
              style={{ borderRightWidth: 2, borderColor: "#ccc", paddingRight: 10, alignItems: 'center' }}/>
            <TextInput 
              placeholder="Escreva sua pergunta ou começe um novo assunto."
              caretHidden={true}
              style={{ flex: 1, fontSize: 20, marginLeft: 10 }}/>
          </View>

          <View style={{
            display: isVisible ? 'flex' : 'none',
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingVertical: 8,
            paddingHorizontal: 5,
            borderColor: '#CCC',
            borderWidth: 1,
            marginTop: 10,
            height: 200,
            borderRadius: 14
          }}>
            <View style={{
              width: '50%',
              marginLeft: 8
            }}>
              <Text style={{
                // marginLeft: 180,
                marginTop: 30,
                fontSize: 18,
                color: "#FFF",
                fontWeight: 'bold'
              }}>
                Compartilhe suas experiências e seja recompensado
              </Text>
              <Text style={{
                // marginLeft: 180,
                // marginRight: 10,
                marginTop: 5,
                fontSize: 12,
                color: "#e5e5e5",
                marginBottom: 12
              }}>
                Tire sua dúvida com pessoas que partilham do seu objetivo.
                Você também é recompensado por contribuir com a comunidade.
              </Text>
            </View>
            <View style={{ 
              flex: 1,
              alignItems: "flex-end",
            }}>
              <TouchableOpacity onPress={() => { setVisible(false) }}>
                <Feather name="x"color="#f0f0f0" size={32} style={{  }}/>
              </TouchableOpacity>
              <Image 
                source={require('../../../assets/friends.png')}
                style={{
                  height: '80%',
                  width: '100%',
                }}/>
            </View>
          </View>
          <Picker style={{
            alignSelf: "flex-start",
            width: '90%',
            color: "#FFF",

          }}>
            <Picker.Item label="Filtrar por meta: Casa" value="Semana 1"/>
            <Picker.Item label="Mais relevantes" value="Semana 3"/>
            <Picker.Item label="Tudo" value="Semana 2"/>
          </Picker>
          <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.postCard}>
            <View style={styles.avaliation}>
              <Feather name="chevron-up" size={32} color="#1fdc8b"/>
              <Text>120</Text>
              <Feather name="chevron-down" size={32} color="#1fdc8b"/>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>Como se posicionar financeiramente diante do coronavírus?</Text>
              <Text style={styles.contentBody}>Autor(a): Larissa Machado</Text>
            </View>
          </View>

          <View style={styles.postCard}>
            <View style={styles.avaliation}>
              <Feather name="chevron-up" size={32} color="#1fdc8b"/>
              <Text>100</Text>
              <Feather name="chevron-down" size={32} color="#1fdc8b"/>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>Dicas para começar a investir ainda no Ensino Médio</Text>
              <Text style={styles.contentBody}>Autor(a): Ronaldo Nazário</Text>
            </View>
          </View>

          <View style={styles.postCard}>
            <View style={styles.avaliation}>
              <Feather name="chevron-up" size={32} color="#1fdc8b"/>
              <Text>97</Text>
              <Feather name="chevron-down" size={32} color="#1fdc8b"/>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>Métodos de Administração (finanças pessoais)</Text>
              <Text style={styles.contentBody}>Autor(a): Fausto Silva</Text>
            </View>
          </View>
          
          <View style={styles.postCard}>
            <View style={styles.avaliation}>
              <Feather name="chevron-up" size={32} color="#1fdc8b"/>
              <Text>88</Text>
              <Feather name="chevron-down" size={32} color="#1fdc8b"/>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>Coisas para não fazer ao receber o salário</Text>
              <Text style={styles.contentBody}>Autor(a): Daniel Orivaldo</Text>
            </View>
          </View>

          </ScrollView>
          </SafeAreaView>
      </ImageBackground>
    </>
    );
}

export default Comunity;