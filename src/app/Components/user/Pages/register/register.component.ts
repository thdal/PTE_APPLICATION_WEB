import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../../../../_helpers/must-match.validator';
import { UserService } from '../../../../_services/user.service';
import { User } from '../../../../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    'register.component.css'  ],
})
export class RegisterComponent implements OnInit {
  userProfilesRecord : [];
  newUser = new User();
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    this.getUserProfiles();
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      profile_id: ['', Validators.required],
      genre_id: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get fval() { return this.registerForm.controls; }

  getUserProfiles(){
    this.userService.getUserProfiles().subscribe(data => {
      this.userProfilesRecord = data;
    },error => {
      console.log('oops', error);
    });
  }

  onFormSubmit(){
    console.log(this.registerForm.value);
    this.submitted = true;
// return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.newUser = this.registerForm.value;// Pas vmt d'interet
    this.newUser.isBanned = false;//Init la variable isBanned
    this.userService.register(this.newUser).subscribe(
      (data)=>{
        //alert('User Registered successfully!!');
        this.router.navigate(['/login']);
      },
      (error)=>{
        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }

  passwordVerification(password) {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{12,50}$/;
    //Doit contenir au moins un nombre et un caractère spécial
    if(password == null || password.length < 12 || !regularExpression.test(password)){
      return false;
    }
    return true;
  }
}
