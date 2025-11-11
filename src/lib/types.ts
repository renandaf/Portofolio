import type { StaticImageData } from 'next/image';

export type TechDetailsData = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  place: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  list: string[];
  url: string;
  youtube: string;
  github: string;
};

export type ToolsDetails = {
  id:number;
  title: string;
  video: string;
  tools: string;
  reference: string;
  update: string;
};
