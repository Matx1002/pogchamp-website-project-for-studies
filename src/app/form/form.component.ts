import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newUser: user={
    fName:"",
    lName:"",
    email:"",
    number:""
  }

  constructor() { }

  ngOnInit(): void {
    document.getElementById('sub-but')?.addEventListener('click', ()=>{
      if(document.getElementById("form6Example1")?.classList.contains('is-valid') && document.getElementById("form6Example2")?.classList.contains('is-valid') && document.getElementById("form6Example5")?.classList.contains('is-valid') && document.getElementById("form6Example6")?.classList.contains('is-valid')){
        alert("Tu zapis danych")
      }else{
        alert("Dane są nieprawidłowe- wypełnij poprawnie wszystkie pola formularza");
      }
    })
  }
  OnNameIn(): void {
    var inp=document.getElementById("form6Example1");

    if(/^[a-zA-Z]+$/.test(this.newUser.fName)){
        inp?.classList.remove('is-invalid')
        inp?.classList.add('is-valid')
    }else{
        inp?.classList.remove('is-valid')
        inp?.classList.add('is-invalid')
    }
  }
  OnLastIn(): void {
    var inp=document.getElementById("form6Example2");

    if(/^[a-zA-Z]+$/.test(this.newUser.lName)){
        inp?.classList.remove('is-invalid')
        inp?.classList.add('is-valid')
    }else{
        inp?.classList.remove('is-valid')
        inp?.classList.add('is-invalid')
    }
  }
  OnEmailIn(): void {
    var inp=document.getElementById("form6Example5");

    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.newUser.email)){
        inp?.classList.remove('is-invalid')
        inp?.classList.add('is-valid')
    }else{
        inp?.classList.remove('is-valid')
        inp?.classList.add('is-invalid')
    }
  }
  OnNumberIn(): void {
    var inp=document.getElementById("form6Example6");
    if(/^[0-9]{0,2}[0-9]{9}$/.test(this.newUser.number)){
        inp?.classList.remove('is-invalid')
        inp?.classList.add('is-valid')
    }else{
        inp?.classList.remove('is-valid')
        inp?.classList.add('is-invalid')
    }
  }
}
interface user{
  fName:string
  lName: string
  email: string
  number: string
}
