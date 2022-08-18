import React, { useState } from "react"
import { View, Text, FlatList } from "react-native"
import { Appointment } from "../../components/Appointment"
import { ButtonAdd } from "../../components/ButtonAdd"
import { CategorySelect } from "../../components/CategorySelect"
import { ListDivider } from "../../components/ListDivider"
import { ListHeader } from "../../components/ListHeader"
import { Background } from '../../components/Background';
import { Profile } from "../../components/Profile"
import { styles } from "../SignIn/styles"
import { style } from "./styles"

export function Home() {
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <View>
            <View style={style.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={style.content}>
                <ListHeader
                    title="Partidas agendas"
                    subtitle="Total 6" />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={style.matches}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        </View>
    )
}