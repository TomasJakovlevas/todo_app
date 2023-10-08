import NavBar from '@/components/NavBar';
import TodoItemForm from '@/components/TodoForm';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';

const createTodo = async (data: FormData) => {
  'use server';

  const title = data.get('title')?.valueOf();
  const note = data.get('note')?.valueOf();

  if (typeof title !== 'string') return;
  if (typeof note !== 'string') return;

  await prisma.todo.create({
    data: { title, note, complete: false },
  });

  redirect('/');
};

const Page = () => {
  return (
    <>
      <NavBar title='New' />
      <section className='container max-w-6xl mx-auto px-3'>
        <TodoItemForm submit={createTodo} />
      </section>
    </>
  );
};

export default Page;
