import { useSleeperUser } from '../../context/SleeperUserContext';

const Leagues = () => {
  const { sleeperUserId } = useSleeperUser();

  return (
    <div>
      <h2>Dashboard</h2>
      {sleeperUserId ? (
        <p>Welcome, Sleeper User ID: {sleeperUserId}</p>
      ) : (
        <p>No Sleeper User found.</p>
      )}
    </div>
  );
};

export default Leagues;
