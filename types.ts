import { FluidObject } from "gatsby-image";

export type Duration = {
  to: string;
  from: string;
};

export type Position = {
  from: string;
  position: string;
};

export type Positions = Position[];

export type Work = {
  company: string;
  location: string;
  duration: Duration;
  positions: Positions;
  description: string;
  img: string;
};

export type Education = {
  title: string;
  location: string;
  year: Duration;
  description?: string;
  course: string;
};

export interface IInstagramCard {
  id: string;
  likes: number;
  comments: number;
  localFile: {
    childImageSharp: { fluid: FluidObject };
  };
}
