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
import { useNavigation } from "@react-navigation/native"

type Nav = {
    navigate: (value: string) => void;
}

export function Home() {
    const [category, setCategory] = useState('')

    const navigation = useNavigation<Nav>()

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

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }

    console.log("🚀 ~ navigation.navigate('handleAppointmentCreate')", navigation.navigate('AppointmentCreate'))
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <View>
            <View style={style.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
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
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={style.matches}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        </View>
    )
}