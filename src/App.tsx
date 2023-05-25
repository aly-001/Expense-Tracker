import ListGroup from './components/ListGroup';

function App(){
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Boston",
  ];
  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;