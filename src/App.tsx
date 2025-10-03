import './App.css'

function App() {
  interface User {
    name: string;
    age: number;
  }
  const u: User = {
    name: 'John',
    age: 30,
  }
  return (
      <div className="App">
        <h1>{u.name}</h1>
        <h2>{u.age}</h2>
      </div>
  )
}

export default App