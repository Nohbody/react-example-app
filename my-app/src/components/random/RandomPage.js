import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomJoke, selectCurrentJoke } from '../../reducers/jokes'
import JokeCard from '../joke/JokeCard'
import './randomPage.css'

const RandomPage = () => {
  const dispatch = useDispatch()
  const currentJoke = useSelector(selectCurrentJoke)

  useEffect(() => {
    dispatch(fetchRandomJoke())
  }, [])

  return (
    <div className="pageWrapper">
      <h1 className="pageHeader">icanhazdadjoke</h1>
      <div className="currentWrapper">
        {currentJoke && <JokeCard text={currentJoke.joke} />}
      </div>
      <button
        className="randomButton"
        type="button"
        onClick={() => dispatch(fetchRandomJoke())}
      >
        Get another joke!
      </button>
    </div>
  )
}

export default RandomPage
