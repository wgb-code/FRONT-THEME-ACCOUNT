import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login'

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

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }

  login() {
    if (this.formLogin.valid) {
      this.submitForm = false

      let userLogin = this.formLogin.value as Login

      this.EnterpriseServices.loginEnterprise(userLogin)
        .subscribe({
          next: (data) => {
            if (data.statuscode === 200) {
              
            }
          },
          error: (error) => {
            console.log("Erro no login", error)
          }
        })
    } else {
      this.submitForm = true
    }
  }
}