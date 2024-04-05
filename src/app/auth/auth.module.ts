import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthApiService } from './api/auth-api.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthFacadeService } from './services/auth-facade.service';
import { SharedModule } from '../../shared/shared.module';
import { MatButton } from '@angular/material/button';
import { CoreModule } from '../../core/core.module';
import { TokenService } from './services/token.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule,
    MatButton,
  ],
  providers: [AuthService, AuthApiService, AuthFacadeService, TokenService],
})
export class AuthModule {}
