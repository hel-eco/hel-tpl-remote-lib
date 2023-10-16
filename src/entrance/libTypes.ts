import type { LibProperties } from './libProperties';
import { exposeLib } from 'hel-lib-proxy';
import { LIB_NAME } from 'configs/subApp';


export const lib = exposeLib<LibProperties>(LIB_NAME);

// suport writing: import { regs, num, myMod } from 'hel-tpl-remote-lib';
export const {
  regs,
  num,
  myMod,
} = lib;

export type Lib = LibProperties;

export default lib;
