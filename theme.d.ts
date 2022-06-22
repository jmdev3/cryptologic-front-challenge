/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import { ITheme } from 'theme/types'

declare module 'styled-components' {
  declare interface DefaultTheme extends ITheme {}
}
