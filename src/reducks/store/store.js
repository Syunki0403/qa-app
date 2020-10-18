import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ChapterReducer } from '../chapter/reducers';
import { QuestionsReducer } from '../questions/reducers';

export default function createStore(history) {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });

    return reduxCreateStore(
        combineReducers({
            // ルーターの状態を持つ新しいルートリデューサー
            router: connectRouter(history),
            chapter: ChapterReducer,
            questions: QuestionsReducer,
        }),
        applyMiddleware(
            logger,
            // 履歴アクションを確認
            routerMiddleware(history),
            thunk
        )
    );
}