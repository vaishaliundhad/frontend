import React from "react";
import { useLoaderData , Link } from "react-router-dom";

const Career = () => {
    
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1>This is Career Page</h1>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li className="bg-blue-400">
              
                <Link className="underline" to={`${item.id}`}>{item.title}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export const CareerLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok){
    throw Error('Data Not Found!!!!!!')
  }
  return res.json();
};

export default Career;
