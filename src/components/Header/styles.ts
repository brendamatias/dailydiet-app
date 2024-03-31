import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
        padding: 24px;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        margin-bottom: 8px;
        text-align: center;
    `}
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`
export const BackIcon = styled(ArrowLeft).attrs(({ theme }) =>  ({
    color: theme.COLORS.GRAY_200,
    size: 24
}))`
    position: absolute;
`;