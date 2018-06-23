import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared-service/user.service';
import {User} from '../../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  user: Array<any>;
  constructor(private userService:UserService, private router:Router) {


  }

  ngOnInit() {

    this.loadDetails();

  }

  loadDetails (){
this.userService.getUserDetails().subscribe((users) => {
  this.user = users;
  console.log(users);

});

  }
  remove(index){
    this.user.slice(index,1);
    this.userService.getdeleteUser(index).subscribe((data)=> {

      console.log("delete");
      this.loadDetails();
    });


  }


  addUser() {
    this.router.navigate(['/userForm']);

  }

}
