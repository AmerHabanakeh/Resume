import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { techStackItem } from '../../../../shared/models/tech-stack';
import { portfolioData } from '../../../../core/data/portfolio-data';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  particlesContainer = viewChild<ElementRef<HTMLDivElement>>('particles');
  techStackItems:techStackItem[] = [...portfolioData.techStackItems,...portfolioData.techStackItems];

  ngAfterViewInit() {
    this.insertParticles();
  }

  insertParticles(){
    const particlesContainer = this.particlesContainer()?.nativeElement;
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random size between 50px and 200px
      const size = Math.random() * 150 + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;

      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;

      particlesContainer?.appendChild(particle);
    }

  }
}
