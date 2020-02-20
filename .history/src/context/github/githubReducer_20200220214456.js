import {SEARCH_USERS, GET_REPOS, GET_USER, SET_LOADING, CLEAR_USERS} from '../types'

export const githubReducer = (state, action) => {
    const handlers = {
        [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
        [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
        [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
        [SET_LOADING]: state => ({...state, loading: true}),
        [CLEAR_USERS]: state => ({...state, users: []}),
        DEFAULT: state => state
    }

    const handler = handlers(action.type) || handlers.default
    return handler(state, action)
}
