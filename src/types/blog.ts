export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'pink' | 'gray';
  readTime: string;
  author?: string;
  date: string;
  image?: string;
  tags?: string[];
  content?: string;
  featured?: boolean;
}

export interface BlogCardConfig {
  showImage?: boolean;
  showTags?: boolean;
  showAuthor?: boolean;
  expandable?: boolean;
  compact?: boolean;
}