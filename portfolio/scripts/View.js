class View {
  constructor() {
  	this._template = document.getElementById('project-template');

    this._templateImage = this._template.content.getElementById('project-template-image');
    this._templateTitle = this._template.content.getElementById('project-template-title');
    this._templateDescription = this._template.content.getElementById('project-template-description');
  }

  _build(project) {
  	this._templateImage.src = project.src;
  	this._templateTitle.textContent = project.title;
  	this._templateDescription.textContent = project.description;

  	return document.importNode(this._template.content, true);
  }

  addProjects(containerId, projects) {
    const container = document.createElement('div');
    container.classList.toggle('projects-container');

  	projects.forEach((project) => {
  	  container.appendChild(this._build(project));
  	});

    $(`#${containerId}`).after(container);
  }

  clear() {
    $('.projects-container').remove();
  }
}

const view = new View();
