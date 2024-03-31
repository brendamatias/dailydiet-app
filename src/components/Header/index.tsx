import { BackButton, BackIcon, Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
}

export function Header({ title }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <Title>{title}</Title>
        </Container>
    )
}