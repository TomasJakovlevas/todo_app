import NavBar from '@/components/NavBar';
import TodoItem from '@/components/TodoItem';
import { prisma } from '@/db';
import { revalidateTag } from 'next/cache';

const getAllTodos = () => {
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

const Home = async () => {
  const todos = await getAllTodos();

  return (
    <>
      <NavBar title='Todos' />
      <section className='container max-w-6xl mx-auto'>
        <ul className='pl-4 flex flex-col gap-2'>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
