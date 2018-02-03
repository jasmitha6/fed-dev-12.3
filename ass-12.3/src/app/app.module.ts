import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from 'app/service/drop-down.service';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchByPipe } from './search-by.pipe';
import { UserDataComponent } from './user-data/user-data.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListService } from 'app/service/list.service';
import { routedComponents } from 'app/routing/routing';
// this module is provided by cli
@NgModule({
  declarations: [
    RootComponent,
    CapitalizePipe,
    SearchByPipe,
    UserDataComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routedComponents
  ],
  providers: [DropDownService, ListService],
  bootstrap: [RootComponent]
})
export class AppModule { }
