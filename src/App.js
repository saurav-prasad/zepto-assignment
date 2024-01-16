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
    <div className="mt-3">
      <h1 className="flex flex-row gap-2 justify-center items-center mb-10 text-2xl font-bold tracking-tight text-rose-500 sm:text-3xl w-full text-center">
        <img className='w-24 h-24 mt-2' src='https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.21.0/images/logo.svg' alt='logo' />
        Assignment
      </h1>
      <Search list={list} />
    </div>
  );
}

export default App;
