import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { User } from './user';
import { Repository } from './repository';
// import { reject } from 'q';
// import { stringify } from '@angular/core/src/render3/util';
// import { promise } from 'protractor';



@Injectable()
export class SearchService {
  public username:string;
user:User;
repos:Repository[];
reposa:any=[];



  constructor(private http: HttpClient) {
    this.user = new User("","","",0,0,"");
    this.repos=[]
    this.username= "lilianwaweru";
    }

    fetchUserInformation(){
      interface ApiInterface{
        login:string;
        avatar_url:string;
        public_repos:string;
        followers:0;
        following:0;
        created_at:string;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiInterface>(environment.apiUrl+this.username +environment.token).toPromise().then(response=>{
          this.user.login= response.login
          this.user.avatar_url = response.avatar_url
          this.user.public_repos = response.public_repos
          this.user.followers=response.followers
          this.user.following=response.following
          this.user.created_at=response.created_at
          
          resolve()
         },error=>{
           this.user.avatar_url = "Error Fetching Data"
  
           reject(error)
         })
      })
       return promise


//     }//End of fetch

//     fetchRepoInformation(){
//       interface ApiInterface{
//       name:string;
//       html_url:string;
//       description:string;
//       }
//       let promise = new Promise((resolve,reject)=>{
//         this.http.get<ApiInterface[]>(environment.apiUrl+this.username +"/repos"+environment.token).toPromise().then(response=>{
//           response.forEach( repository=> {
//             this.repos.push(new Repository(repository.name,repository.html_url,repository.description))
//           });
    
//           resolve()
          
//          },error=>{
  
//            reject(error)
//          })
//       })
//        return promise

//     }
// update(username:string){
//   this.username = username;
// }
    
//   }

