import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

type ButtonProps = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap;
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button({ title, icon, type = 'default', ...rest }: ButtonProps) {
    return (
        <Container
            type={type}
            {...rest}
        >
            {icon && <Icon name={icon} type={type} />}
            <Title type={type}>{title}</Title>
        </Container>
    )
}