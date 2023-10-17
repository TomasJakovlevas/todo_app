'use client';

import { useState } from 'react';
import Button from './Button';

type TodoItemProps = {
  id: string;
  title: string | null;
  note: string | null;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, title?: string, note?: string) => void;
};

const TodoItem = ({
  id,
  title,
  note,
  complete,
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
    const note = data.get('note')?.valueOf();

    if (typeof title !== 'string') return;
    if (typeof note !== 'string') return;

    updateTodo(id, title, note);

    setEditMode(false);
  };

  const toggleEditMode = () => setEditMode((prev) => !prev);

  return (
    <li className='flex flex-col border-quaternary rounded px-2 py-2 gap-2 bg-secondary'>
      <form action={handleSubmit} className='flex flex-col gap-2	'>
        <div className='flex flex-1 gap-2 items-center justify-between'>
          <div className='flex gap-2 items-center flex-1'>
            <input
              id={id}
              type='checkbox'
              className='cursor-pointer peer'
              defaultChecked={complete}
              onChange={(e) => toggleTodo(id, e.target.checked)}
              disabled={editMode}
            />
            {editMode ? (
              <input
                className='bg-secondary_l1 rounded text-xl px-0 outline-none flex-1'
                type='text'
                defaultValue={title || ''}
                name='title'
              />
            ) : (
              <label
                htmlFor={id}
                className='peer-checked:line-through peer-checked:text-slate-500 cursor-pointer text-xl border-b border-transparent'
              >
                {title && title}
              </label>
            )}
          </div>
          <div className='text-sm text-secondary_l1'>
            Last update at:{' '}
            {updatedAt.toLocaleDateString('lt', {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
        </div>

        {editMode ? (
          <textarea
            name='note'
            defaultValue={note || ''}
            className='bg-secondary_l1 rounded px-2 py-1 outline-none  '
          />
        ) : (
          note && <p> {note} </p>
        )}

        <div
          className={`flex gap-2 ${
            editMode ? 'justify-between' : 'justify-end'
          }`}
        >
          {editMode ? (
            <>
              <Button
                label='Delete'
                action={() => deleteTodo(id)}
                variant='danger'
                type='button'
              />
              <div className='flex gap-2'>
                <Button
                  label='Cancel'
                  action={toggleEditMode}
                  variant='success'
                  type='button'
                />

                <Button label='Save' variant='success' type='submit' />
              </div>
            </>
          ) : (
            <Button
              label='Edit'
              action={toggleEditMode}
              variant='success'
              type='button'
            />
          )}
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
