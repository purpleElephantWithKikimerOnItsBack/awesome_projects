class Model {
  constructor(collection) {
  	this._collection = collection;
  }

  filter(f) {
 	return this._collection.filter((project) => {
 	  if (f.year && f.year !== project.year) {
 	  	return false;
 	  }

 	  if (f.category && f.category !== project.category) {
 	  	return false;
 	  }

 	  return true;
 	});
  }
}

const model = new Model(collection);
