import { NodesType } from './NodeHandler'
import { CreateOptionsType } from './Options'
import { CreatePluginType } from './Plugins'

export type EmblaSsrHandlerType = {
  getNodes: () => NodesType
  getStyles: (containerSelector: string, slidesSelector?: string) => string
}

export type EmblaSsrOptionsType = Omit<
  CreateOptionsType<{ slideSizes: number[] }>,
  'active'
>

export type EmblaSsrType = CreatePluginType<
  EmblaSsrHandlerType,
  EmblaSsrOptionsType
>
