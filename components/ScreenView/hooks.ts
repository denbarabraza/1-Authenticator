import { useMemo } from 'react';
import type { Edge, EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { capitalize } from 'lodash';

const DEFAULT_EDGES: Edge[] = ['top', 'bottom'];
const getPaddings = (edges: Edge[], insets: EdgeInsets) =>
  edges.reduce((styles, edge) => {
    const styleName = `padding${capitalize(edge)}`;
    return { ...styles, [styleName]: insets[edge] };
  }, {});

export const useSafeAreaPaddings = (edges: Edge[] = DEFAULT_EDGES) => {
  const insets = useSafeAreaInsets();
  return useMemo(() => getPaddings(edges, insets), [edges, insets]);
};
