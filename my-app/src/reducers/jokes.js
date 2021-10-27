import { combineReducers } from '@reduxjs/toolkit'

const defaultState = {
  currentJoke: '',
  currentPage: 1,
  pageOfJokes: [],
  pageLimit: 6,
  searchTerm: '',
  fetchError: null,
}

const selectPageLimit = (state) => state.jokes.pageLimit
export const selectPageOfJokes = (state) => state.jokes.pageOfJokes
export const selectCurrentJoke = (state) => state.jokes.currentJoke
export const selectSearchTerm = (state) => state.jokes.searchTerm

const SET_PAGE_OF_JOKES = 'jokes/SET_PAGE_OF_JOKES'
const SET_CURRENT_JOKE = 'jokes/SET_CURRENT_JOKE'
const SET_SEARCH_TERM = 'jokes/SET_SEARCH_TERM'
const SET_FETCH_ERROR = 'jokes/SET_FETCH_ERROR'

export const fetchJokes =
  (searchQuery, page = 1) =>
  (dispatch, getState) => {
    const state = getState()
    const pageLimit = selectPageLimit(state)
    const url = `https://icanhazdadjoke.com/search?term=${searchQuery}&page=${page}&limit=${pageLimit}`
    fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SET_PAGE_OF_JOKES, payload: data.results })
      })
      .catch((error) => {
        dispatch({ type: SET_FETCH_ERROR, payload: error })
      })
  }

export const fetchRandomJoke = () => (dispatch) => {
  fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: SET_CURRENT_JOKE, payload: data })
    })
    .catch((error) => {
      dispatch({ type: SET_FETCH_ERROR, payload: error })
    })
}

export const fetchJoke = (id) => (dispatch) => {
  fetch(`https://icanhazdadjoke.com/j/${id}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: SET_CURRENT_JOKE, payload: data })
    })
    .catch((error) => {
      dispatch({ type: SET_FETCH_ERROR, payload: error })
    })
}

export const setSearchTerm = (term) => (dispatch) => {
  dispatch({ type: SET_SEARCH_TERM, payload: term })
}

const currentJoke = (state = defaultState.currentJoke, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_JOKE:
      return payload
    default:
      return state
  }
}

const pageOfJokes = (state = defaultState.pageOfJokes, { type, payload }) => {
  switch (type) {
    case SET_PAGE_OF_JOKES:
      return payload
    default:
      return state
  }
}

const fetchError = (state = defaultState.fetchError, { type, payload }) => {
  switch (type) {
    case SET_FETCH_ERROR:
      return payload
    default:
      return state
  }
}

const searchTerm = (state = defaultState.searchTerm, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_TERM:
      return payload
    default:
      return state
  }
}

const currentPage = (state = defaultState.currentPage) => state
const pageLimit = (state = defaultState.pageLimit) => state

export default combineReducers({
  currentJoke,
  currentPage,
  pageLimit,
  pageOfJokes,
  searchTerm,
  fetchError,
})
