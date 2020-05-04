import React, { useState } from 'react';
import {
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Modal,
  TextInput,
  StatusBar
   } from 'react-native';
import styles from './styles';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { useFocusEffect } from '@react-navigation/native';

export default function Controls({ route, navigation }) {

  const [balanceString, setBalanceString] = useState('');
  const [balance, setBalance] = useState(0);
  const [score, setScore] = useState(0);
  const [goal, setGoal] = useState(0);
  const [goalName, setGoalName] = useState(0);
  

  async function handleBalance(){
    await AsyncStorage.setItem('balanceValue', balanceString)
    await AsyncStorage.setItem('balanceConfirmed', JSON.stringify(true))
    setModalVisible(false)
    setBalance(Number(balanceString));
  }

  function handleDelete(e){
    Alert.alert(
      "Excluir", 
      "Tem certeza que deseja excluir?",
      [
        {
          text: "Excluir",
          onPress: async () => {
            const saldo = Number(await AsyncStorage.getItem('balanceValue'));
            const data = JSON.parse(await AsyncStorage.getItem('balance'));
            await AsyncStorage.setItem('balanceValue', String(saldo - e.cost))
            data.splice(data.indexOf(e) - 1, 1);
            await AsyncStorage.setItem('balance', JSON.stringify(data))
            setApi(data)
          }
        }
      ], {
        cancelable: true
      });
  }

  const [api, setApi] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useFocusEffect(() => {
    async function getData(){
      const json = await AsyncStorage.getItem('balance');

      const data = JSON.parse(json);

      if(!data || data === []) return setApi([]);

      setApi(data.reverse());
      setBalance(Number(await AsyncStorage.getItem('balanceValue')))

    }
    async function checkBalance() {
      if(!JSON.parse(await AsyncStorage.getItem('balanceConfirmed'))){
        setModalVisible(true);
      }else {
        setGoal(Number(await AsyncStorage.getItem('goalValue')) || 0)
        setGoalName(await AsyncStorage.getItem('goalName'));
        setModalVisible(false)
        getData();
      }
    }
    checkBalance()
  }, []);

  function handleAdd() {
    navigation.navigate("CreateExpense");
  }

  return (
    <>
    <StatusBar backgroundColor={balance > 0 ? '#1fdc8b' : '#e05'} />
      {isModalVisible ? <View style={{
          height: '100%',
          width: '100%',
          position: "absolute",
          backgroundColor: "#000",
          opacity: 0.6,
          zIndex: 98,
        }}></View> : false}
      <View style={styles.container}>
        
        <Modal 
          style={styles.modalContainer} 
          animationType="fade"
          visible={isModalVisible}
          >
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Esse é um espaço reservado ao seu sonho.</Text>

            <View style={styles.inputView}>
              <TextInput 
                style={styles.modalInput} 
                placeholder="(Apenas números)"
                value={balanceString}
                onChangeText={setBalanceString}/>
              <TouchableOpacity onPress={handleBalance} style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Ir</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalP}>
              Aqui você poderá gerenciar o quanto aplicará para sua meta predefinida. Para isso, informe o valor inicial que deseja aplicar (pode ficar tranquilo, fica só entre a gente).</Text>
          </View>
        </Modal>
        {/* <ImageBackground  
          style={styles.imageBackground}
          source={require('../../../assets/background.png')}> */}
          <View style={{...styles.overview, ...{ backgroundColor: balance > 500 ? '#1fdc8b' : '#e05' }}}>

            <TouchableOpacity 
              style={styles.plusButton}
              onPress={handleAdd}>
              <Image 
                source={require('../../../assets/plus.png')}
                style={styles.plusImage}/>
            </TouchableOpacity>
            
            <Text style={styles.quantity}>{String(Intl.NumberFormat('pt-BR', { 
                      style: 'currency',
                      currency: 'BRL',}).format(balance))}</Text>          
            <Text style={{...styles.position, color: '#FFF'}}>{
              balance > goal ?
              `Parabéns! Você alcançou seu objetivo: ${goalName}` :
              `Restante para ${goalName}: ${String(Intl.NumberFormat('pt-BR', { 
                style: 'currency',
                currency: 'BRL',}).format(goal - balance))}`
            }</Text>
          </View>
          <View style={styles.expenses}>
            <FlatList 
              showsVerticalScrollIndicator={true}
              data={api}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.expense}  onPress={() => {handleDelete(item)}}>
                  {/* <Text>{item.categorie}</Text> */}
                  <View style={{ flexDirection: 'row' }}>
                    {/* <View style={{
                        backgroundColor: "#e05",
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                      
                    </View> */}
                    <View style={styles.priceAndTitle}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                      }}>
                        <Text style={{
                          fontSize: 14,
                          color: '#333'
                        }}>{item.title}</Text>
                        <Text style={{ color: "#bbb", marginBottom: -2 }}> </Text>
                      </View>
                      <Text style={{
                        color: '#999'
                      }}>{item.date} • {item.category}</Text>
                    </View>
                  </View>
                  <Text style={{...styles.date, color: 
                                  item.cost > 0 ? '#48DB46' : '#e05055'}}>{String(Intl.NumberFormat('pt-BR', { 
                      style: 'currency',
                      currency: 'BRL',}).format(item.cost))}</Text>
                </TouchableOpacity>
              )}/>
          </View>
        {/* </ImageBackground> */}
      </View>
    </>
  );
}
