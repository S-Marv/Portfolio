import AcademicProjectsJSON from '../assets/data/AcademicProjects.json'
import { Project } from './data_structures/Project'


const AcademicProjects = AcademicProjectsJSON.map(Project.parse);

export {AcademicProjects}
