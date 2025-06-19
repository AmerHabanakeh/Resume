export enum TimelineItemType {
  EDUCATION = 'education',
  EXPERIENCE = 'experience'
}

export enum IconType {
  IMAGE = 'image',
  ICON = 'icon'
}

export interface TimelineItem {
  id: number;
  type: TimelineItemType;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: {
    type: IconType;
    value: string; // path for image, class name for icon
    color?: string; // optional color for icons
  };
}