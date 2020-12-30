import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { AltertyfyService } from 'src/app/services/altertyfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertifyService: AltertyfyService
  ) {}

  ngOnInit(): void {
    // this.registerationForm = new FormGroup(
    //   {
    //     userName: new FormControl('', Validators.required),
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     password: new FormControl('', [Validators.required, Validators.minLength(1), ]),
    //     confirmPassword: new FormControl('', Validators.required),
    //     mobile: new FormControl('', [Validators.required, Validators.minLength(10), ]),
    //   },
    //   this.passwordMatchingValidator );
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(1)]],
        confirmPassword: [null, Validators.required],
        mobile: [
          null,
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(10),
          ],
        ],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notmatched: true };
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Save Successfully');
    } else {
      this.alertifyService.warning('Please fill all the madantry details');
    }
  }

  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }
}
