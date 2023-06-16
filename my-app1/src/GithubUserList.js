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
        <div>
            <div>
                <input type="text"
                    value={inputValue}
                    onChange={handleInputChange}/>
                <button onClick={handleAddUser}>Aggiungi Utente</button>
            </div>
            <div>
                <ul>
                   {
                        usernames.map((user, i) => (
                            <li key={i}>
                                <Link to={
                                    `/users/${user}`
                                }>
                                    {user}</Link>
                            </li>
                        ))
                    }
                </ul>
                <hr/>

                <Outlet/>
            </div>
        </div>
    );
};
