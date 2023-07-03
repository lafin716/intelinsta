export interface Textable {
  id?: string;
  title: string;
  url: string;
  text: string;
  textSize: number;
  textColor: string;
  createdAt?: Date;
  updatedAt?: Date;
}
