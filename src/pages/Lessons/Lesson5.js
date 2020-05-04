import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

const Lessons = ({ route }) => {
  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity >
      <Text>Limpar async storage</Text>
    </TouchableOpacity>
  </View>);
}

export default Lessons;