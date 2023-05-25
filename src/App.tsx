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
  const handleSelectedItem = (item: string) => console.log(item);
  return <div><ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/></div>
}

export default App;