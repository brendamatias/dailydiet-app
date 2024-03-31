import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type MealTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: MealTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    height: 49px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-bottom: 8px;
    padding: 14px 16px 14px 12px;
    justify-content: space-between;
    flex-direction: row;
    gap: 12px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const Divisor = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Status = styled.View<Props>`
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
        width: 14px;
        height: 14px;
        border-radius: 100%;
    `}
`;
