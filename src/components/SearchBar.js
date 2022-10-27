import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';


function SearchBar({query, setData }) {
  const [input, setinput] = useState('');
  
  const onSearchSubmit = (e) => {
    e.preventDefault();
    query(input);
  };
  const getquery = (e) => {
    setinput(e.target.value);
    setData([]);
  }
    
  return (
    <div className="flex-grow py-0 px-5 ">
      <div className="flex h-12 w-full rounded-3xl border-2">
        <div className="items-center flex w-6 ml-4">
          <AiOutlineSearch size={20} />
        </div>
        <form className='flex flex-grow'>
          <input className='bg-transparent border-none w-full ml-4 text-base focus:outline-none active:outline-none' onChange={getquery} type="text" placeholder="Search photos" />
          <button className='hidden' onClick={onSearchSubmit} type="submit" />
        </form>
      </div>
    </div>
  )
}

export default SearchBar
