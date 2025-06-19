import { Component, input } from '@angular/core';
import { Project } from '../../models/project';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input.required<Project>();
  index = input<number>();
}
