import React from 'react';

// export function Todo(props) {
//   const { todo } = props;

//   if (todo.isDone) {
//     return <strike>{todo.text}</strike>;
//   } else {
//     return <span>{todo.text}</span>;
//   }

// }
// export function TodoBold(props) {
//   const { todo } = props;

//   if (todo.isBold) {
//     return <b>{todo.text}</b>;
//   } else {
//     return <span>{todo.text}</span>;
//   }
// }

export function TodoCase(props) {
  console.log('case', props);
  
  const { todo } = props;
  if (todo.isBold) {
    return <b>{todo.text}</b>;
  } else if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, boldTodo } = props;
  console.log('todos');

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('submit', event);
    console.log(event.target.querySelector('input').value);
    const input = event.target;
    const text = event.target.querySelector('input').value;
    const isLongEnough = text.length > 0;
    if (isLongEnough) {
      event.target.querySelector('input').value = '';
      addTodo(text);
    } else {
      alert('Input correct value')
    }
  };

  const toggleClick = id => event => toggleTodo(id);
  const boldClick = id => event => boldTodo(id);

  return (
    <div className='todo'>
      <form onSubmit={onSubmit} >
        <input type='text'
          className='todo__entry'
          placeholder='Add todo'
        />
        <input className='todo__button' type="submit" value="Add" />
      </form>
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')}
            className='todo__item'
          >
            {/* <p className='TOdo_class' onClick={toggleClick(t.get('id'))} ><Todo todo={t.toJS()} /></p>
            <p className='bold_class' onClick={boldClick(t.get('id'))}><TodoBold todo={t.toJS()} /></p> */}
            <TodoCase todo={t.toJS()} />
            <button  className='todo__button'  onClick={toggleClick(t.get('id'))}> Done</button>
            <button  className='todo__button'  onClick={boldClick(t.get('id'))}>Bold</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

