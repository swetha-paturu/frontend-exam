import { InstructionsComponent } from './instructions/instructions.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userDashboard', component: UserDashboardComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
