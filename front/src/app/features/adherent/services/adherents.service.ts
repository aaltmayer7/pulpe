import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {Adherent} from '../models/adherent.model';

@Injectable()
export class AdherentsService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Adherent[]> {
    return this.http.get<Adherent[]>(
      `${environment.baseUrl()}/coachs/members`,
    );
  }

  merge(adherent: Adherent): Observable<Adherent> {
    return adherent._id ? this.update(adherent) : this.create(adherent);
  }

  delete(adherent: Adherent): Observable<Adherent> {
    return this.http.delete<Adherent>(
      `${environment.baseUrl()}/members/${adherent._id}`,
    );
  }

  private update(adherent: Adherent): Observable<Adherent> {
    return this.http.put<Adherent>(
      `${environment.baseUrl()}/members/${adherent._id}`,
      adherent,
    );
  }

  private create(adherent: Adherent): Observable<Adherent> {
    return this.http.post<Adherent>(
      `${environment.baseUrl()}/members`,
      adherent,
    );
  }
}
