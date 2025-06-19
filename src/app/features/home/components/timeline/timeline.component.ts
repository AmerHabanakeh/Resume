import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio-data';
import { IconType, TimelineItem, TimelineItemType } from '../../../../shared/models/timeline';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class TimelineComponent {
  items:TimelineItem[] = portfolioData.timeLineItems
  TimelineItemType = TimelineItemType;
  IconType = IconType;
}
