import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { DataService } from '../data.service';

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

  constructor(private database: DataService) {}

  ngOnInit(): void {
    document.getElementById('sub-but')?.addEventListener('click', ()=>{
      if(document.getElementById("form6Example1")?.classList.contains('is-valid') && document.getElementById("form6Example2")?.classList.contains('is-valid') && document.getElementById("form6Example5")?.classList.contains('is-valid') && document.getElementById("form6Example6")?.classList.contains('is-valid')){
        let alert_t=document.getElementById('success');
        if(alert_t){
          alert_t.classList.remove('alert-warning');
          alert_t.classList.add('alert-success');
          alert_t.textContent='Sukces!';
          alert_t.style.display='flex';
        }
        this.database.createUser(this.newUser).subscribe(response=>{
          if(response.id!=0){
            this.database.updateUser(response.id, this.newUser);
          }else{
            if(alert_t){
              alert_t.classList.remove('alert-success');
              alert_t.classList.add('alert-warning');
              alert_t.textContent='Jesteś już zapisany na to wydarzenie';
              alert_t.style.display='flex';
            }
          }
        })
      }else{
        let alert_t=document.getElementById('success');
        if(alert_t){
          alert_t.classList.remove('alert-success');
          alert_t.classList.add('alert-warning');
          alert_t.textContent='Dane są nieprawidłowe- wypełnij poprawnie wszystkie pola formularza';
          alert_t.style.display='flex';
        }
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
    if(/^[0-9]{9}$/.test(this.newUser.number)){
        inp?.classList.remove('is-invalid')
        inp?.classList.add('is-valid')
    }else{
        inp?.classList.remove('is-valid')
        inp?.classList.add('is-invalid')
    }
  }
}
export interface user{
  fName:string
  lName: string
  email: string
  number: string
}
