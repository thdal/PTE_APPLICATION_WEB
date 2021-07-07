import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../_helpers/must-match.validator';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../../assets/css/register.css'  ],
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['testFname', Validators.required],
      lastName: ['testLname', Validators.required],
      profile: ['', Validators.required],
      email: ['test@epsi.fr', [Validators.required,Validators.email]],
      password: ['tortue', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['tortue2', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get fval() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;
// return for here if form is invalid
    if (this.registerForm.invalid) {
      console.log("return")
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
      (data)=>{
        alert('User Registered successfully!!');
        this.router.navigate(['/login']);
      },
      (error)=>{
        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }

}
