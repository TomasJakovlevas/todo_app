'use client';

import { prisma } from '@/db';
import { useState } from 'react';

type TodoItemProps = {
  id: string;
  title: string;
  note: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, title: string, note?: string) => void;
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
  updateTodo,
}: TodoItemProps) => {
  // Hooks
  // -- state
  const [editMode, setEditMode] = useState(false);

  // Functions
  const handleSubmit = async (data: FormData) => {
    const title = data.get('title')?.valueOf();

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Invalid title');
    }

    updateTodo(id, title);

    setEditMode(false);
  };

  return (
    <li className='flex flex-col border border-quaternary px-2 py-1 gap-2'>
      <form action={handleSubmit}>
        <div className='flex flex-1 gap-2 items-center justify-between'>
          <div className='flex gap-2 items-center'>
            {editMode ? (
              <input
                className='bg-transparent text-xl px-2 outline-none border-b ml-3'
                type='text'
                defaultValue={title}
                name='title'
              />
            ) : (
              <>
                <input
                  id={id}
                  type='checkbox'
                  className='cursor-pointer peer'
                  defaultChecked={complete}
                  onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <label
                  htmlFor={id}
                  className='peer-checked:line-through peer-checked:text-slate-500 cursor-pointer text-xl'
                >
                  {title}
                </label>
              </>
            )}
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
        <div className='flex justify-end gap-2'>
          {editMode ? (
            <>
              <button
                className='border border-transparent hover:border-danger hover:text-danger px-2 py-1'
                onClick={() => deleteTodo(id)}
                type='button'
              >
                Delete
              </button>
              <button
                className='border border-transparent hover:border-tertiary hover:text-tertiary px-2 py-1'
                type='submit'
              >
                Save
              </button>
            </>
          ) : (
            <button
              className='border border-transparent hover:border-tertiary hover:text-tertiary px-2 py-1'
              onClick={() => setEditMode(true)}
              type='button'
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
