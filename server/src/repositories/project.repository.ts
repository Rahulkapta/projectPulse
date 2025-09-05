import { IProject, Project } from "../models/project.model";

export class ProjectRepository {
  async createproject(userData: Partial<IProject>) {
    return Project.create(userData);
  }

  async findByName(name: Partial<IProject>) {
    return Project.findOne({ name });
  }
  async deleteById(_id: string) {
    return Project.deleteOne({ _id });
  }

  async getAllProjects() {
    return Project.find({}).sort({ createdAt: -1 }).lean().exec();
  }
  async getProjectsByAssignedPerson(userId: string) {
    return Project.find({
      assignedPeople: userId,
    })
      .sort({ createdAt: -1 })
      .lean()
      .exec();
  }
  async findById(_id: string) {
    return Project.findById({ _id });
  }

  async updateById(_id: string, updateData: any) {
    return Project.findByIdAndUpdate(_id, { $set: updateData }, { new: true });
  }
  async updateTaskCount(id: string, update: any) {
    return Project.findByIdAndUpdate(id, update, { new: true }).exec();
  }
}
