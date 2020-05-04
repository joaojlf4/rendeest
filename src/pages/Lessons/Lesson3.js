import React from 'react';
import { View, Text } from 'react-native';

const Lessons = ({ route }) => {
  return <Text>{route.params.title}</Text>;
}

export default Lessons;