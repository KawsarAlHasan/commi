export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  start: string;
  end: string;
  location: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  start: string;
  end: string;
  location: string;
}

export interface Certificate {
  id: string;
  cert: string;
  institute: string;
  date: string;
}

export interface Language {
  id: string;
  lang: string;
  level: string;
}

export interface Reference {
  id: string;
  name: string;
  jobTitle: string;
  org: string;
  email: string;
  phone: string;
}

export interface CVData {
  // Personal
  firstName: string;
  lastName: string;
  professionalTitle: string;
  dob: string;
  location: string;
  zipcode: string;
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
  photo: string;
  // Profile & Preferences
  role: string;
  companyType: string;
  niveau: string;
  style: string;
  cuisineConcept: string;
  salary: string;
  availability: string;
  contractType: string;
  hoursPerWeek: string;
  // Lists
  experiences: Experience[];
  educations: Education[];
  certificates: Certificate[];
  languages: Language[];
  references: Reference[];
}

export const defaultCVData: CVData = {
  firstName: "",
  lastName: "",
  professionalTitle: "",
  dob: "",
  location: "",
  zipcode: "",
  email: "",
  phone: "",
  linkedin: "",
  instagram: "",
  photo: "",
  role: "",
  companyType: "",
  niveau: "",
  style: "",
  cuisineConcept: "",
  salary: "",
  availability: "",
  contractType: "",
  hoursPerWeek: "",
  experiences: [],
  educations: [],
  certificates: [],
  languages: [],
  references: [],
};
