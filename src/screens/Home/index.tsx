import { Image, SectionList, Text, View } from "react-native";
import { Container, Content, EmptyList, Header, ListTitle, MealText } from "./styles";
import { Avatar } from "@components/Avatar";
import logo from '@assets/logo.png';
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { useState } from "react";
import MealCard from "@components/MealCard";

export default function Home() {
    const [meals, setMeals] = useState([
      {
        title: '12.08.22',
        data: [
            {
                title: 'X-tudo',
                hour: '20:00'
            },
            {
                title: 'Whey protein com leite',
                hour: '16:00'
            },
            {
                title: 'Salada cesar com frango grelhado',
                hour: '12:30'
            },
            {
                title: 'Vitamina de banana com abacate',
                hour: '09:30'
            },
        ]
      },
      {
        title: '11.08.22',
        data: [
            {
                title: 'X-tudo',
                hour: '20:00'
            },
            {
                title: 'Whey protein com leite',
                hour: '16:00'
            },
            {
                title: 'Salada cesar com frango grelhado',
                hour: '12:30'
            },
            {
                title: 'Vitamina de banana com abacate',
                hour: '09:30'
            },
        ]
      },
    ]);

    return (
        <Container>
            <Header>
                <Image source={logo}  />
                <Avatar source={{ uri: 'https://github.com/brendamatias.png' }} />
            </Header>

            <Percent percent={30} />

            <Content>
                <MealText>Refeições</MealText>

                <Button title="Nova refeição" icon="add" />

                <SectionList
                    sections={meals}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <MealCard title={item.title} hour={item.hour} />
                    )}
                    renderSectionHeader={({ section }) => (
                        <ListTitle>
                            {section.title}
                        </ListTitle>
                    )}
                    contentContainerStyle={meals.length === 0 && { flex: 1, justifyContent: 'center' }}
                    ListEmptyComponent={() => (
                        <EmptyList>
                            Não há nenhuma refeição cadastrada. {'\n'}
                            Vamos adicionar uma nova refeição?
                        </EmptyList>
                    )}
                    showsVerticalScrollIndicator={false}
                />

            </Content>
        </Container>
    )
}