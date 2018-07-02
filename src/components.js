import React from 'react';

export function Todo(props) {
  const { todo } = props;

  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }

}
export function TodoBold(props) {
  const { todo } = props;

  if (todo.isBold) {
    return <b>{todo.text}</b>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, boldTodo } = props;
  console.log('todos');

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);
  const boldClick = id => event => boldTodo(id);

  return (
    <div className='todo'>
      <input type='text'
        className='todo__entry'
        placeholder='Add todo'
        onKeyDown={onSubmit} />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')}
            className='todo__item'
          >
            <p className='TOdo_class' onClick={toggleClick(t.get('id'))} ><Todo todo={t.toJS()} /></p>
            <p className='bold_class' onClick={boldClick(t.get('id'))}><TodoBold todo={t.toJS()} /></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

