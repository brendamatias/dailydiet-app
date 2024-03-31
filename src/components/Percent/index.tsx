import { Container, Icon, PercentTypeStyleProps, Subtitle, Title } from "./styles";

type Props = {
    percent: number;
    type?: PercentTypeStyleProps;
}

export function Percent({ percent, type = 'PRIMARY' }: Props) {
    return (
        <Container type={type}>
            <Title>{percent}%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
            <Icon type={type} />
        </Container>
    )
}