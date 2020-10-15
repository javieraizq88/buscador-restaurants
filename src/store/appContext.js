import React, { useState, useEffect } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updatedStore => setState({
                store: Object.assign(state.store, updatedStore),
                actions: { ...state.actions }
            })
        }))
        useEffect(() => {
            // state.actions.getInfo("https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json");
        }, [])

        return (

            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext;
