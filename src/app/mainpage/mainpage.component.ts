import {Component, OnInit} from '@angular/core';
import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.getElementById("przycisk")?.addEventListener('click', () => {
      let form = document.getElementById("formularzyk");
      if(!form) return;
      var headerOffset = 100;
      var elementPosition = form.getBoundingClientRect().top;
      var offsetPosition = elementPosition+window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    })
  }

}
