import { createContext, useState } from "react";

const UserFilteredContext = createContext();

const UserFilteredProvider = ({ children }) => {
    const [userFiltered, setUserFiltered] = useState(null);

    return (
        <UserFilteredContext.Provider value={{ userFiltered, setUserFiltered }}>
            {children}
        </UserFilteredContext.Provider>
    );
};

export { UserFilteredContext, UserFilteredProvider };