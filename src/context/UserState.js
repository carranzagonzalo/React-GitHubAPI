import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import UserReducer from './UserReducer'


const initialState = {
  topFive: ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'],
  userInfo: {
    userLoaded: false,
    activeUser: '',
    avatarUrl: '',
    name: '',
    location: ''
  }
}


export const GlobalContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  // Action / Get User
  const getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`)

    dispatch({
      type: 'GET_USER',
      payload: res.data
    })
  }

  function clickedUser(username) {
    dispatch({
      type: 'SET_ACTIVE_USER',
      payload: username
    })
  }

  function unloadUser() {
    dispatch({
      type: 'UNLOAD_USER'
    })
  }

  return (
    <GlobalContext.Provider 
      value={{
        topFive: state.topFive,
        userInfo: state.userInfo,
        getUser,
        clickedUser,
        unloadUser
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}