import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, SimpleChanges, OnChanges, AfterViewInit} from '@angular/core';
import {Adherent} from '../../models/adherent.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Objective} from '../../enums/objective.enum';
import {Gender} from '../../enums/gender.enum';

@Component({
  selector: 'pulpe-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdherentsListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() adherents: Adherent[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Adherent>;
  displayedColumns: string[] = ['gender', 'name', 'birthdate', 'email', 'objective', 'actions'];

  objective = Objective;
  gender = Gender;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.adherents);
    this.dataSource.filterPredicate = this.filterPredicate;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource) {
      this.dataSource.data = this.adherents;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilter(filter: string): void {
    this.dataSource.filter = filter;
  }

  private get filterPredicate(): ((data: Adherent, filter: string) => boolean) {
    return (adherent: Adherent, filter: string) => {
      return adherent.firstName.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        || adherent.lastName.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
    };
  }
}
