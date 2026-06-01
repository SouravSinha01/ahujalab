import teamData from '../data/team.json';
import aboutPiData from '../data/about-pi.json';
import publicationsData from '../data/publications.json';

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  image: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
    scholar: string;
  };
}

export interface Award {
  year: string;
  title: string;
  org: string;
  desc?: string;
  image?: string;
}

export interface Publication {
  year: string;
  title: string;
  journal: string;
  authors: string;
  doi: string;
  tag: string;
}

export interface TeamData {
  graduates: TeamMember[];
  alumni: TeamMember[];
}

export interface AboutPiData {
  roles: string[];
  awardsWithImages: Award[];
  awardsWithoutImages: Award[];
}

export interface PublicationsData {
  publications: Publication[];
}

// Data loaders
export const loadTeamData = (): TeamData => teamData;
export const loadAboutPiData = (): AboutPiData => aboutPiData;
export const loadPublicationsData = (): PublicationsData => publicationsData;

// Convenience exports
export const getTeamMembers = () => teamData.graduates;
export const getTeamAlumni = () => teamData.alumni;
export const getPiRoles = () => aboutPiData.roles;
export const getPiAwardsWithImages = () => aboutPiData.awardsWithImages;
export const getPiAwardsWithoutImages = () => aboutPiData.awardsWithoutImages;
export const getPublications = () => publicationsData.publications;

// Utility functions
export const getAllAwards = (): Award[] => [
  ...aboutPiData.awardsWithImages,
  ...aboutPiData.awardsWithoutImages
];

export const getPublicationsByYear = (year: string): Publication[] =>
  publicationsData.publications.filter(pub => pub.year === year);

export const getPublicationsByTag = (tag: string): Publication[] =>
  publicationsData.publications.filter(pub => pub.tag === tag);

export const getUniquePublicationTags = (): string[] =>
  Array.from(new Set(publicationsData.publications.map(pub => pub.tag)));

export const getUniquePublicationYears = (): string[] =>
  Array.from(new Set(publicationsData.publications.map(pub => pub.year))).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
