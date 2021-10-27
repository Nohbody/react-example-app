import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchJokes,
  selectPageOfJokes,
  selectSearchTerm,
  setSearchTerm,
} from '../../reducers/jokes'
import JokeCard from '../joke/JokeCard'
import './searchPage.css'

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const pageOfJokes = useSelector(selectPageOfJokes)
  const searchTerm = useSelector(selectSearchTerm)

  const handleSearchInput = () => {
    dispatch(setSearchTerm(searchInput))
    dispatch(fetchJokes(searchInput))
  }

  return (
    <div className="pageWrapper">
      <h1 className="pageHeader">icanhazdadjoke</h1>
      <div>
        <label htmlFor="jokeSearch">
          Search for a joke:
          <input
            className="searchInput"
            defaultValue={searchTerm}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleSearchInput()
              }
            }}
          />
        </label>
        <button type="button" onClick={handleSearchInput}>
          Go!
        </button>
      </div>
      <div>
        {pageOfJokes.length ? (
          <ul className="jokeCardList">
            {pageOfJokes.map((joke) => (
              <li key={joke.id}>
                <Link to={`/joke?id=${joke.id}`}>
                  <JokeCard text={joke.joke} searchTerm={searchTerm} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <>
            {searchTerm && (
              <p>
                No jokes found for: <b>{searchTerm}</b>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SearchPage
