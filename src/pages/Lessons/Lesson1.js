import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

import LessonsApi from '../../services/Lessons';

import { Feather } from '@expo/vector-icons';

const Lessons = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{route.params.title}</Text>
        <Text style={styles.paragraph}>A resposta resumida para quem quer saber o que é educação financeira é: 
          <Text style={styles.bold}>é a arte de dominar o dinheiro</Text>, tornando-se mais consciente de cada ação em relação a ele.
        </Text>
        <Image
          style={styles.image} 
          source={require('../../../assets/giphy.gif')}/>
        <Text style={styles.subtitle}>Ok, mas que dinheiro?</Text>
        <Text style={styles.paragraph}>
        
          Para que você tenha recursos e realize seus sonhos é importante desenvolver seu próprio 
          <Text style={styles.bold}> planejamento financeiro. </Text> 
          O planejamento financeiro consiste em uma projeção de receitas e despesas para determinado período, análise do cenário projetado e determinação de metas com base nestas informações.
          Assim, a primeira vantagem que ele proporciona para o empreendedor é a clareza em relação a todas as movimentações financeiras, tanto receitas quanto despesas, que a empresa pretende ter em determinado período. 
        </Text>

        <Image
          style={styles.image}
          source={require('../../../assets/bob.gif')} />

        <Text style={styles.subtitle}>
          Reserva de Emergência, porque nunca se sabe
        </Text>
        <Text style={styles.paragraph}>Sabe aquele dinheiro guardado que pode salvar as contas no final do mês depois de um aperto? 
          Pois é, este valor é o que se conhece como reserva de emergência ou reserva financeira. É um valor importante que se guarda para momentos de eventuais necessidades e imprevistos que possam acontecer.
        </Text>
        <Image 
          style={styles.image}
          source={require('../../../assets/giphy.webp')}/>
        <Text style={styles.paragraph}>
          Como criar uma reserva de emergência?
        </Text>
        <Text style={styles.paragraph}>
          Para poder servir ao propósito de ser uma garantia, você deve analisar bastante o seu planejamento, de qualquer maneira você pode pedir ajuda na nossa comunidade :)
        </Text>
        <Text style={styles.subtitle}>
          PMS (calma que não tem nada a ver com a polícia)
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Patrimônio Mínimo de sobrevivência </Text>
          é aquele que você precisa para  reorganizar sua vida em caso de desemprego, doença ou plano frustrado em sua atividade profissional ou de negócios. Deve ser uma reserva que tenha liquidez (ex: poupança). A recomendação é que seja de 6 vezes o seu consumo mensal.
        </Text>
        <Text style={styles.subtitle}>
          Aprenda a poupar dinheiro, esquece o plano da tim
        </Text>
        <Text style={styles.paragraph}>
        Um dos segredos da mente de uma pessoa que alcançou o sucesso financeiro é que ela aprendeu a poupar.
        Além de não comprar o que não precisa, ela incorpora o hábito de sempre poupar um pouco do que ganha para fazer bons investimentos.
        Começe poupando <Text style={styles.bold}>10%</Text> da sua renda, você também pode investir mas isso é assunto pra outra lição.
        </Text>
        <Image
          style={styles.image}
          source={require('../../../assets/200.gif')} />
        <Text style={styles.subtitle}>
          Ativos vs Passivos
        </Text>
        <Text style={styles.paragraph}>
          Termos bastante conhecidos quando se fala de dinheiro, mas você sabe a diferença?
        </Text>
        <Text style={styles.paragraph}>
        Os ativos são os bens, como o dinheiro em caixa, móveis e imóveis, maquinários, estoque de mercadorias, e os direitos. Ou seja, as dívidas a receber, ambos que a empresa possui e que podem ser convertidos em meios monetários.
        Os passivos são as obrigações, isto é, as despesas feitas pela empresa que se constituem por contas a pagar, para fornecedores ou ao governo, por exemplo.
        </Text>
        <Text style={styles.paragraph}>Por exemplo, por mais cruel que seja essa ideia para a maioria das pessoas, a casa própria é um passivo, e se considerada como “principal investimento” todos os recursos “investidos” nela, irão tirar a capacidade de investir em ativos que realmente possam proporcionar renda, e colaborar para o enriquecimento financeiro.</Text>
        <Text style={styles.paragraph}>Um carro pode ser um ativo, ou um passivo.</Text>
        <Image
          style={styles.image} 
          source={require('../../../assets/uber.gif')}/>
          <View style={styles.questionsContainer}>
        {
          LessonsApi[0].questions.map(item => {
            return (
              <View key={item.enum} style={styles.questionContainer}>
                <Text style={styles.questionEnum}>{item.enum}</Text>
                <View>
                  {item.alternatives.map((alternative, index )=> (
                    <TouchableOpacity 
                      key={alternative}
                      style={{
                        ...styles.alternativeContainer,
                        ...{ backgroundColor: "#1fdc8b" }}}>
                      <Text style={styles.alternativeText}>{alternative}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )
          })
        }
        <TouchableOpacity 
          onPress={() => { navigation.navigate("Avaliation") }}
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: "#8842E8",
            borderRadius: 18,
            width: "60%",
            alignSelf: 'center',
            justifyContent: "center",
            padding: 11,
            marginTop: 10 }}>
          <Text style={{ color: "#FFF", fontWeight: 'bold', fontSize: 18 }}>Ver resultado </Text>
          <Feather 
            name="chevron-right" 
            size={25}
            color="#fff"
            />
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Lessons;