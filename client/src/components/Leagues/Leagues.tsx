import { useEffect, useState } from 'react';
import { useSleeperUser } from '../../context/SleeperUserContext';
import { League } from '../../models/League';

const Leagues = () => {
  const { sleeperUserId } = useSleeperUser();
  const [leagues, setLeagues] = useState<League[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      if (!sleeperUserId) return;

      try {
        const response = await fetch(
          `https://api.sleeper.app/v1/user/${sleeperUserId}/leagues/nfl/2024`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch leagues');
        }

        const data: League[] = await response.json();
        setLeagues(data.length > 0 ? data : null);
        setError(null);
      } catch (err) {
        setError('An error occurred while fetching leagues.');
        setLeagues(null);
      }
    };

    fetchLeagues();
  }, [sleeperUserId]);

  return (
    <div>
      <h2>Dashboard</h2>
      {sleeperUserId ? (
        <>
          <p>Welcome, Sleeper User ID: {sleeperUserId}</p>
          {error ? (
            <p>{error}</p>
          ) : leagues ? (
            <ul>
              {leagues.map((league) => (
                <li key={league.league_id}>{league.name}</li>
              ))}
            </ul>
          ) : (
            <p>No leagues found for the 2024 season.</p>
          )}
        </>
      ) : (
        <p>No Sleeper User found.</p>
      )}
    </div>
  );
};

export default Leagues;
