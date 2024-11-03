import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Responses } from '../interfaces/responses'
import { Enterprise } from '../interfaces/enterprise'
import { Login } from '../interfaces/login'

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private urlAPI: string = environment.apiURL
  private http = inject(HttpClient)

  loginEnterprise(request: Login):Observable<Responses> {
    return this.http.post<Responses>(
      `${this.urlAPI}login`, request
    )
  }

  registerEnterprise(request: Enterprise):Observable<Responses>{
    return this.http.post<Responses>(
      `${this.urlAPI}register`, request
    )
  }
}
