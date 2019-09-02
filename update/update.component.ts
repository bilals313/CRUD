import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  id:number;
  empDetails:object;
  empObj:object;
  constructor(private service:EmpService ,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        this.id=params['id'];
        console.log(this.id);
      }
    );

    this.getSingleEmpDetails();
  }

  getSingleEmpDetails(){
    this.service.getSingleEmployee(this.id).subscribe(
      (res)=>{
        this.empDetails=res;
        console.log(this.empDetails);
      }
    );
  }

  updateEmp(frmvalue){
    this.empObj= {
      empName:frmvalue.empName,
      empContact:frmvalue.empContact,
      empCity:frmvalue.empCity
    }
    console.log(this.empObj);

    this.service.updateEmp(this.empObj,this.id).subscribe(
      (res)=>{
        alert("Employee Detail Updated Successfully...");
        this.router.navigate(['/home']);
      }
    );
  }


}
