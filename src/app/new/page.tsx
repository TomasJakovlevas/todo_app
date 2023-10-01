import NavBar from '@/components/NavBar';
import { prisma } from '@/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const createTodo = async (data: FormData) => {
  'use server';

  const title = data.get('title')?.valueOf();

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid title');
  }

  await prisma.todo.create({ data: { title, note: '', complete: false } });
  redirect('/');
};

const Page = () => {
  return (
    <>
      <NavBar title='New' />
      <form action={createTodo} className='flex gap-2 flex-col'>
        <input
          type='text'
          name='title'
          className='bg-transparent border rounded px-2 py-1 outline-none'
        />
        <div className='flex gap-1 justify-end'>
          <Link
            href={'..'}
            className='border px-2 py-1 rounded hover:bg-slate-700'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='border px-2 py-1 rounded hover:bg-slate-700'
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
