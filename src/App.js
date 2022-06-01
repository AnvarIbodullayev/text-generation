import { useState } from 'react';
import './App.css';
import data from './Data';

function App() {

  const [count, setCount] = useState(0);
  const  [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    if(count < 0) {
      number = 1;
    }
    if(count > 10) {
      number = 10;
    }
    setText(data.slice(0, number));
  }

  return (
    <div className="App">
      <h2 className='mt-4'>Text generation with lroem ipsum</h2>
      <div>
        <form className='form-inline mt-4' onSubmit={submitHandler}>
          <label className='amount badge text-bg-primary'>
            <p>paragraphs: </p>
            <span className="badge text-bg-secondary">{count}</span>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className='btn btn-danger'>generate</button>
        </form>
      </div>
      <article className='mt-4'>
        {
          text.map((item, index) => {
            return (
              <p key={index} className='text-monospace'>{item}</p>
            )
          })
        }
      </article>
    </div>
  );
}

export default App;
