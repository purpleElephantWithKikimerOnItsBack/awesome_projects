class View {
  constructor() {
  	this._containers = Array.from(document.querySelectorAll('.projects-container'));
  	this._template = document.getElementById('project-template');
  }

  _build(project) {
  	this._template.content.querySelector('img').src = project.src;
  	this._template.content.querySelector('.project-title span').textContent = project.title;
  	this._template.content.querySelector('.project-description').textContent = project.description;

  	return document.importNode(this._template.content, true);
  }

  addProjects(containerId, projects) {
  	const container = this._containers.find((container) => {
  	  return container.id == containerId;
  	});

  	projects.forEach((project) => {
  	  container.appendChild(this._build(project));
  	});
  }

  clear() {
  	document.querySelectorAll('.projects-container').forEach((container) => {
  	  container.querySelectorAll('.project').forEach(project => container.removeChild(project));
  	});
  }
}

const view = new View();
