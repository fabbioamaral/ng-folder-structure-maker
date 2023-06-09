import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeComponent } from './components/node/node.component';
import { NodeDetailsComponent } from './components/node-details/node-details.component';
import { NodeBranchComponent } from './components/node-branch/node-branch.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAddFolderRootComponent } from './components/form-add-folder-root/form-add-folder-root.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeDetailsComponent,
    NodeBranchComponent,
    FormAddFolderRootComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
