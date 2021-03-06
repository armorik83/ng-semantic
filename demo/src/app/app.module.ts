import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgSemanticModule } from '@armorik83/semantic-ui';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ButtonDemoComponent } from './button-demo/button-demo.component'
import { ContainerDemoComponent } from './container-demo/container-demo.component'
import { GridDemoComponent } from './grid-demo/grid-demo.component'
import { ROUTING } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonDemoComponent,
    ContainerDemoComponent,
    GridDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
