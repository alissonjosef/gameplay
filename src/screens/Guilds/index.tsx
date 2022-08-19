import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { style } from './style';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props) {

    const guilds = [
{
    id: '1',
    name: 'Lendário',
    icon: null,
    owner: true,
}
    ]
  return (
    <View style={style.container}>
        <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider/>}
        style={style.guilds}
        />
    </View>
  );
}