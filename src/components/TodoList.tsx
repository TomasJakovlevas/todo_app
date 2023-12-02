'use client';

import { Todo } from '@prisma/client';

// Components
import TodoItem from './TodoItem';
import ToggleFilters from './Filters/ToggleFilters';

// Hooks
import { useFilteredTodos } from '@/hooks/useTodos';
import { useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const list = useFilteredTodos(todos);

  // Vars
  const filters = ['active', 'completed'];
  const newId = searchParams.get('newId');

  // Functions
  const checkIfItsNew = (id: string) => newId === id;

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
            isNew={checkIfItsNew(todo.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
