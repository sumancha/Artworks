import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
      registerForm : FormGroup;



  constructor(

    private service: AuthService,
    private toastr: ToastrService
  ) { }
  isSubmitted: boolean = false;

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')

    if (password && confirmPassword && password.value != confirmPassword.value)
      confirmPassword?.setErrors({ passwordMismatch: true })
    else
      confirmPassword?.setErrors(null)

    return null;
  }
// const newForm = new FormGroup
//   form = this.formBuilder.group({
//     fullName: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [
//       Validators.required,
//       Validators.minLength(6),
//       Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
//     confirmPassword: [''],
//   }, { validators: this.passwordMatchValidator })

// ngOnInit(){

//   this.registerForm =  new FormGroup({
//   fullName: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(6),
//       Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]),
//     confirmPassword: new FormControl(''),
//      }, { validators: this.passwordMatchValidator  
//   })
// }

//   onSubmit() {
//     this.isSubmitted = true;
//     if (this.registerForm.valid) {
//       this.service.createUser(this.registerForm.value)
//         .subscribe({
//           next: (res: any) => {
//             if (res.succeeded) {
//               this.registerForm.reset();
//               this.isSubmitted = false;
//               this.toastr.success('New user created!', 'Registration Successful')
//             }
//           },
//           error: err => {
//             if (err.error.errors)
//               err.error.errors.forEach((x: any) => {
//                 switch (x.code) {
//                   case "DuplicateUserName":
//                     break;

//                   case "DuplicateEmail":
//                     this.toastr.error('Email is already taken.', 'Registration Failed')
//                     break;

//                   default:
//                     this.toastr.error('Contact the developer', 'Registration Failed')
//                     console.log(x);
//                     break;
//                 }
//               })
//             else
//               console.log('error:',err);
//           }

//         });
//     }
//   }

//   hasDisplayableError(controlName: string): Boolean {
//     const control = this.registerForm.get(controlName);
//     return Boolean(control?.invalid) &&
//       (this.isSubmitted || Boolean(control?.touched)|| Boolean(control?.dirty))
//   }
}
