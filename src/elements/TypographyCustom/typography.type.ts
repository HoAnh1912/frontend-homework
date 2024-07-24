import { TypographyProps as MTypographyProps } from '@mui/material';
import { BreakpointKeys, TypoCategoriesType } from 'assets/themes/theme';
import { ElementType } from 'react';

export type TypographyProps = MTypographyProps & {
  component?: ElementType;
  cate?: TypoCategoriesType;
  plainColor?: string;
  htmlFor?: string;
  breakpoints?: {
    [K in BreakpointKeys]?: TypoCategoriesType;
  };
  lines?: number;
  notUseHydrated?: boolean;
};
