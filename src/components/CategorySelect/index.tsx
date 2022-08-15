import React from "react";
import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";

import { Category } from "../Category";
import { style } from "./styles";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({
    categorySelected, 
    setCategory
}: Props) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            /* style={style.container} */
            contentContainerStyle={{
                paddingRight: 40,
                minHeight: 120,
                maxHeight: 120,
                paddingLeft: 24
            }}
        >
            {
                categories.map(category => (
                    <Category
                     key={category.id} 
                     title={category.title} 
                     icon={category.icon} 
                     checked={category.id === categorySelected}
                     onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    )
}