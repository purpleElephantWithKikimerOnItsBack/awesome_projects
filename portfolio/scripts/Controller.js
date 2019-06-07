class Controller {
  constructor(view, model) {
  	this._view = view;
  	this._model = model;

  	this._viewAll();
  	this._setRadioListener();
  }

  _setRadioListener() {
    $('.categories label').click(event => event.stopPropagation());
    $('.categories').first().click(event =>this._listenRadio(event));
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

  	document.querySelectorAll('.year-header').forEach((container) => {
  	  this._view.addProjects(container.id, this._model.filter({ 'year': +container.id }));
  	});
  }

  _viewCategory(category) {
  	this._view.clear();

  	document.querySelectorAll('.year-header').forEach((container) => {
  	  this._view.addProjects(container.id, this._model.filter({ 'category': category, 'year': +container.id }));
  	});
  }
}

const controller = new Controller(view, model);
