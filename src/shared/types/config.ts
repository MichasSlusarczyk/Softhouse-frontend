import { SvgIconComponent } from '@material-ui/icons'
import { RouteProps } from 'react-router-dom'
import { DrawerProps, TopbarProps } from 'shared/components'

export interface LayoutSettings {
  label?: string
  icon?: SvgIconComponent
  drawerProps?: Partial<DrawerProps>
  topbarProps?: Partial<TopbarProps>
}

export interface ModuleRoute extends RouteProps {
  path: string
  layoutSettings?: LayoutSettings
  public?: boolean
}

export interface Module<Name, Reducer> {
  name: Name
  routes: ModuleRoute[]
  reducer: Reducer
}

export type ValueOf<T> = T[keyof T]
