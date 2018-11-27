import React, { Component } from "react";

import MainLayout from "../Layouts/MainLayout";
import Nominee from "./Nominee.jsx";
import PrevCategoryButton from "./PrevCategoryButton";
import NextCategoryButton from "./NextCategoryButton";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Category extends Component {
  componentDidMount() {
    if (!this.props.categories) this.props.fetchAllNominees();
  }
  render() {
    if (this.props.categories) {
      const categoryId = parseInt(this.props.match.params.id);
      const { category, nominees } = this.props.categories[categoryId];
      return (
        <MainLayout>
          <h1 className="h2 text-center">{category}</h1>
          <div className="card-group mb-2">
            {nominees.map((nominee, index) => {
              const key = `nominee-${index}`;
              /**
               * If the nominee has been voted for, isSelected will be true
               */
              const isSelected =
                this.props.votes.hasOwnProperty(categoryId) &&
                this.props.votes[categoryId] === index;
              /**
               * When clicked, you will need to trigger the vote action, which will be
               * passed down at props. Please see "src/components/Category/CategoryContainer.js"
               */
              return (
                <Nominee
                  key={key}
                  nominee={nominee}
                  onClick={/* Replace null with function */ null}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
          <div className="clearfix">
            <PrevCategoryButton currentCategoryId={categoryId} />
            <NextCategoryButton
              currentCategoryId={categoryId}
              maxCategoryId={Object.values(this.props.categories).length}
            />
          </div>
          <div className="mt-3">
            {/**
             * If there is an AJAX failure with voting, display the error message
             * "This is embarassing. We were unable to save your vote. Please try again later."
             */}
          </div>
        </MainLayout>
      );
    } else {
      return (
        <MainLayout>
          {/**
           * For the categories request, display
           * - Loading if it is loading
           * - Error component if there is a server failure. The error message should be:
           * "This is embarassing. We were unable to save your vote. Please try again later."
           */}
        </MainLayout>
      );
    }
  }
}

export default Category;
