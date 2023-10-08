import TodoList from '@/components/TodoList';
import NavBar from '@/components/NavBar';
import { Suspense } from 'react';

const Home = () => {
  return (
    <>
      <NavBar title='Todos' />
      <section className='container max-w-6xl mx-auto px-3'>
        <Suspense fallback={<div>loading...</div>}>
          <TodoList />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
