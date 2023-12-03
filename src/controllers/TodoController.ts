import { prisma } from '@/db';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export const getAllTodos = async () => await prisma.todo.findMany();

export const createTodo = async (data: FormData) => {
  'use server';

  const title = data.get('title')?.valueOf();
  const note = data.get('note')?.valueOf();

  if (typeof title !== 'string') return;
  if (typeof note !== 'string') return;

  const newTodo = await prisma.todo.create({
    data: {
      ...(title.length !== 0 && { title }),
      ...(note.length !== 0 && { note }),
      complete: false,
    },
  });

  if (newTodo) {
    redirect(`/?newId=${newTodo.id}`);
  }
};

export const toggleTodo = async (id: string, complete: boolean) => {
  'use server';

  await prisma.todo.update({ where: { id }, data: { complete } });
  revalidateTag('todo');
};

export const deleteTodo = async (id: string) => {
  'use server';

  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidateTag('todo');
};

export const updateTodo = async (id: string, title?: string, note?: string) => {
  'use server';

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      note,
    },
  });

  revalidateTag('todo');
};
