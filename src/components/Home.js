import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container grid">
      <article className="space-y-6 mt-10">
        <h2 className="font-primary text-neutral-800 lg:text-3xl md:text-2xl text-xl font-medium leading-10">
          Laboraory Preanalytics <br />
          made simple for the first time, <br />
          at Smart4Diagnostics.
        </h2>
        <p className="font-body lg:text-lg sm:text-base max-w-md lg:pl-4">
          This platform has curated functionalities to help our clients
          seamlessly access orders data and their associated information.
        </p>
        <button className="ml-10  bg-slate-400 p-2 rounded font-primary font-medium text-slate-100 hover:bg-pink-700 ">
          <Link to="/orders">Get Orders</Link>
        </button>
      </article>
      <div>
        <img
          src="/hero-img.jpg"
          width="700px"
          height="700px"
          alt="A lab exhibit"
        />
      </div>
    </div>
  );
}

export default Home;
