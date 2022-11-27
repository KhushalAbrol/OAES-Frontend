import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'exam', component: ExamComponent },
  { path: 'coordinator', component: CoordinatorComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
