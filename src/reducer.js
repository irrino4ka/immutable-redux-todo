import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if(t.get('id') === action.payload) {
          console.log(t, 'toggle');
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    case 'BOLD_TODO':
    return todos.map(t => {
      if(t.get('id') === action.payload) {
        console.log(t, 'bold')
        return t.update('isBold', isBold => !isBold);
      } else {
        return t;
      }
    });
    default:
      return todos;
  }
}

