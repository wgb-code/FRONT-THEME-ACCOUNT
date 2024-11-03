import { Component } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';

@Component({
  selector: 'Register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private registerService: EnterpriseService) {}

  validateData() {

  }

  // createEnterprise() {
  //   this.registerService.registerEnterprise()
  //     .subscribe({
  //       next: (data) => {
  //         next.forEach((res) => {
  //           console.log(res)
  //         })
  //       },

  //       error:(error) => console.log(error),
  //       complete: () => console.log('Complete.')
  //     })
  // }
}
