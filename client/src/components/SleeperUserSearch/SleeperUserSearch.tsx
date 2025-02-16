import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSleeperUser } from '../../context/SleeperUserContext';
import { SleeperUser } from '../../models/SleeperUser';
import './SleeperUserSearch.scss';

const SleeperUserSearch: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [sleeperUser, setSleeperUser] = useState<SleeperUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setSleeperUserId } = useSleeperUser();
  const navigate = useNavigate();

  const fetchUserData = async (): Promise<void> => {
    setError(null);

    try {
      const response = await fetch(
        `https://api.sleeper.app/v1/user/${username}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data: SleeperUser = await response.json();
      if (data == null) {
        throw new Error('Failed to fetch user data');
      }
      setSleeperUser(data);
      setSleeperUserId(data.user_id); // Store sleeperUserId in Context API
      navigate('/leagues'); // Navigate to Leagues Page
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="sleeper-user-search">
      <h1 className="title">Sleeper User Search</h1>

      <input
        className="input-field"
        type="text"
        placeholder="Enter Sleeper username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="submit-button"
        onClick={fetchUserData}
        disabled={!username}
      >
        Get User Info
      </button>

      {error && <p className="error-message">{error}</p>}

      {sleeperUser && (
        <div className="user-info">
          <h2>{sleeperUser.display_name}</h2>
          <p>User ID: {sleeperUser.user_id}</p>
        </div>
      )}
    </div>
  );
};

export default SleeperUserSearch;
