import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login';
import { Destach } from '../../models/destach-type.type'

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

  protected destach: Destach = 'NO'

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
            this.destach  = 'NO' 
          },
          error: (error) => {
            this.loadData = false
            this.getErrorCode(error.error.errorCode)
          }
        })
    } else {
      this.submitForm = true
    }
  }

  getErrorCode(errorCode: string): void {
    switch (errorCode) {
      case 'ERROR_EMAIL':
        this.destach = 'EMAIL'
        this.errorMessage = $localize`O Email fornecido é inválido. Por favor, informe um email válido.`
        break
    
      case 'ERROR_INVALID_EMAIL':
        this.destach = 'EMAIL'
        this.errorMessage = $localize`O Email fornecido não está registrado. Por favor, verifique ou crie uma conta.`
        break

      case 'ERROR_INVALID_PASSWORD':
        this.destach = 'PASSWORD'
        this.errorMessage = $localize`A senha fornecida está incorreta. Tente novamente.`  
        break

      default:
        this.destach = 'EMAIL_PASSWORD'
        this.errorMessage = $localize`Ocorreu um problema ao realizar o login. Tente novamente.`
        break
    }
  }
}