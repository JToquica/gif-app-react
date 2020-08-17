import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {

  const [categories, setCategories] = useState(['']);

  /*
  const handleAdd = () => {
    setCategories([...categories, 'Meme']);
    //setCategories(cats => [...cats, 'Meme']);
  }
  */

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>

      <ul>
        { categories.map( (category, i)=>(
            <GifGrid key={i} category={category}/>
          ))
        }
      </ul>
    </>
  );
}

export default App;
