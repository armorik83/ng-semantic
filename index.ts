import { NgModule } from '@angular/core'

import { ButtonComponent } from './src/button'
import { GridComponent } from './src/grid'
import { ColumnComponent } from './src/column'
import { ContainerComponent } from './src/container'

const components = [
  ButtonComponent,
  GridComponent,
  ColumnComponent,
  ContainerComponent,
] as any[];

@NgModule({
  declarations: [
    components,
  ],
  exports     : [
    components,
  ]
})
export class NgSemanticModule {
}