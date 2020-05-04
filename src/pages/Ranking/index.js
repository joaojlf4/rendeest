import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StatusBar } from 'react-native';
import styles from './styles';
import api from '../../services/fakeRankApi';

const Ranking = () => {
  return (
    <>
    <StatusBar backgroundColor="#1fdc8b"/>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.rankTitle}>Ranking da Semana</Text>
        <Text style={styles.rankDescription}>
          Conclua lições ou contribua com a comunidade para subir sua posição!
        </Text>
        <View style={styles.ranking}>
          {api.reverse().map((item, index) => {
            
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isThird = index === 2;

            return (
              <View key={item.id} style={styles.userCard}>
                <View style={styles.pictureAndName}>
                  <Image 
                    style={styles.userAvatar}
                    source={{ uri: item.uri }}/>
                  <Text style={{...styles.username, ...{ 
                    color:  isFirst ? "#EED722" : 
                            isSecond ? "#A3A3A3" : 
                            isThird ? "#C07A34" : 
                            item.name === 'Você' ? "#00D46A" : 
                            "#333"}}}>{item.name}</Text>
                </View>
                <Text style={styles.userXp}>{item.xp} XP</Text>
              </View>
          )})}
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

export default Ranking;