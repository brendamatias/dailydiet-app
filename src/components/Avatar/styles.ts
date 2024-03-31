import { Image } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled(Image).attrs(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: theme.COLORS.GRAY_200,
    resizeMode: 'contain',
}))``;
