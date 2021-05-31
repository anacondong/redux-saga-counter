React-Redux-Saga

index.tsx >> react root config
App.tsx >> Main App component
/src
    /store
        - store.tx >> Root Config for Redux and Saga sagaMiddleware
        /actions >> actionType, ** action creator functions set state **
        /reducers >> init state, switch case, Update State
        /sagas >> worker function, watcher function, Business Logic before update state