import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  superPower: any = ['XRay Vision', 'Flying', 'Freeze Breath', 'Fire', 'Laser Vision', 'Super Strength', 'Pineapple'];
  error: string | undefined;
  message: string | undefined;
  successMsg: boolean | undefined;
  failError: boolean | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      superPower: new FormControl(''),
    });
  }
}
