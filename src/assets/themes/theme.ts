import { TypographyOptions } from '@mui/material/styles/createTypography';
import { convertToRem } from 'utils/convert-to-rem';

export const defaultTypo = {
  fontFamily: 'inherit',
  fontWeight: 400,
  color: '#FFFFFF',
  letterSpacing: 0,
  fontSize: convertToRem(16),
  lineHeight: convertToRem(20),
  textTransform: 'none'
};

export const getTextStyles = (fz: number, lh: number, fw: number, ls?: number) => ({
  ...defaultTypo,
  fontSize: convertToRem(fz),
  lineHeight: `${lh}%`,
  fontWeight: fw,
  fontFamily: 'inherit',
  letterSpacing: ls ? `${ls}%` : 'inherit'
});

export const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489'
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e'
      },
      disabled: {
        color: '#9fb6cf'
      }
    }
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7'
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9'
      },
      disabled: {
        color: '#3e5e7e'
      }
    }
  }
};

export const themeColor = {
  main_primary: {
    main_color: '#00127f',
    main_bg: '#f2f3fb'
  },
  main_grey: {},
  sub: {},
  gradation: {}
};

const typoCategories = {
  large_title: getTextStyles(40, 100, 700, 0),
  title_1_bold: getTextStyles(36, 120, 700, 0)
};

const breakpoints = {
  xs: 0,
  sm: 360,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  sl: 1600
};

export type TypoCategoriesType = keyof typeof typoCategories;
export type BreakpointKeys = keyof typeof breakpoints;

export const getDesignTokens = () => {
  return {
    typography: {
      allVariants: defaultTypo,
      ...typoCategories
    } as TypographyOptions,
    breakpoints: {
      values: breakpoints
    }
  };
};
