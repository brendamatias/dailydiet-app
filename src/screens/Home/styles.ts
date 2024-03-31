import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    margin: 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    margin-top: 24px;
`;

export const Content = styled.View`
    margin-top: 40px;
    flex: 1;
`;

export const MealText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        margin-bottom: 8px;
    `}
`;

export const ListTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        margin-bottom: 8px;
        margin-top: 32px;
    `}
`;

export const EmptyList = styled.Text`
    ${({ theme }) => css`
        text-align: center;
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}
`;