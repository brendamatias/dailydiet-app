import { Text, TouchableOpacityProps, View } from "react-native";
import { Container, Content, Divisor, Hour, MealTypeStyleProps, Status, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    hour: string;
    type?: MealTypeStyleProps;
}

export default function MealCard({ title, hour, type = 'PRIMARY' }: Props) {
    return (
        <Container>
            <Content>
                <Hour>{hour}</Hour>
                <Divisor />
                <Title>{title}</Title>
            </Content>
            <Status type={type} />
        </Container>
    )
}