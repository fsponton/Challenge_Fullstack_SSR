import { createContext, useState } from "react";

const MatchesContext = createContext();

const MatchesProvider = ({ children }) => {
    const [matches, setMatches] = useState([]);

    return (
        <MatchesContext.Provider value={{ matches, setMatches }}>
            {children}
        </MatchesContext.Provider>
    );
};

export { MatchesContext, MatchesProvider };