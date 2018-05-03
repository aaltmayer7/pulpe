import {
  Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ViewChild, AfterViewInit, Output,
  EventEmitter
} from '@angular/core';
import {Machine} from '../../models/machine.model';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {MatSnackBarRef} from '@angular/material/snack-bar/typings/snack-bar-ref';
import {SimpleSnackBar} from '@angular/material/snack-bar/typings/simple-snack-bar';

@Component({
  selector: 'pulpe-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() machines: Machine[];
  @Output() deleted: EventEmitter<Machine> = new EventEmitter<Machine>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Machine>;

  displayedColumns: string[] = ['name', 'comment', 'actions'];

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.machines);
    this.dataSource.filterPredicate = this.filterPredicate;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource) {
      this.dataSource.data = this.machines;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDelete(machine: Machine): void {
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(
      'Souhaitez-vous vraiment supprimer cette machine ?',
      'Supprimer',
      {
      },
    );
    snackBarRef.onAction().subscribe(() => {
      this.deleted.emit(machine);
    });
  }

  onFilter(filter: string): void {
    this.dataSource.filter = filter;
  }

  private get filterPredicate(): ((data: Machine, filter: string) => boolean) {
    return (machine: Machine, filter: string) => {
      return machine.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
    };
  }
}
