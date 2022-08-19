import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { style } from './styles';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {

  const members = [
    {
      id: '1',
      username: "Alisson",
      avatar_url: 'https://github.com/alissonjosef.png',
      status: 'online',
    },
    {
      id: '2',
      username: "Alisson",
      avatar_url: 'https://github.com/alissonjosef.png',
      status: 'offline',
    }
  ]
  return (
    <Background>
      <Header title={'Detalhes'} action={
        <BorderlessButton>
          <Fontisto
            name='share'
            size={24}
            color={theme.colors.primary}
          />
        </BorderlessButton>
      } />

      <ImageBackground
        source={BannerImg}
        style={style.banner}
      >
        <View style={style.bannerContent}>
          <Text style={style.title}>
            Lendarios
          </Text>

          <Text style={style.description}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title={'Jogadores'} subtitle={'Total 3'} />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item
          } />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={style.members}
      />
      <View style={style.footer}>
        <ButtonIcon
          title='Entrar na Partida'
        />
      </View>

    </Background>
  );
}