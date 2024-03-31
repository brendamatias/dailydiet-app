import { ImageProps } from "react-native";
import { Container } from "./styles";

export function Avatar({ ...rest }: ImageProps) {
    return (
        <Container {...rest} />
    )
}