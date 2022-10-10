import React from "react";
import learn from "../learn.json";
import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizes = useLoaderData();
  return (
    <div>
      <div class="card mb-3 max-width: 540px container">
        <div class="row g-0">
          <div class="col-md-4">
            <Lottie className="w-100% " animationData={learn} loop={true} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bolder text-decoration-underline">
                Our Motive
              </h5>
              <p class="card-text fw-bolder fs-3 lh-base mt-5">
                Our Aim is to make skilled and educated nation.
                <br /> You can visit our courses if you want.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1>Courses:{quizes.data.length}</h1>
      {
        quizes.map(quiz=> <Quiz key={quiz.data} quiz={quiz}></Quiz>
            
        )
      }
    </div>
  );
};

export default Home;
