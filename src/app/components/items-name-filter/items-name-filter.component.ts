import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vrt-items-name-filter',
  templateUrl: './items-name-filter.component.html',
  styleUrls: ['./items-name-filter.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsNameFilterComponent implements OnInit, OnDestroy {
  @Output() onTextFilterChange: EventEmitter<string> = new EventEmitter();

  public filterText: FormControl = new FormControl();
  private filterTextSubscription: Subscription = null;

  constructor () { }

  ngOnDestroy(): void {
    this.filterTextSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.filterTextSubscription = this.filterText.valueChanges
      .pipe(
        debounceTime(150),
        map((value: string) => value.trim()),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.onTextFilterChange.emit(value);
      });
  }

}
