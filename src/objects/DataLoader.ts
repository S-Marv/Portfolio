import AcademicProjectsJSON from '../assets/data/AcademicProjects.json'
import type { Project } from './data_structures/Project'


const AcademicProjects = AcademicProjectsJSON as Project[];

export {AcademicProjects}
