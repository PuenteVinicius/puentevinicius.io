import '../index'
import '../sass/main'
import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('div');

  return element;
}

document.body.appendChild(component());