import React, {useReducer} from 'react'
import axios from 'axios'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'

const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_CLIENT_SECRET

export const GithubState = ({children}) => {
    const initialState  = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${client_id}&client_secret=${client_secret}`
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }
    
    const getUser = async name => {
        setLoading()

        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()

        dispatch({
            type: GET_REPOS,
            payload: {}
        })
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS,
            payload: []
        })
    }

    const setLoading = () => dispatch({
        type: SET_LOADING
    })

    const {user, users, repos, loading} = state

    return (
        <div>
            <GithubContext.Provider value={{
                search, getUser, getRepos, clearUsers, setLoading, user, users, repos, loading
            }}>
                {children}
            </GithubContext.Provider>
        </div>
    )
}
