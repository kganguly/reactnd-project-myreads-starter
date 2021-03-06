import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends React.Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    query = query.trim();
    this.setState({ query, searchResults: [] });
    if (query) {
      BooksAPI.search(query).then(
        results => {
          this.setState({ searchResults: results });
          // console.log("RESULTS:", results);
        }
      );
    }
  }

  render() {
    const { books, onChangeShelf } = this.props;
    const { searchResults } = this.state;
    const mergedResults = searchResults.error ? [] :
      searchResults.map(
        book => {
          const found = books.find(shelvedBook => shelvedBook.id === book.id);
          return found || book;
        }
      );

    return (
      <div className="search-books" >
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author" autoFocus />

          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={mergedResults} onChangeShelf={onChangeShelf} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;