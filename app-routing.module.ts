import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'about', component:AboutComponent, data: { animation: 'isRight' } },
                        {path:'skills', component:SkillsComponent, data: { animation: 'isleft' } },
                        {path:'portfolio', component:PortfolioComponent, data: { animation: 'isright' } },
                        {path:'contact', component:ContactComponent, data: { animation: 'isleft' } },
                        {path: '', component:AboutComponent, data: { animation: "isRight" } },
                        {path:'**', component:PagenotfoundComponent}];  //Wildcard to match any 
                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }