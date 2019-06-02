class Controller {
  constructor(view, model) {
  	this._view = view;
  	this._model = model;

  	this._viewAll();
  	this._setRadioListeners();
  }

  _setRadioListeners() {
  	document.querySelectorAll('input[name=radio-categories]')
  	  .forEach((radio) => {
  	  	radio.addEventListener('change', event => this._listenRadio(event))
  	  });
  }

  _listenRadio(event) {
  	const category = event.target.id;
  	if (category === 'all-projects') {
  	  this._viewAll();
  	} else {
  	  this._viewCategory(category);
  	}
  }

  _viewAll() {
  	this._view.clear();

  	document.querySelectorAll('.projects-container').forEach((container) => {
  	  this._view.addProjects(container.id, this._model.filter({ 'year': +container.id }));
  	});
  }

  _viewCategory(category) {
  	this._view.clear();

  	document.querySelectorAll('.projects-container').forEach((container) => {
  	  this._view.addProjects(container.id, this._model.filter({ 'category': category, 'year': +container.id }));
  	});
  }
}

const controller = new Controller(view, model);
