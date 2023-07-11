import Header from '@/components/Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TodosLogic />
    </>
  );
};

export default TodoApp;
