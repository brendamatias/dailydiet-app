import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native';

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ContainerProps = {
    type: PercentTypeStyleProps;
}

export const Container = styled.View<ContainerProps>`
    ${({ theme, type }) => css`
        border-radius: 8px;
        padding: 20px 16px;
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        text-align: center;
    `}
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        text-align: center;
    `}
`;

export const Icon = styled(ArrowUpRight).attrs<ContainerProps>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
    right: 8px;
    top: 8px;
    position: absolute;
`