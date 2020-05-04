import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');

  async function handleSave(){
    const data = JSON.parse(await AsyncStorage.getItem('balance')) || [];

    const date = new Date();

    data.push({
      id: Date.now().toString(2),
      title,
      category,
      date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      cost: Number(cost),
    });

    await AsyncStorage.setItem('balance', JSON.stringify(data))
    
    const balanceValue = Number(await AsyncStorage.getItem('balanceValue'));

    await AsyncStorage.setItem('balanceValue', JSON.stringify(balanceValue + Number(cost)));

    navigation.navigate("Controls");
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título: </Text>
      <TextInput 
        accessibilityLabel="Title" 
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        />

      <Text style={styles.label}>Categoria: </Text>
      <TextInput 
        accessibilityLabel="Category" 
        style={styles.input}
        value={category}
        onChangeText={setCategory}/>

      <Text style={styles.label}>Valor: </Text>
      <TextInput 
        accessibilityLabel="cost" 
        style={styles.input}
        value={cost}
        onChangeText={setCost}
        placeholder="(Números negativos para despesas.)"
        />
     <TouchableOpacity onPress={handleSave}>
       <View style={styles.button}>
          <Text style={{ color: "#f0f0f0", fontWeight: 'bold', fontSize: 16 }}>Save</Text>
       </View>
     </TouchableOpacity>
    </View>
  );
}
