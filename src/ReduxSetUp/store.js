import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userProfileReducer from './Reducers/userProfileSlice'
import clientsReducer from './Reducers/clientsSlice'
import dateReducer from './Reducers/dateSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    userProfile: userProfileReducer,
    clients: clientsReducer,
    date: dateReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)