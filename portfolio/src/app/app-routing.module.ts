import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'education', component: EducationComponent},
  {path:'skills', component: SkillsComponent},
  {path:'project', component: ProjectComponent},
  {path:'contact', component: ContactComponent},





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
