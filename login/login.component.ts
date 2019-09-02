import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { Adm } from '../shared/interface/empLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admObj:Adm[];
  isTrue:boolean;
  constructor(private service:EmpService,private route:Router) { }

  ngOnInit() {
    sessionStorage.clear();
  }
  adminLogin(frm){
    this.service.getAdmin().subscribe(
      (res)=>{
        this.admObj=res;
        console.log(this.admObj);

        for(var i=0; i<this.admObj.length;i++){
          //console.log(this.admObj[i]);
          if(this.admObj[i].userName===frm.userName && this.admObj[i].userPassword===frm.userPassword){

            this.route.navigate(['/home']);
            var sess= sessionStorage.setItem('user',frm.userName);
            console.log(sess);
             this.isTrue=false;
          }
          else{
            this.isTrue=true;

          }
        }
      }
    );

  }//End of adminLogin method
}
