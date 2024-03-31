import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'default' | 'outline';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    background-color: ${type === 'default' ? theme.COLORS.GRAY_200 : 'transparent'};
    border: 1px solid ${type === 'default' ? 'transparent' : theme.COLORS.GRAY_100};
    border-radius: 6px;
    padding: 16px 24px;
    gap: 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'default' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'default' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``;
