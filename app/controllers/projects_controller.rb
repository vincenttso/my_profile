class ProjectsController < ApplicationController
  before_action :set_project, only: %i[show]

  def index
    @projects = Project.all
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :description)
  end
end
