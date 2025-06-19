import { ChangeDetectionStrategy, Component, ElementRef, viewChildren } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class SkillsComponent {
  skills = portfolioData.skills;
  additionalSkills = portfolioData.additionalSkills;
  progressBars = viewChildren<ElementRef<HTMLDivElement>>('progressFill');

  ngAfterViewInit() {
    this.observeBarsIntersect();
  }

  observeBarsIntersect() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          (entry.target as any).style.width = width;
        }
      });
    }, { threshold: 0.1 });

    this.progressBars().forEach(bar => {
      observer.observe(bar.nativeElement);
    });
  }
}
