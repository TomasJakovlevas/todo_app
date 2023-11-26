'use client';

import { useState } from 'react';
import { Todo } from '@prisma/client';

// Components
import Button from './Button';
import Modal from './Modal/Modal';
import DeleteConfirmation from './Modal/DeleteConfirmation';
import OkIcon from '@/icons/ok/okIcon';
import CloseIcon from '@/icons/close/closeIcon';
import EditIcon from '@/icons/edit/editIcon';
import DeleteIcon from '@/icons/delete/deleteIcon';

type TodoItemProps = Todo & {
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
  const [showModal, setShowModal] = useState(false);

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
    <>
      <li
        className='flex flex-col rounded px-2 py-2 gap-2 bg-quaternary_l1 dark:bg-secondary
'
      >
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
                  className='bg-quaternary dark:bg-secondary_l1 rounded text-xl px-0 outline-none flex-1'
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
              className='bg-quaternary dark:bg-secondary_l1 rounded px-2 py-1 outline-none  '
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
                  action={() => setShowModal(true)}
                  variant='danger'
                  Icon={DeleteIcon}
                  type='button'
                />
                <div className='flex gap-2'>
                  <Button
                    label='Cancel'
                    action={toggleEditMode}
                    variant='success'
                    Icon={CloseIcon}
                    type='button'
                  />

                  <Button
                    label='Save'
                    variant='success'
                    Icon={OkIcon}
                    type='submit'
                  />
                </div>
              </>
            ) : (
              <Button
                label='Edit'
                action={toggleEditMode}
                variant='success'
                Icon={EditIcon}
                type='button'
              />
            )}
          </div>
        </form>
      </li>
      {showModal && (
        <Modal toggle={setShowModal}>
          <DeleteConfirmation
            deleteAction={() => deleteTodo(id)}
            cancelAction={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default TodoItem;
