import NavBar from '@/components/NavBar';
import TodoItemForm from '@/components/TodoForm';

import { createTodo } from '@/controllers/TodoController';

const Page = () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto px-3'>
        <TodoItemForm submit={createTodo} />
      </section>
    </>
  );
};

export default Page;
