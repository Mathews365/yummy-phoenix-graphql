import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withDeleteRecipe from 'mutations/recipes/deleteRecipeMutation';

class RecipeActions extends Component {
  static propTypes = {
    recipe: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    if (window.confirm('êtes vous sûre ?')) {
      this.props.deleteRecipe(this.props.recipe.id);
    }
    return false;
  }

  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe-actions is-pulled-right">
        <Link to={`/recipes/${recipe.id}/edit`}>
          <span className="icon">
            <i className="fa fa-edit" />
          </span>
        </Link>
        <a onClick={this.destroy}>
          <span className="icon">
            <i className="fa fa-trash-o" />
          </span>
        </a>
      </div>
    );
  }
}

export default withDeleteRecipe(RecipeActions);