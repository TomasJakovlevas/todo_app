'use client';

import { useState } from 'react';
import { Todo } from '@prisma/client';

// Components
import TodoItem from './TodoItem';
import ToggleFilters from './Filters/ToggleFilters';

type TodoListProps = {
  todos: Array<Todo>;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, title?: string, note?: string) => void;
};

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
}: TodoListProps) => {
  const filters = ['active', 'completed'];

  const [list, setList] = useState([]);

  return (
    <>
      <div className='mb-3 '>
        <ToggleFilters filters={filters} />
      </div>
      <ul className='flex flex-col gap-2'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
