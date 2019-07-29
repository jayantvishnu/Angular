import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';


const routes: Routes = [
  {path:'',component:WelcomeComponentComponent},
  {path:'aboutme',component:AboutMeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'education',component:EducationComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AboutMeComponent,SkillsComponent,ExperienceComponent,EducationComponent,ContactComponent]
