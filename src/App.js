import { useState } from 'react';
import Book from './components/Book';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Ukaz / skryj</button>
      {show && <Book />}
    </div>
  );
};

export default App;

// js - Short circuit evaluation

// const value = false;
// const value2 = 'Harry';

// ||

// const result2 = value || value2;
// console.log(result2);

// && - ked je value = true a zaroven "Harry", vysledok bude "Harry". Ked value = false, vysledok je false. Miesto "Harry" tam mozeme napriklad mat text v odstavci. Ked je hodnota value false, tak text neni vidiet, ked true, tak sa text zobrazi. V result pak mozeme ten text zobrazit do stranky. Takze to moze fungovat ako taky prepinac.

// const result1 = value && value2;
// console.log(result1);

// js
