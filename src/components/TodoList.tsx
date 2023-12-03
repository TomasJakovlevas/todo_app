'use client';

import { Todo } from '@prisma/client';

// Components
import TodoItem from './TodoItem';
import ToggleFilters from './Filters/ToggleFilters';

// Hooks
import { useFilteredTodos } from '@/hooks/useTodos';
import { useSearchParams } from 'next/navigation';

// Helpers
import { formatDateToISO } from '@/helpers/dateFunctions';
import { Fragment } from 'react';
import Button from './Button';
import Link from 'next/link';
import AddIcon from '@/icons/add/addIcon';

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

  list.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Vars
  const filters = ['active', 'completed'];
  const newId = searchParams.get('newId');

  // Functions
  const checkIfItsNew = (id: string) => newId === id;

  const seperateByDates = (arr: Array<Todo>) => {
    const dateMap: {
      date?: string;
      todos?: Todo[];
    }[] = [];

    arr.forEach((obj: Todo) => {
      const date = formatDateToISO(new Date(obj.createdAt));

      const foundIndex = dateMap.findIndex((el) => el.date === date);

      if (foundIndex === -1) {
        dateMap.push({
          date,
          todos: [obj],
        });
      } else {
        dateMap[foundIndex].todos?.push(obj);
      }
    });

    return dateMap;
  };

  const seperateByDatesList = seperateByDates(list);

  return (
    <>
      <div className='flex items-center justify-between mb-3'>
        <ToggleFilters filters={filters} />
        <Link
          href={'/new'}
          className='text-sm sm:text-base border px-2 py-1 border-primary dark:border-white hover:border-tertiary hover:text-tertiary dark:hover:border-quaternary_l1 dark:hover:text-quaternary_l1 flex items-center gap-2'
        >
          <AddIcon className='h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]' />
          Add New
        </Link>
      </div>
      <ul className='flex flex-col gap-2'>
        {seperateByDatesList.length ? (
          seperateByDatesList.map((obj) => (
            <Fragment key={obj.date}>
              <h2 className='text-lg sm:text-xl'>{obj.date}</h2>
              {obj.todos?.map((todo) => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                  isNew={checkIfItsNew(todo.id)}
                />
              ))}
            </Fragment>
          ))
        ) : (
          <div className='px-3 py-2 border border-tertiary dark:border-primary rounded text-center'>
            Empty
          </div>
        )}
      </ul>
    </>
  );
};

export default TodoList;
