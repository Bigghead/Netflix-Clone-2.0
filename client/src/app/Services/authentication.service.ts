import { Subject } from 'rxjs/Rx';
// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
import { authKeys } from '../../keys';

@Injectable()
export class AuthService {

  isUser = new Subject<boolean>();
  // user = null;

  //testing user favorite component
  user = {
    userName: 'Shav P',
    userList: [
      {
        poster_path:"\/rxQynWvwl41VbJGb0FEyYtuRwS2.jpg",
         adult:false,
         overview:"Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
         release_date:"2017-05-12",
         genre_ids:[  
            28,
            35
         ],
         id:339846,
         original_title:"Baywatch",
         original_language:"en",
         title:"Baywatch",
         backdrop_path:"\/tryI7qZHaLMVzMNpLyKHKDiZOLc.jpg",
         popularity:10.568461,
         vote_count:80,
         video:false,
         vote_average:4.6
      },
      {
        poster_path:"\/rxQynWvwl41VbJGb0FEyYtuRwS2.jpg",
         adult:false,
         overview:"Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
         release_date:"2017-05-12",
         genre_ids:[  
            28,
            35
         ],
         id:339846,
         original_title:"Baywatch",
         original_language:"en",
         title:"Baywatch",
         backdrop_path:"\/tryI7qZHaLMVzMNpLyKHKDiZOLc.jpg",
         popularity:10.568461,
         vote_count:80,
         video:false,
         vote_average:4.6
      },
      {
        poster_path:"\/rxQynWvwl41VbJGb0FEyYtuRwS2.jpg",
         adult:false,
         overview:"Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
         release_date:"2017-05-12",
         genre_ids:[  
            28,
            35
         ],
         id:339846,
         original_title:"Baywatch",
         original_language:"en",
         title:"Baywatch",
         backdrop_path:"\/tryI7qZHaLMVzMNpLyKHKDiZOLc.jpg",
         popularity:10.568461,
         vote_count:80,
         video:false,
         vote_average:4.6
      },
      {
        poster_path:"\/rxQynWvwl41VbJGb0FEyYtuRwS2.jpg",
         adult:false,
         overview:"Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
         release_date:"2017-05-12",
         genre_ids:[  
            28,
            35
         ],
         id:339846,
         original_title:"Baywatch",
         original_language:"en",
         title:"Baywatch",
         backdrop_path:"\/tryI7qZHaLMVzMNpLyKHKDiZOLc.jpg",
         popularity:10.568461,
         vote_count:80,
         video:false,
         vote_average:4.6
      }
    ]
  }

  isAuthenticated(){

      return this.user != null;
  }

}