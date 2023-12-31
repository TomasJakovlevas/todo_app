import TodoList from '@/components/TodoList';
import NavBar from '@/components/NavBar';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

import {
  getAllTodos,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from '@/controllers/TodoController';

const Home = async () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto my-3 px-3'>
        <Suspense fallback={<div>loading...</div>}>
          <TodoList
            todos={await getAllTodos()}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
