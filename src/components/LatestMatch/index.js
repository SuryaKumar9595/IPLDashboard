// Write your code here
import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const {
    umpires,
    result,
    man_of_the_match,
    date,
    venue,
    competing_team,
    competing_team_logo,
  } = latestMatchDetails

  return (
    <div className="latest-match">
      <h2 className="latest-match-title">Latest Match</h2>
      <div className="match-details">
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
        <p className="umpires">{umpires}</p>
        <p className="man-of-the-match">Man of the Match: {man_of_the_match}</p>
        <img
          src={competing_team_logo}
          alt={`latest match ${competing_team}`}
          className="competing-team-logo"
        />
        <p className="competing-team">{competing_team}</p>
      </div>
    </div>
  )
}

export default LatestMatch
