import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './Bookshelf';
// import sortBy from 'sort-by';

const ListBooks = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={props.books} name="currentlyReading" displayName="Currently Reading" />
          <BookShelf books={props.books} name="wantToRead" displayName="Want To Read" />
          <BookShelf books={props.books} name="read" displayName="Read" />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;