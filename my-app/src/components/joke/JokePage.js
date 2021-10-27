import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { fetchJoke, selectCurrentJoke } from '../../reducers/jokes'
import JokeCard from './JokeCard'
import './jokePage.css'

const JokePage = () => {
  const currentJoke = useSelector(selectCurrentJoke)
  const location = useLocation()
  const dispatch = useDispatch()

  const defaultCopyButtonText = 'Copy to clipboard'
  const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText)

  useEffect(() => {
    const params = queryString.parse(location.search)
    if (!currentJoke.joke) {
      dispatch(fetchJoke(params.id))
    }
  }, [location])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentJoke.joke).then(() => {
      setCopyButtonText('Copied!')
      setTimeout(() => {
        setCopyButtonText(defaultCopyButtonText)
      }, 1000)
    })
  }

  return (
    <div className="pageWrapper">
      <h1 className="pageHeader">icanhazdadjoke</h1>
      <div className="currentWrapper">
        {currentJoke && <JokeCard text={currentJoke.joke} />}
      </div>
      <button className="copyButton" type="button" onClick={copyToClipboard}>
        {copyButtonText}
      </button>
    </div>
  )
}

export default JokePage
