// Write your code here
import './index.css'

const MatchCard = ({match}) => {
  const {
    date,
    venue,
    result,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
  } = match

  return (
    <li className="match-card">
      <p className="date">{date}</p>
      <p className="venue">{venue}</p>
      <p className="result">{result}</p>
      <img
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competing_team}</p>
      <p className="first-innings">First Innings: {first_innings}</p>
      <p className="second-innings">Second Innings: {second_innings}</p>
    </li>
  )
}

export default MatchCard
