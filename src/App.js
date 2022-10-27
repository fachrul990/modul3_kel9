import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Image from './components/Image';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const apiRoot = 'https://api.unsplash.com';
  const accessKey = 'xZxNAcUi5wm7eWoCdWhNcu1t0xeWTItfMz3GoEWKjfw';

  useEffect(() => {
    searchPics()
    },
    [query]
  );

  async function searchPics() {
    await axios
      .get(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${query}&page=${page}`)
      .then((res) => {
        setData([...data, ...res.data.results])
      })
      .catch((e) => {
        console.log(e)
      });
    setPage(page + 1)
  }

  const getQuery = (data) => {
    setQuery(data);
  }


  return (
    <div className='max-w-lg mx-auto my-4'>
      <SearchBar query={getQuery} setData={setData} />
        <div className="flex content-center w-full mb-16 mt-5">
          <div className="w-full py-0 columns-3 gap-8">
            {data.map((pic, index) => {
              return (
                  <Image key={index} url={pic.urls.regular} />
              );
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
