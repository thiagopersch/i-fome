import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";
import media from "styled-media-query";

import { ButtonProps } from "./";

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<
  ButtonProps,
  "size" | "fullWidth" | "styleType" | "color" | "labelColor" | "sizeLabel"
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 2rem;
    font-size: ${theme.font.sizes.xxsmall};
    padding: ${theme.spacings.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
  `,
  large: (theme: DefaultTheme) => css`
    height: 8rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.small};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;
      stroke-width: 2;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  normal: (theme: DefaultTheme) => css`
    width: auto;
  `,
  rounded: () => css`
    border-radius: 10rem;
  `,
  outlined: (theme: DefaultTheme) => css`
    background: transparent;
    box-sizing: border-box;
    border: 0.2rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    border-radius: 10rem;

    &:hover {
      background-color: ${darken(0.05, theme.colors.white)};
      box-shadow: ${theme.shadow.hover};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    transition: ${theme.transition.fast};
    border-radius: 10rem;

    &:hover {
      background: ${darken(0.01, theme.colors.white)};
      box-shadow: ${theme.shadow.hover};
    }
  `,
  circle: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    height: 10rem;
    width: 5rem;
    border: 0.5px solid ${theme.colors.primary};
    border-radius: 100rem;
    padding: 10px;

    &:hover {
      background: ${darken(0.05, theme.colors.white)};
      box-shadow: ${theme.shadow.hover};
    }

    > svg {
      color: ${theme.colors.primary};
    }
  `,
};

const sizeLabelModifiers = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    disabled,
    styleType,
    color = "primary",
    labelColor = "darkGrey",
    sizeLabel,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[color]};
    color: ${theme.colors[labelColor]};
    border: 0;
    outline: none;
    border-radius: 0.6rem;
    padding: ${theme.spacings.small};
    text-decoration: none;
    cursor: pointer;
    font-family: ${theme.font.primary};
    font-weight: ${theme.font.weight.bold};
    transition: ${theme.transition.fast};
    width: 100%;
    box-shadow: ${theme.shadow.default};

    &:hover {
      background: ${darken(0.05, theme.colors[color])};
      box-shadow: ${theme.shadow.hover};
    } 
    ${media.lessThan("medium")`width: 100%`} 
  }

    ${!!styleType && wrapperModifiers[styleType](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!size && wrapperModifiers[size](theme)}
    ${!!sizeLabel && sizeLabelModifiers[sizeLabel](theme)}
      ${!!hasIcon && wrapperModifiers.withIcon(theme)}
      ${disabled && wrapperModifiers.disabled()};
  `}
`;
