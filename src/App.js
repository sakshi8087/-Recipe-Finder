
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Component/Recipe';

const App = () =>{
  const APP_ID = '376c199e';
  const APP_KEY ='55f4d779d732b7f55722839d59169ab0';
  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () =>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return(
    <div>
      <form className='text-slate-50 bg-teal-900 body-font' onSubmit={getSearch}> 
      <div className='container py-10 mx-auto'>
        <div className='flex lg:w-1/2 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4'>
          <div className='realtive sm:mb-0 flex-grow w-full'>
            <p className='text-center text-lg '>Recipe Finder</p>
            <label htmlFor="full-name" className='leading-7 text-sm text-white'>Search Recipe</label>
            <input type='text' id='full-name' name='full-name' value={search} onChange={updateSearch} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
  
          </div>
          <button type='submit' className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Search</button>
        </div>
      </div>

      </form>

      <section className='text-black body-font'>
        <div className='container px-5 py-24'>
          <div className='flex flex-wrap -m-4 w-4/5 mx-auto'>
            {recipes.map(recipe =>(
              <Recipe 
                 key={recipe.recipe.label}
                 recipe={recipe.recipe}
                 />
            ))}
          </div>
        </div>


      </section>
    </div>
  )
}

export default App;
