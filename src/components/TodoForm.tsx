'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import { useRef } from 'react';

type TodoFormType = {
  submit: (data: FormData) => void;
};

const TodoForm = ({ submit }: TodoFormType) => {
  // Hooks
  const router = useRouter();

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

  return (
    <form
      action={submit}
      onKeyDown={handleKeyDown}
      className='flex flex-col border rounded px-2 py-2'
    >
      <input
        type='text'
        name='title'
        className='bg-transparent px-2 py-1 outline-none text-xl font-semibold'
        placeholder='Title'
        onKeyDown={handleInputKeyDown}
        autoFocus
      />
      <textarea
        ref={textAreaRef}
        onKeyDown={handleTextAreaKeyDown}
        name='note'
        className='bg-transparent px-2 py-1 outline-none h-[100px]'
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
  );
};

export default TodoForm;
