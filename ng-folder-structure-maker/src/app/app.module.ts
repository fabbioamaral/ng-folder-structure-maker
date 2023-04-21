import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeComponent } from './components/node/node.component';
import { NodeDetailsComponent } from './components/node-details/node-details.component';
import { NodeBranchComponent } from './components/node-branch/node-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeDetailsComponent,
    NodeBranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
