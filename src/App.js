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
    <div className="mt-10">
      <Search list={list} />
    </div>
  );
}

export default App;
