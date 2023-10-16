import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './search.css'

export const SearchRocket = () => {
  const { query } = useParams();
  const [data, setData] = useState([
    {
      id: 1,
      name: 'name',
      pic: null,
      type: 'type',
      desc: 'desc',
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/public/search?query=${query}`);
        if (!response.ok) {
          console.log('Something went wrong with the response');
          return;
        }

        const responseData = await response.json();

        if (responseData.length > 0) {
          for (let i = 0; i < responseData.length; i++) {
            data[i] = {
              name: responseData[i].subObject.rocket_name,
              pic: responseData[i].subObject.flickr_images[0],
              type: responseData[i].subObject.rocket_type,
              desc: responseData[i].subObject.description,
            };
          }
          setData([...data]);
        }

        console.log('response', responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div className="container mx-auto p-4">
        {data[0].pic && (
          <div className="absolute flex items-center justify-center">
            <div id='search-pic' className="w-1/2">
              <img
                src={data[0].pic}
                alt={data[0].name}
                className="w-full h-auto rounded my-10"
              />
            </div>
            <div className="w-1/2 ml-6">
              <h1 id='search-title' className="text-2xl font-bold text-white mx-2">You searched for: {query} </h1>
              <p className="text-white text-justify pr-12 mx-2 mt-10">{data[0].desc}</p>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-white mx-2 mt-8">Name: {data[0].name}</h2>
                <p className="text-white mx-2">Type: {data[0].type}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
