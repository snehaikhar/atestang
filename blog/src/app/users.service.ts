import { Injectable } from '@angular/core';


//Additionals :
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http:HttpClient) { }
  getUserGitAccess(guname:any){
  	let url = "https://api.github.com/users/"+guname;
  	// let url = "https://api.github.com/users/samay";
  	return this.http.get(url);
  }
  // https://api.github.com/users/shubham1197/repos?simple=yes&per_page=1&page=1
  getUserGitRepoAccess(guname:any,pageno:any){
    let url = `https://api.github.com/users/${guname}/repos?simple=yes&per_page=4 &page=${pageno}`;
  	// let url = `https://api.github.com/users/${guname}/repos`;
  	// let url = "https://api.github.com/users/samay";
  	return this.http.get(url);
  }
}
