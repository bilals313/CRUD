import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Emp } from './shared/interface/empInterface';
import { Adm } from './shared/interface/empLogin';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private _http: HttpClient) { }

  getEmployee() {

    return this._http.get<Emp[]>("http://localhost:3000/employees");
  }
  //get Admin
  getAdmin() {
    return this._http.get<Adm[]>("http://localhost:3000/login");
  }

  deleteEmployee(id) {

    return this._http.delete("http://localhost:3000/employees/" + id);
  }
  getSingleEmployee(id) {

    return this._http.get<Emp[]>("http://localhost:3000/employees/" + id);
  }

  addEmp(frmObj) {
    return this._http.post("http://localhost:3000/employees",frmObj);
  }

  updateEmp(empObj,id) {
    return this._http.put("http://localhost:3000/employees/"+id,JSON.stringify(empObj),{headers:this.headers});
  }


}
