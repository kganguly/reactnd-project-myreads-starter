import React from 'react';
// import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const Book = props => {
  const { book } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <BookshelfChanger book={book} onChangeShelf={props.onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.map(author => (
          <div key={author}>{author}</div>
        )) : <div key='unkown'>unknown</div>}
      </div>
    </div>
  );
};

export default Book;