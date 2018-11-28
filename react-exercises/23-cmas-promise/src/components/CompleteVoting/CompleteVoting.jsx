import React from "react";

import MainLayout from "../Layouts/MainLayout";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

function CompleteVoting(props) {
  return (
    <MainLayout className="text-center">
      <div>No more categories left.</div>
      <div>
        {/* Add onClick event here */}
        <button type="button" className="btn btn-link btn-lg">
          Complete and send my votes to the CMAs
        </button>
      </div>
      {/* Add loading here */}
      {/* If server failure, display "This is embarassing. We were unable to save your votes. Please try again later." error message */}
      {/**
       * When loading is successful, you will need to display this:
       * @example <p>We received your votes. Thank you for voting!</p>
       */}
    </MainLayout>
  );
}

export default CompleteVoting;
