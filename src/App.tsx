import './App.css'
import Loop from './handson/Loop.tsx'
import handleClick from './handson/Handle.tsx'
import Handle from "./handson/Handle.tsx";

function App() {
  interface User {
    name: string
    age: number
  }

  const u: User = {
    name: 'John',
    age: 30,
  }

  // アロー関数での記法
  // 「小さい処理 → アロー関数」「大きいコンポーネントやユーティリティ → function」で使うことが多い
  const HelloWorld = () => {
    const title: string = 'Hello World'
    return (
        <div>
          <h1>{title}</h1>
        </div>
    );
  }

  return (
      <div className="App">
        <h1>{u.name}</h1>
        <h2>{u.age}</h2>
        <HelloWorld />
        <Loop />
        <Handle />
      </div>
  )
}

export default App