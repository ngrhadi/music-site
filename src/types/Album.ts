export interface Album {
  data?: DataEntity[] | null;
}
export interface DataEntity {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}
export interface Attributes {
  genreNames?: string[] | null;
  name: string;
  artwork: Artwork;
  url: string;
}
export interface Artwork {
  width: number;
  url: string;
  height: number;
  textColor3: string;
  textColor2: string;
  textColor4: string;
  textColor1: string;
  bgColor: string;
  hasP3: boolean;
}
export interface Relationships {
  albums: Albums;
}
export interface Albums {
  data?: DataEntity1[] | null;
}
export interface DataEntity1 {
  id: string;
  type: string;
}
