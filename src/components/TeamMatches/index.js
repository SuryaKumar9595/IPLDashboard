// Write your code here
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const {id} = useParams()
  const [teamData, setTeamData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMatches = async () => {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()
      setTeamData(data)
      setIsLoading(false)
    }
    fetchTeamMatches()
  }, [id])

  const {team_banner_url, latest_match_details, recent_matches} = teamData

  return (
    <div className="team-matches-container">
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <>
          <img
            src={team_banner_url}
            alt="team banner"
            className="team-banner"
          />
          <LatestMatch latestMatchDetails={latest_match_details} />
          <ul className="recent-matches-list">
            {recent_matches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default TeamMatches
