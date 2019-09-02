import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  frmObj:object;
  constructor(private service:EmpService,private router:Router) { }

  ngOnInit() {
  }

  addEmp(frmvalue){
      this.frmObj = {
        empName:frmvalue.empName,
        empContact:frmvalue.empContact,
        empCity:frmvalue.empCity
      }
      console.log(this.frmObj);

      this.service.addEmp(this.frmObj).subscribe(
        (res)=>{
          alert("Employee Detail Added Successfully...");
        this.router.navigate(['/home']);
        }
      );
  }
}
