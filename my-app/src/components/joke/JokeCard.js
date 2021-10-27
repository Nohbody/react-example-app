import React from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'
import './jokeCard.css'

const JokeCard = ({ text, searchTerm }) => {
  return (
    <div className="cardWrapper">
      <div className="textWrapper">
        <Highlighter
          highlightClassName="highlight"
          searchWords={[searchTerm]}
          autoEscape
          textToHighlight={text}
        />
      </div>
    </div>
  )
}

JokeCard.defaultProps = {
  searchTerm: '',
}

JokeCard.propTypes = {
  text: PropTypes.string.isRequired,
  searchTerm: PropTypes.string,
}

export default JokeCard
