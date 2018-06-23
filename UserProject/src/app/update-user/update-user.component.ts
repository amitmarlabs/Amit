import { Component, OnInit } from '@angular/core';;
import {UserService} from '../shared-service/user.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {User} from "../user";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  confirmMessage:string = " User Updated Succefully  ..."
  isAddedUser:boolean = false;


  id:number;

  user: any;
  formGroup: FormGroup;
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.formGroup =  new FormGroup({
      'uname' :  new FormControl('', Validators.required),
      'lname' : new FormControl('', Validators.required),
      'email' : new FormControl(Validators.required,Validators.pattern("[^ @]*@[^ @]*"))

    })
this.route.params.subscribe(param =>{

  this.id = +param['id'];
});
    this.userService.getUserDetailsbyId(this.id).subscribe((data) => {
      this.user = data;

    })

  }

  updateUser(value){
    this.userService.getUpdateUser(value).subscribe((data)=>{
     this.isAddedUser = true;
      this.router.navigate(['/']);
    })

  }

}
