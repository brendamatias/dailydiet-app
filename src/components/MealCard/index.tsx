import { Text, TouchableOpacityProps, View } from "react-native";
import { Container, Content, Divisor, Hour, MealTypeStyleProps, Status, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    hour: string;
    type?: MealTypeStyleProps;
}

export default function MealCard({ title, hour, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Content>
                <Hour>{hour}</Hour>
                <Divisor />
                <Title>{title}</Title>
            </Content>
            <Status type={type} />
        </Container>
    )
}