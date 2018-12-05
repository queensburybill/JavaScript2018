import React from "react";

import MainLayout from "../Layouts/MainLayout";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

function CompleteVoting(props) {
  return (
    <MainLayout className="text-center">
      <div>No more categories left.</div>
      <div>
        <button
          type="button"
          className="btn btn-link btn-lg"
          onClick={props.completeVoting}
        >
          Complete and send my votes to the CMAs
        </button>
      </div>
      {props.isLoading && <Loading />}
      {props.hasError && (
        <ErrorMessage>
          This is embarassing. We were unable to save your votes. Please try
          again later.
        </ErrorMessage>
      )}
      {props.isComplete && <p>We received your votes. Thank you for voting!</p>}
    </MainLayout>
  );
}

export default CompleteVoting;
