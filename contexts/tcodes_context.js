import { createContext, useContext, useReducer } from "react";

const initialTCodes = [];

const TCodesContext = createContext(null);

export function TCodesProvider({ children }) {
    const [tCodes, dispatch] = useReducer(tCodesReducer, initialTCodes);
    const [hasFetchedData, dispatchHasFetchedData] = useReducer(hasFetchedDataReducer, false);

    return (
        <TCodesContext.Provider value={tCodes}>
            
        </TCodesContext.Provider>
    );
}

export function useTCodes() {
    return useContext(TCodesContext);
}

export function useTCodesDispatch() {
    return useContext(TCodesReducersContext);
}

export function useHasFetchedData() {
    return useContext(HasFetchedDataContext);
}

export function useHasFetchedDataDispatch() {
    return useContext(HasFetchedDataReducersContext);
}

function tCodesReducer(tCodes, action) {
    switch (action.type) {
        case 'added':
            return [...tCodes, action.tCode].sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
        case 'fetched_data':
            return action.tCodes;
        case 'refreshed':
            return initialTasks;
        default:
            break;
    }
}

function hasFetchedDataReducer(hasFetchedData, action) {
    switch (action.type) {
        case 'updated':
            return action.value;
    }
}