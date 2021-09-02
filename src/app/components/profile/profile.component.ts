import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any[];
  public repos: any[];
  public username:string;

  constructor(private profileSerivice: ProfileService) {
    this.profile=[]
    this.repos=[]
    this.username=""
    

   }

   findProfile(){
     this.profileSerivice.updateProfile(this.username);
     this.profileSerivice.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile.push(profile);
    });

    this.profileSerivice.getProfileRepos().subscribe(repos => {
      console.log(repos);
     //for(let i of repos){}
      this.repos.push(repos);
     })
   }


  ngOnInit(): void {
  }

}
