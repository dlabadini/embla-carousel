import { CreateOptionsType } from 'embla-carousel'

export type OptionsType = Omit<
  CreateOptionsType<{ slideSizes: number[] }>,
  'active'
>

export const defaultOptions: OptionsType = {
  breakpoints: {},
  slideSizes: []
}
