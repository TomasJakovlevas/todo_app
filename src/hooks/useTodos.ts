import { Todo } from '@prisma/client';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type UseFilteredTodosProps = Array<Todo>;

export const useFilteredTodos = (todos: UseFilteredTodosProps) => {
  const searchParams = useSearchParams();
  const [list, setList] = useState(todos);

  const filterValue = searchParams.get('filter');

  useEffect(() => {
    setList(() => {
      switch (filterValue) {
        case 'active':
          return todos.filter((todo) => !todo.complete);
        case 'completed':
          return todos.filter((todo) => todo.complete);
        default:
          return todos;
      }
    });
  }, [filterValue, todos]);

  return list;
};
