import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user';
import { Repository } from '../repository';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[SearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {  
  public username:string;
  user:User;
  repositories:Repository[];
  

  constructor(private getService:SearchService) {

   }

   findUsers(){
  this.getService.update(this.username);
  this.getService.fetchUserInformation();
  this.getService.fetchRepoInformation();
   }
   

  ngOnInit() {
    this.getService.fetchUserInformation();    
    this.user=this.getService.user;
    this.getService.fetchRepoInformation();
    this.repositories=this.getService.repos;
  }

}

  
 
