import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsRootComponent } from './components/items-root/items-root.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemsFlagFilterComponent } from './components/items-flag-filter/items-flag-filter.component';
import { ItemsNameFilterComponent } from './components/items-name-filter/items-name-filter.component';

@NgModule({
  declarations: [
    ItemsRootComponent,
    ItemsListComponent,
    ListItemComponent,
    ItemDetailsComponent,
    ItemsFlagFilterComponent,
    ItemsNameFilterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ItemsRootComponent]
})
export class AppModule { }
