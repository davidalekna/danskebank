import styled from "styled-components";
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  position,
} from "styled-system";
import {
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  ColorProps,
  BorderProps,
} from "styled-system";

export type FlexProps = FlexboxProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  TypographyProps &
  ColorProps &
  BorderProps;

export const StyledOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`;

export const Flex = styled.div.attrs(() => ({
  display: "flex",
}))<FlexProps>(
  compose(flexbox, space, layout, position, typography, color, border)
);
