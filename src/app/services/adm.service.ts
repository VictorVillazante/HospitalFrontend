import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  constructor(private http:HttpClient) { }
  cancelarConsulta(id:any){
    return this.http.delete<any>('http://localhost:8081/adm/consulta/'+id);
  }
}
