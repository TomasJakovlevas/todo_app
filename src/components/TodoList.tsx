'use client';

import { useEffect, useState } from 'react';
import { Todo } from '@prisma/client';

// Components
import TodoItem from './TodoItem';
import ToggleFilters from './Filters/ToggleFilters';
import { useSearchParams } from 'next/navigation';
import { useFilteredTodos } from '@/hooks/useTodos';

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
  // Hooks
  const list = useFilteredTodos(todos);

  // Vars
  const filters = ['active', 'completed'];

  return (
    <>
      <div className='mb-3 '>
        <ToggleFilters filters={filters} />
      </div>
      <ul className='flex flex-col gap-2'>
        {list.map((todo) => (
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
