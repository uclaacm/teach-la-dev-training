import { useState } from 'react';

function App() {
  // First, our state variables to hold our current username
  // and current response information.
  const [name, setName] = useState('');
  const [resp, setResp] = useState('');

  return (
    <div>
      <h1>Simple backend demo</h1>

      <h2>Working with users</h2>
      <input
        type='text'
        placeholder='Enter a name...'
        onChange={e => setName(e.target.value)}
      />
      
      <br />

      <input
        type="button"
        value="Register a user"
        onClick={() => {
          fetch('http://localhost:8081/user', {
            method: 'POST',
            body: JSON.stringify({
              name,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            mode: 'cors',
          })
          .then(resp => resp.json())
          .then(json => setResp(json))
          .catch(console.err);
        }}
      />
      
      <br />

      <input
        type="button"
        value="Get a user"
        onClick={() => {
          fetch(`http://localhost:8081/user?name=${name}`, {
            method: 'GET',
            mode: 'cors',
          })
          .then(resp => resp.json())
          .then(json => setResp(json))
          .catch(console.err);
        }}
      />

      <p>
        Received response: { JSON.stringify(resp?.data) }
      </p>
    </div>
  );
}

export default App;
