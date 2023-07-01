export interface Template {
  id?: string;
  title: string;
  url: string;
  file: File;
  text: string;
  textSize: number;
  textColor: string;
  createdAt?: Date;
  updatedAt?: Date;
}
