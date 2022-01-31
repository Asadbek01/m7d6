import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favouritesReducer from "./reducers/favourites";
import jobsReducer from "./reducers/jobs";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt';

export const initialState = {
  favourites: {
    elements: [],
  },
  jobs: {
    elements: [],
  },
};


const persistConfig = {
  key: 'root',
  storage,
  transforms:[
    encryptTransform({
      secretKey: "UNKON_NUMBER_OR_KEY_INSERTED",
      onError: function (error) {
        console.log(error)
      },
    })
  ]
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer)


export let configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore)