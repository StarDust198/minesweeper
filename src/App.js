// import { useState } from 'react';

// import { Field } from './models/Field';
import { FieldComponent, Counter, Emoticon, Timer } from './components';

import './app.css';

function App() {
  // const [field, setField] = useState(new Field());

  return (
    <div className="App">
      <div className="upperBlock">
        <Counter count={40} />
        <Emoticon mood={'play'} />
        <Timer time={15} />
      </div>
      <FieldComponent />
    </div>
  );
}

export default App;
