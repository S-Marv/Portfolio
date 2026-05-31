import AcademicProjectsJSON from '../assets/data/AcademicProjects.json'
import PersonalProjectsJSON from '../assets/data/PersonalProjects.json'

import { Project } from './data_structures/Project'


const AcademicProjects = AcademicProjectsJSON.map(Project.parse);
const PersonalProjects = PersonalProjectsJSON.map(Project.parse);

export {AcademicProjects, PersonalProjects}
