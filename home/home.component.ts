import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../shared/interface/empInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  empData:Emp[];
  user:any;
  constructor(private service:EmpService) { }//creating object of service..

  ngOnInit() {
    this.fetchEmp();
    console.log(this.empData);
    this.user=sessionStorage.getItem('user');

  }
  fetchEmp(){
    this.service.getEmployee().subscribe(
      (res)=>{
        this.empData=res;
        console.log(this.empData);
      }
    )
  }

  logout(){
    alert("Are you sure!!!.. you want to logout");
  }
  empDelete(id){
    this.service.deleteEmployee(id).toPromise().then(
      (res)=>{
        alert("Data Deleted successfully...");
        this.fetchEmp();

      }
    )
  }

}
