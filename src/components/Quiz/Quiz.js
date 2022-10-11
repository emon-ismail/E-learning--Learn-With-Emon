import { data } from "autoprefixer";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  const { data } = useLoaderData();
  return (
    <div>
      {/* <h1>Name: {name}</h1>
            <h2>Id : {id}</h2>
            <img src={logo}  /> */}
      {/* <h5> name : <Link to={`/quiz/${id}`}>{name} </Link></h5> */}
      {
        
      }

      {
        <div className="container d-flex justify-content-center mt-5 w-100% bg-info">
          <div >
            <div className=""><div className="container    ">
          <div className="card bg-danger" style={{ width: "18rem" }}>
            <img className="card-img-top" src={logo} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h5 className="card-title">Total: {total}</h5>
              <h5>
                {" "}
                Explore :{" "}
                <Link to={`/topics/${id}`} className="btn btn-primary">
                  {name}{" "}
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                </Link>{" "}
              </h5>
              {/* <Link to={{`/quiz/${id}`}>{name} } className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div></div>
            
          </div>
        </div>
      }
    </div>
  );
};

export default Quiz;
