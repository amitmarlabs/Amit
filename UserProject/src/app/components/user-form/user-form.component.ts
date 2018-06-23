import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  formGroup: FormGroup;

confirmMessage:string = "New User Added ..."
  isAddedUser:boolean = false;
  user: any;



  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {

    this.formGroup =  new FormGroup({
      'uname' :  new FormControl('', Validators.required),
      'lname' : new FormControl('', Validators.required),
      'email' : new FormControl(Validators.required,Validators.pattern("[^ @]*@[^ @]*"))

    })
    this.loadDetails();


  }

  addPost(val) {
    console.log("val "+val);

   this.userService.getCraeteUser(val.value).subscribe((data) => {
     this.isAddedUser = true;
     console.log("insert user")
     this.loadDetails();
     this.router.navigate(['/']);
   })

  }





  loadDetails (){
    this.userService.getUserDetails().subscribe((users) => {

    });


  }


}
