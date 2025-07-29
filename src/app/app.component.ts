import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { VisitorService } from './features/home/services/visitor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  wowService = inject(NgwWowService);
  constructor() {
    this.wowService.init(); 
  }

  ngOnInit() {
    const userData = this.collectVisitorData();
    console.log('Visitor Data:', userData);
  }

  collectVisitorData() {
    const browserInfo = navigator.userAgent;
    const language = navigator.language;
    const platform = navigator.platform;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
      browserInfo,
      language,
      platform,
      screenResolution,
      timezone,
    };
  }

}
