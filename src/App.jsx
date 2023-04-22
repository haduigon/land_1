import './App.css';
import { useRef } from 'react'
import { useState} from 'react'

function App() {

  const button = document.getElementById('12')
  const button13 = document.getElementById('13')

  
  const [value, setValue] = useState('')
  const myRef = useRef();
  const myRef2 = useRef();

  // console.log(value)

  const inputHandler = (event) => {
    event.preventDefault()
    console.log(button.value)
    console.log(myRef.current.value)
    console.log(myRef2.current.value)
    console.log(button13.value)
    console.log(value + '1')
    button.value = ''
    button13.value = ''
  }

  return (
    <div className="App">
      <header className="App-header">
    <h2>Hello world</h2>
    <form >
      <input 
        type="text" 
        placeholder='name'
        ref={myRef} 
        id='12'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input 
        type="text"
        placeholder='email'
        ref={myRef2}
        id='13'
      />
      <button type='submit' onClick={inputHandler}>
        Send cridentials
      </button>
    </form>
      </header>
    </div>
  );
}

export default App;
