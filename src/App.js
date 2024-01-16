import './App.css';
import Search from './components/search/Search';

function App() {

  // list items
  const list = [
    {
      name: 'Saurav',
      email: 'saurav@gmail.com',
    },
    {
      name: 'Nick',
      email: 'nick@gmail.com',
    },
    {
      name: 'Rahul',
      email: 'rahul@gmail.com',
    },
    {
      name: 'Piyush',
      email: 'piyush@gmail.com',
    },
    {
      name: 'Sahil',
      email: 'sahil@gmail.com',
    },
  ]

  return (
    <div className="mt-7">
      <h1 className="mb-10 text-xl font-semibold tracking-tight text-gray-800 sm:text-3xl w-full text-center">
        Zepto Assignment
      </h1>
      <Search list={list} />
    </div>
  );
}

export default App;
