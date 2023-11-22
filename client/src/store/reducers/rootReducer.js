
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const musicConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['token', 'user']
}


const rootReducer = combineReducers({

    music: persistReducer(musicConfig, authReducer),
})

export default rootReducer