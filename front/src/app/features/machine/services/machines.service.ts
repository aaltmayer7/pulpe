import {Injectable} from '@angular/core';
import {Machine} from '../models/machine.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class MachinesService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(
      `${environment.baseUrl()}/machines`,
    );
  }

  merge(machine: Machine): Observable<Machine> {
    return machine._id ? this.update(machine) : this.create(machine);
  }

  delete(machine: Machine): Observable<Machine> {
    return this.http.delete<Machine>(
      `${environment.baseUrl()}/machines/${machine._id}`,
    );
  }

  private update(machine: Machine): Observable<Machine> {
    return this.http.put<Machine>(
      `${environment.baseUrl()}/machines/${machine._id}`,
      machine,
    );
  }

  private create(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(
      `${environment.baseUrl()}/machines`,
      machine,
    );
  }
}
