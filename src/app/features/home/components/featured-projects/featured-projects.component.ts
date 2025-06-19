import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Project } from '../../../../shared/models/project';
import { portfolioData } from '../../../../core/data/portfolio-data';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';
@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    ProjectCardComponent,
    AsyncPipe
  ],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class FeaturedProjectsComponent {
  projects:Project[] = portfolioData.projects;
  breakpointObserver = inject(BreakpointObserver)
  isMobile$ = this.breakpointObserver.observe('(min-width: 768px)');
  getSuitableAnimation(index:number){
    if(index === 0 || index % 3 === 0){
      return 'slideInLeft';
    }
    if((index-1)%3 === 0){
      return 'bounceIn'
    }
    if((index-2)%3===0){

      return 'slideInRight'  
    }
    return ''
  }
}
