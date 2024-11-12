import { FC } from 'react';
import { View, type ViewProps } from 'react-native';

import { styles } from './Container.styles';

interface ContainerProps extends ViewProps {
  flex?: number;
}
export const Container: FC<ContainerProps> = ({ flex, style, ...rest }) => {
  return <View style={[styles.container, style, { flex }]} {...rest} />;
};
