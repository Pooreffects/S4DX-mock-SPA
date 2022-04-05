import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container flex items-center justify-between">
      <article>
        <h2 className="font-primary text-neutral-800 text-3xl font-medium leading-10 mb-3">
          Laboraory Preanalytics <br />
          made simple for the first time, <br />
          at Smart4Diagnostics.
        </h2>
        <p className="font-body text-xl max-w-md pl-4">
          This platform has curated functionalities to help our clients
          seamlessly access orders data and their associated information.
        </p>
        <button className="ml-10 mt-4  bg-slate-400 p-2 rounded font-primary font-medium text-slate-100 hover:bg-pink-700 ">
          <Link to="/orders">Get Orders</Link>
        </button>
      </article>
      <div>
        <img src="/hero-img.jpg" alt="A lab exhibit" />
      </div>
    </div>
  );
}

export default Home;
