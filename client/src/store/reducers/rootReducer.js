
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import postReducer from "./postReducer";
const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['token', 'user', 'isLogin']
}


const rootReducer = combineReducers({

    auth: persistReducer(authConfig, authReducer),
    post: postReducer
})

export default rootReducer