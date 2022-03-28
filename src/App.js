import { useState } from 'react'
import Content from './Content';
import English from './English'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <English />}
    </div>
  );
}

export default App;
