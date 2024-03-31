import styled, { css } from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 20px 20px 0 0;
    padding: 40px 0;
`;

export const Content = styled.View`
    flex: 1;
    gap: 24px;
    padding: 0 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 20px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        margin-bottom: 8px;
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const HourLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        margin-bottom: 8px;
    `}
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const StatusContainer = styled.View`
    ${({ theme }) => css`
        padding: 8px 16px;
        border-radius: 999px;
        background-color: ${theme.COLORS.GRAY_600};
        flex-direction: row;
        align-items: center;
        width: 144px;
        gap: 8px;
    `}
`;

export const StatusText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const Status = styled.View`
    ${({ theme }) => css`
        width: 8px;
        height: 8px;
        background-color: ${theme.COLORS.GREEN_DARK};
        border-radius: 999px;
    `}
`;


export const Buttons = styled.View`
    padding: 24px;
`;