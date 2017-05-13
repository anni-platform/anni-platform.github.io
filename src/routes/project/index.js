import React, { Component } from 'react';
import { withRouter } from 'react-router';
import constants from 'constants';
import ProjectManager from 'containers/ProjectManager';
import ProjectDetails from './components/Details';
import ProjectForm from './components/CreateForm';

class Project extends Component {
  render() {
    const { action } = this.props.params;
    switch(action) {
      case constants.project.newProject:
        return <ProjectForm {...this.props} />
      default:
        return <ProjectDetails {...this.props} />;
    }
  }
}

export default ProjectManager(withRouter(Project));
