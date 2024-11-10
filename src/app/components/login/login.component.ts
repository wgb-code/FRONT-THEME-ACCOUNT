import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login'
import { error } from 'console';

@Component({
  selector: 'Login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  private EnterpriseServices = inject(EnterpriseService)
  private FormBuilderService = inject(FormBuilder)

  protected formLogin = this.FormBuilderService.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
  })

  showPassword: boolean = false
  submitForm: boolean = false
  loadData: boolean = false

  errorMessage: string = ''

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }

  login() {
    if (this.formLogin.valid) {
      this.submitForm = false
      this.loadData = true

      let userLogin = this.formLogin.value as Login

      this.EnterpriseServices.loginEnterprise(userLogin)
        .subscribe({
          next: (data) => {
            this.loadData = false

            if (data.statuscode === 200) {
            }
          },
          error: (error) => {
            this.loadData = false

            let getStatuscode = error.error.statuscode
            if (getStatuscode === 404) {
              console.log(error.error)
            }
          }
        })
    } else {
      this.submitForm = true
    }
  }
}