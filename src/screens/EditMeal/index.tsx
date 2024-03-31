import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Buttons, Content, Title, Description, HourLabel, Hour, Status, StatusContainer, StatusText, SafeArea } from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";

export default function EditMeal() {
    const navigation = useNavigation();

    function handleEdit() {
        navigation.navigate('editMeal')
    }

    function handleDelete() {
    }

    return (
        <SafeArea>
            <Header title="Editar refeição" />
            <Container>
                <Content>
                    <View>
                        <Title>Sanduiche</Title>
                        <Description>Sanduíche de pão integral com atum e salada de alface e tomate</Description>
                    </View>
                    <View>
                        <HourLabel>Data e hora</HourLabel>
                        <Hour>12/08/2022 às 16:00</Hour>
                    </View>

                    <StatusContainer>
                        <Status />
                        <StatusText>dentro da dieta</StatusText>
                    </StatusContainer>
                </Content>

                <Buttons>
                    <Button title="Salvar alterações" onPress={handleEdit} />
                </Buttons>
            </Container>
        </SafeArea>
    )
}