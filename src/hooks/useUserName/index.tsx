import React, {useState, useEffect, useMemo, useContext} from "react"

export default function useUserName() {
    const [state, setState] = useContext(UserNameContext);

    function dispatch(newState) {
        setState(newState);
    }

    return [state, dispatch];
}

export const UserNameContext = React.createContext([]);


export const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState("Dios");
    return (
      <UserNameContext.Provider value={[ userName, setUserName ]}>
        {children}
      </UserNameContext.Provider>
    );
  };


