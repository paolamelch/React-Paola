import {useEffect, useState} from "react";
import {GithubUser} from "./GithubUser";
import {Link, Outlet} from "react-router-dom";

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddUser = () => {
        setUsernames([
            ...usernames,
            inputValue
        ]);
        setInputValue('');
    };

    return (
        <div> {/* <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddUser}>Aggiungi Utente</button>
          </div> */}
            <div>
                <ul>
                    <li>
                        <Link to="/users/paolamelch">Paola</Link>
                    </li>
                    <li>
                        <Link to="/users/gianmarcotoso">Gian Marco</Link>
                    </li>
                </ul>
                <hr/>

                <Outlet/>
            </div>
        </div>
    );
};
