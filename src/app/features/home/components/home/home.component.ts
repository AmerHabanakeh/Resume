import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { SkillsComponent } from "../skills/skills.component";
import { FeaturedProjectsComponent } from "../featured-projects/featured-projects.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillsComponent, FeaturedProjectsComponent, TimelineComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
