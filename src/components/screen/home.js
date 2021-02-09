import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/UserState'

const Home = () => {
  const { topFive, clickedUser } = useContext(GlobalContext)

  return(
    <Fragment>
      <h2>Top 5 GitHub Users</h2>
      <p className='extra-margin'>Tap the username to see more information</p>
      {topFive.map(user => <Link to='/user' key={topFive.indexOf(user)}>
                             <button className='button' key={topFive.indexOf(user)} onClick={() => clickedUser(user)}>{user}</button>
                           </Link>
                  )}
    </Fragment>
  )
}

export default Home
