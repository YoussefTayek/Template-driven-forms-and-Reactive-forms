import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  myForm= new FormGroup({
            name: new FormControl('',Validators.required),
            age: new FormControl(''),
            address: new FormControl(''),
            job: new FormControl('')
          });

  constructor() { 
   
    }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
  }

  
