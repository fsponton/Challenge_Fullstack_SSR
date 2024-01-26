import { createContext, useState } from "react";

const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);

    return (
        <PlayersContext.Provider value={{ players, setPlayers }}>
            {children}
        </PlayersContext.Provider>
    );
};

export { PlayersContext, PlayersProvider };