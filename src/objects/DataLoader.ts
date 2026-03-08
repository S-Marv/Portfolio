import AcademicProjectsJSON from '../assets/projects/AcademicProjects.json'
import type { Project } from './Project'
import { parseProject } from './ProjectParser'

export class DataLoader {
  public getAcademicProjects() {
    return AcademicProjectsJSON as Project[]
  }
}
