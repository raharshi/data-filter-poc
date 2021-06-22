import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse ,HttpParams } from '@angular/common/http';
import { Observable, throwError ,of , from,Subject, BehaviorSubject} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Router} from "@angular/router";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,private router: Router) {}
  private apiBaseUrl = environment.base_url;

  public getData():Observable<any> {
    return this.http.get<any>(this.apiBaseUrl+"/todos").pipe(
      map(response =>response)
    );
  }
}
