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
              const isSelected =
                this.props.votes.hasOwnProperty(categoryId) &&
                this.props.votes[categoryId] === index;
              return (
                <Nominee
                  key={key}
                  nominee={nominee}
                  onClick={() => this.props.vote(categoryId, index)}
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
            {this.props.hasError && (
              <ErrorMessage>
                This is embarassing. We were unable to save your vote. Please
                try again later.
              </ErrorMessage>
            )}
          </div>
        </MainLayout>
      );
    } else {
      return (
        <MainLayout>
          {this.props.isLoading && <Loading />}
          {this.props.hasError && (
            <ErrorMessage>
              This is embarassing. We were unable to save your vote. Please try
              again later.
            </ErrorMessage>
          )}
        </MainLayout>
      );
    }
  }
}

export default Category;
