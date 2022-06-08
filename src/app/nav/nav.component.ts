import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      var toggleButton = document.getElementsByClassName('toggle-button')[0];
      var navbarLinks = document.getElementsByClassName('navbar-links')[0];
      toggleButton.addEventListener("click", () => {
       this.toggle_nav();
      });
  }
  toggle_nav(): void{
    var navbarLinks = document.getElementsByClassName('navbar-links')[0];
    navbarLinks.classList.toggle('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
