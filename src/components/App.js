import React, { useState } from 'react';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front-end JavaScript framework.',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating Components',
//   },
// ];

const options = [
  {
    label: 'The Color Red',
    color: 'red',
  },
  {
    label: 'The Color Green',
    color: 'green',
  },
  {
    label: 'The color Blue',
    color: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
}
// return <div className="ui container"><Search /></div>

/* <Accordion items={items} /> */

export default App;
