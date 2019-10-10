import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { flags, FlagIcons } from 'src/app/data/Item.dto';

@Component({
  selector: 'vrt-items-flag-filter',
  templateUrl: './items-flag-filter.component.html',
  styleUrls: ['./items-flag-filter.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemsFlagFilterComponent implements OnInit {

  @Output() onFilterChange: EventEmitter<object> = new EventEmitter();
  public flagsState: object = {};
  public flagsList: string[] = [];
  public flagIcons: object = FlagIcons;

  ngOnInit(): void {
    flags.forEach((flag: string) => {
      this.flagsState[ flag ] = false;
      this.flagsList.push(flag);
    });
  }

  onFlagChange(flag: string): void {
    this.flagsState[flag] = !this.flagsState[flag];
    this.onFilterChange.emit(this.flagsState);
  }
}
