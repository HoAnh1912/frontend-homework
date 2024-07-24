// 'use client';
// import { Typography as MTypography, SxProps, Theme, useMediaQuery } from '@mui/material';
// import { TypoCategoriesType } from 'assets/themes/theme';
// import { TypographyProps } from './typography.type';
// import { useHydrate } from 'hooks/use-hydrate';

// const getVariantForBreakpointDown = (breakpointDown: boolean, variant: TypoCategoriesType | undefined) => {
//   return breakpointDown && variant ? variant : undefined;
// };

// const Typography = ({
//   children,
//   component = 'p',
//   cate,
//   variant,
//   sx = {},
//   color,
//   plainColor,
//   breakpoints,
//   lines,
//   notUseHydrated = false,
//   ...rest
// }: TypographyProps) => {
//   const { hydrated } = useHydrate();
//   const smDown = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));
//   const mdDown = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
//   const lgDown = useMediaQuery<Theme>(theme => theme.breakpoints.down('lg'));
//   const xlDown = useMediaQuery<Theme>(theme => theme.breakpoints.down('xl'));

//   if (breakpoints) {
//     cate =
//       getVariantForBreakpointDown(smDown, breakpoints.sm) ||
//       getVariantForBreakpointDown(mdDown, breakpoints.md) ||
//       getVariantForBreakpointDown(lgDown, breakpoints.lg) ||
//       getVariantForBreakpointDown(xlDown, breakpoints.xl) ||
//       cate;
//   }

//   const commonSx: SxProps = {
//     textWrap: 'pretty',
//     whiteSpace: 'pre-line', //break line for \n
//     ...(color && {
//       color: color as any
//     }),
//     ...(lines && {
//       overflow: 'hidden',
//       display: '-webkit-box',
//       WebkitLineClamp: `${lines}`,
//       WebkitBoxOrient: 'vertical',
//       textOverflow: 'ellipsis'
//     })
//   };

//   const typographyElement = (
//     <MTypography
//       suppressHydrationWarning
//       sx={{ ...commonSx, ...sx }}
//       color={plainColor}
//       component={component}
//       {...rest}
//       variant={cate || (variant as any)}
//     >
//       {children}
//     </MTypography>
//   );

//   return notUseHydrated ? typographyElement : hydrated && typographyElement;
// };

// export default Typography;
