import { prisma } from '@/db';
import { revalidateTag } from 'next/cache';

export const getAllTodos = async () => prisma.todo.findMany();

export const toggleTodo = async (id: string, complete: boolean) => {
  'use server';

  await prisma.todo.update({ where: { id }, data: { complete } });
};

export const deleteTodo = async (id: string) => {
  'use server';

  await prisma.todo.delete({
    where: {
      id: id,
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
