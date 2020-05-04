import React, { useState } from 'react';
import { 
  AsyncStorage, 
  Text, 
  TouchableOpacity, 
  View, 
  Modal, 
  TextInput,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet
   } from 'react-native';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import api from '../../services/Lessons';

import Lesson1 from '../Lessons/Lesson1';
import Lesson2 from '../Lessons/Lesson2';
import Lesson3 from '../Lessons/Lesson3';
import Lesson4 from '../Lessons/Lesson4';
import Lesson5 from '../Lessons/Lesson5';
import Avaliation from '../Lessons/Avaliation';

import { Feather, EvilIcons } from '@expo/vector-icons';
import { Picker } from 'react-native';

const Stack = createStackNavigator();

export default function Home() {

  return (
      <Stack.Navigator>
        <Stack.Screen name="Classes" component={Classes}
         options={({ route }) => ({
          headerTitle: "Aprender",
          headerTitleContainerStyle: {
            alignItems: 'flex-end',
          },
          headerRight: () => <EvilIcons name="user" size={40} color="#FFF" style={{
            marginRight: 10
          }} onPress={() => { AsyncStorage.clear() }}/>,
          headerLeft: () => <Feather name="menu" size={34} color="#FFF" style={{
            marginLeft: 10
          }}/>,
          headerTitleStyle: {
            color: "#fff"
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#1fdc8b"
          } 
         })}/>
        <Stack.Screen 
          name="Lesson1" 
          component={Lesson1}
          options={({ route }) => ({
            headerTitle: `Lição ${route.params.id}`,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: route.params.primaryColor
            } 
          })} />
          <Stack.Screen 
          name="Lesson2" 
          component={Lesson2}
          options={({ route }) => ({
            headerTitle: `Lição ${route.params.id}`,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: route.params.primaryColor
            } 
          })} />
          <Stack.Screen 
          name="Lesson3" 
          component={Lesson3}
          options={({ route }) => ({
            headerTitle: `Lição ${route.params.id}`,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: route.params.primaryColor
            } 
          })} />
          <Stack.Screen 
          name="Lesson4" 
          component={Lesson4}
          options={({ route }) => ({
            headerTitle: `Lição ${route.params.id}`,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: route.params.primaryColor
            } 
          })} />
          <Stack.Screen 
          name="Lesson5" 
          component={Lesson5}
          options={({ route }) => ({
            headerTitle: `Lição ${route.params.id}`,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: route.params.primaryColor
            } 
          })} />
          <Stack.Screen 
          name="Avaliation" 
          component={Avaliation}
          options={({ route }) => ({
            headerTitle: "Avaliação",
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#8842E8"
            } 
          })} />
      </Stack.Navigator>
  );
}

const Classes = ({ navigation }) => {

const [isModalVisible, setModalVisible] = useState(false);
const [goalName, setGoalName] = useState('');
const [goalValue, setGoalValue] = useState('');
const [firstTime, setFirstTime] = useState(true);

useFocusEffect(() => {
  async function checkFirstVisit() {
    if(!await AsyncStorage.getItem('firstTime')) {
      setModalVisible(true)
      setFirstTime(true)
    }else {
      setModalVisible(false);
    }
  }
  checkFirstVisit();
}, []);

  async function handleGoal() { 
    await AsyncStorage.setItem('firstTime', 'false')
    await AsyncStorage.setItem('goalName', goalName)
    await AsyncStorage.setItem('goalValue', goalValue)
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingHorizontal: 6
    }} >
      <ScrollView showsVerticalScrollIndicator={false}> 
      <Modal 
        style={styles.modalContainer} 
        animationType="fade"
        visible={isModalVisible}
        >
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Primeiros passos</Text>
          <Text style={{...styles.modalTitle, ...{ color: "#333", fontSize: 16, marginTop: -5 }}}>Nomeie suas metas</Text>

          <View style={styles.inputView}>
            <TextInput 
              style={styles.modalInput} 
              placeholder="Nome"
              value={goalName}
              onChangeText={setGoalName}/>
            <TextInput 
              style={{...styles.modalInput, ...{ flex: 0.3, marginLeft: 5, marginRight: 5 }}} 
              placeholder="Valor"
              value={goalValue}
              onChangeText={setGoalValue}/>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={handleGoal}
              >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ir</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.modalP}>Seu desempenho financeiro está totalmente ligado aos seus objetivos, portanto, definir metas é indispensável (Você poderá adicionar/alterar esse valor depois).</Text>
        </View>
      </Modal>
      <View style={{
        display: firstTime ? 'flex' : 'none',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderColor: '#CCC',
        borderWidth: 1,
        marginTop: 10,
        height: '14%',
      }}>
        <View style={{
          width: '50%',
          marginLeft: 8
        }}>
          <Text style={{
            // marginLeft: 180,
            marginTop: 30,
            fontSize: 26,
            color: "#333",
            fontWeight: 'bold'
          }}>
            Estude seu dinheiro.
          </Text>
          <Text style={{
            // marginLeft: 180,
            // marginRight: 10,
            fontSize: 14,
            color: "#666",
            marginBottom: 15
          }}>
            Aumente seu conhecimento sobre finanças e ganhe bits completando lições.
          </Text>
        </View>
        <View style={{ 
          flex: 1,
          alignItems: "flex-end",
         }}>
           <TouchableOpacity onPress={() => { setFirstTime(false) }}>
            <Feather name="x"color="#666" size={32} style={{  }}/>
           </TouchableOpacity>
          <Image 
            source={require('../../../assets/undraw_studying_s3l7.png')}
            style={{
              height: '80%',
              width: '100%',
            }}/>
        </View>
      </View>
      <Picker style={{
        alignSelf: "flex-start",
        width: '50%',
      }}>
        <Picker.Item label="Semana 1" value="Semana 1"/>
        <Picker.Item label="Semana 2" value="Semana 2"/>
        <Picker.Item label="Semana 3" value="Semana 3"/>
      </Picker>
      {api.map(item => (
        <TouchableOpacity 
          disabled={item.disable}
          key={item.id.toString()} 
          style={styles.subjectContainer}
          onPress={() => { navigation.navigate("Lesson" + item.id, item) }}>
          
          <View style={styles.subjectContainer}>
            <Text style={{...styles.subjectDescription, ...{ color: item.disable ? "#ccc" : "#666" }}}>{item.description}</Text>
          </View>
          <View style={{...styles.subject, ...{ backgroundColor: item.disable ? '#d4d4d4' : item.primaryColor }}}>
            <Text style={styles.subjectTitle}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', display: item.disable ? 'none' : 'flex' }}>
              <Text style={{
                marginRight: 8,
                color: "#DEC85B",
                fontWeight: 'bold',
                fontSize: 16
              }}>{item.coins}</Text>
              <Image source={require('../../../assets/coin.png')} 
              style={{
                height: 20,
                width: 20,
              }}/>
              <Text style={{
                marginLeft: 4,
                fontWeight: 'bold',
                color: "#FFF",
                fontSize: 16
              }}> / {item.xp} XP</Text>
            </View>
          </View>
          
        </TouchableOpacity>
      ))}
        
      </ScrollView>
      <StatusBar backgroundColor="#1fdc8b"/>

    </SafeAreaView>
  ) 
};
