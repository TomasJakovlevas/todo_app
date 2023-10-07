import { prisma } from '@/db';
import { revalidateTag } from 'next/cache';
import React from 'react';
import TodoItem from './TodoItem';

const getAllTodos = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  return prisma.todo.findMany();
};

const toggleTodo = async (id: string, complete: boolean) => {
  'use server';

  await prisma.todo.update({ where: { id }, data: { complete } });
};

const deleteTodo = async (id: string) => {
  'use server';

  await prisma.todo.delete({
    where: {
      id: id,
    },
  });

  revalidateTag('todo');
};

const updateTodo = async (id: string, title: string, note?: string) => {
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

const TodoList = async () => {
  const todos = await getAllTodos();

  return (
    <ul className='pl-4 flex flex-col gap-2'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
