'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import { useRef, useState } from 'react';

import Spinner from './Spinner';
import Modal from './Modal/Modal';

type TodoFormType = {
  submit: (data: FormData) => void;
};

const TodoForm = ({ submit }: TodoFormType) => {
  // Hooks
  const router = useRouter();

  // -- state
  const [loading, setLoading] = useState(false);

  // -- refs
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleTextAreaKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;

    e.key === 'Enter' && (target.value += '\n');
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;

    const form = target.form;

    if (e.key === 'Enter') {
      if (!textAreaRef.current) return;

      textAreaRef.current.focus();
    }
  };

  const handleSubmit = (data: FormData) => {
    setLoading(true);
    submit(data);
  };

  return (
    <>
      <form
        action={handleSubmit}
        onKeyDown={handleKeyDown}
        className='flex flex-col border border-primary dark:border-white rounded px-2 py-2'
      >
        <input
          type='text'
          name='title'
          className='bg-transparent px-2 py-1 outline-none text-lg sm:text-xl font-semibold dark:placeholder-quaternary_l1 placeholder-primary'
          placeholder='Title'
          onKeyDown={handleInputKeyDown}
          autoFocus
        />
        <textarea
          ref={textAreaRef}
          onKeyDown={handleTextAreaKeyDown}
          name='note'
          className='bg-transparent px-2 py-1 outline-none h-[100px] dark:placeholder-quaternary_l1 placeholder-primary text-sm sm:text-base'
          placeholder='Details...'
        />
        <div className='flex gap-2 justify-end'>
          <Button
            label='Cancel'
            type='button'
            onClick={() => router.push('..')}
          />
          <Button label='Create' type='submit' />
        </div>
      </form>
      {loading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
    </>
  );
};

export default TodoForm;
