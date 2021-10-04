import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from '../../users.service';

@Component({
  selector: 'UserRepo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
	 @Input() selected_guname:any;
	 repos:any;


  // constructor() { }
   constructor(private usrGitAccess:UsersService){
  //   // this.data = this.data
  }

    page_no = 1
    prev(){
    console.log('In prev')
    if(this.page_no>1){
      this.page_no = this.page_no-1;
      this.fetchUserRepos();
    }
  }
  next(){
    console.log('In next')
    if(this.page_no<10){
      this.page_no = this.page_no+1;
      this.fetchUserRepos();
    }
  }

  ngOnInit(): void {
	  // this.repos = [{'reponame':'Repository 1','repodisc':'Repository Description 1','topics':['html','css','js']},{'reponame':'Repository 2','repodisc':'Repository Description 2','topics':['html2','css2','js2']},{'reponame':'Repository 3','repodisc':'Repository Description 3','topics':['html3','css3','js3']},{'reponame':'Repository 4','repodisc':'Repository Description 4','topics':['html4','css4','js']}]
  	
  }
  ngOnChanges() {
    // console.log('In ngOnChanges')  
    this.page_no = 1;
    this.fetchUserRepos();
  }

  fetchUserRepos(){
     // console.log('In fetchUserRepos')  
     // console.log(this.page_no)  
    this.usrGitAccess.getUserGitRepoAccess(this.selected_guname,this.page_no).subscribe(usrrepodta=>{
      // console.log(usrrepodta)
      this.repos = usrrepodta;
    })
  }
}
