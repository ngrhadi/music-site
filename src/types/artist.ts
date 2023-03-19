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

export interface Attributes {
  genreNames: string[];
  name: string;
  artwork: Artwork;
  url: string;
}

export interface Datum2 {
  id: string;
  type: string;
}

export interface Albums {
  data: Datum2[];
}

export interface Relationships {
  albums: Albums;
}

export interface Datum {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface ArtistTypes {
  data: Datum[];
}
