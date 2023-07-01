export interface Content {
  id?: string;
  title?: string;
  description?: string;
  content?: ContentItem[];
  hashtags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ContentItem {
  id?: string;
  type: "image" | "video" | "template";
  url: string;
  file: File;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}
