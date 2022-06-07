import {createContext, useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';

const StateContext = createContext();

export const ContextProvider = ({children})=>{

    const [actionsBar,setActionsBar] = useState(false);
    const [actionsBarChildren, setActionsBarChildren] = useState(null);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        if(Cookies.get('authUser')){
            setUser(JSON.parse(Cookies.get('authUser')));
        }
    },[]);

    return(
        <StateContext.Provider 
        value={{ user,setUser,    
                 actionsBar,setActionsBar,
                 actionsBarChildren,setActionsBarChildren,        
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
