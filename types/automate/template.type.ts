export interface Template {
  id?: string;
  title?: string;
  description?: string;
  content?: TemplateItem[];
  hashtags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TemplateItem {
  id?: string;
  type: "image" | "video" | "template";
  url: string;
  file: File;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}
