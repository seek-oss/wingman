import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const menuWidth = calc.multiply(vars.grid, 64);
