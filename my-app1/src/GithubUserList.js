import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList(){
    const [usernames, setUsernames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleAddUser = () => {
        setUsernames([...usernames, inputValue]);
        setInputValue('');
      };
    
      return (
        <div>
          <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddUser}>Aggiungi Utente</button>
          </div>
          <div>
            {usernames.map((username) => (
              <GithubUser username={username} />
            ))}
          </div>
        </div>
      );
    };