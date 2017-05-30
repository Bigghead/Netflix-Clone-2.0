import { Router } from '@angular/router';
import { AuthService } from './../../Services/authentication.service';
import { Http } from '@angular/http';
import { MovieDataService } from '../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieData: MovieDataService, 
              private http: Http, 
              private authService: AuthService, 
              private router : Router) { }

  user = false;
  searchForm: FormGroup;

  ngOnInit() {

    this.initForm();

    this.authService.isUser
        .subscribe(
          (res) => this.user = res
        )
  }


  initForm(){
    this.searchForm = new FormGroup({
      'search': new FormControl(null)
    })
  }

  searchSubmit(){
    const searchTerm = this.searchForm.value.search;
    this.router.navigate(['/search', searchTerm])
    this.searchForm.reset();
  }

  

}
