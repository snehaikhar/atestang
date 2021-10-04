import { Component, OnInit } from '@angular/core';


//Additional : 
import {UsersService} from '../../users.service';

@Component({
  selector: 'GithubProfile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // constructor() { }
   profData :any;
   myuname="snehaikhar"
   // profData = undefined;

  constructor(private usrGitAccess:UsersService){
  //   // this.data = this.data
  }

  searchUser(uname:any){
    console.log('In searchUser')
    this.accessGitUser(uname)
  }

  accessGitUser(defUname:any){

      
    this.usrGitAccess.getUserGitAccess(defUname).subscribe(usrdta=>{
      this.myuname = defUname;
      this.profData = usrdta;
    })
  }
  ngOnInit(): void {
    console.log('In ngInIt');
    const defUname = 'snehaikhar';
    this.accessGitUser(defUname);
  }

}

  