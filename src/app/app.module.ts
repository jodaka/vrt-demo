import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemsRootComponent } from './components/items-root/items-root.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemsFlagFilterComponent } from './components/items-flag-filter/items-flag-filter.component';

@NgModule({
  declarations: [
    ItemsRootComponent,
    ItemsListComponent,
    ListItemComponent,
    ItemDetailsComponent,
    ItemsFlagFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ItemsRootComponent]
})
export class AppModule { }
