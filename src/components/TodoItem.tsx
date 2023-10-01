'use client';

import { prisma } from '@/db';

type TodoItemProps = {
  id: string;
  title: string;
  note: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({
  id,
  title,
  note,
  complete,
  createdAt,
  updatedAt,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <li className='flex flex-col border border-quaternary px-2 py-1 gap-2'>
      <div className='flex flex-1 gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <input
            id={id}
            type='checkbox'
            className='cursor-pointer peer'
            defaultChecked={complete}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <label
            htmlFor={id}
            className='peer-checked:line-through peer-checked:text-slate-500 cursor-pointer text-xl '
          >
            {title}
          </label>
        </div>
        <div className='text-sm text-secondary'>
          Last update at:{' '}
          {updatedAt.toLocaleDateString('lt', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </div>
      </div>
      <p>{note}</p>
      <div className='flex justify-end'>
        <button
          className='border border-transparent hover:border-danger hover:text-danger px-2 py-1'
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
