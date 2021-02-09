import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/UserState'

const Navbar = () => {
  const { userInfo, unloadUser } = useContext(GlobalContext)

  return(
    <Fragment>
      <div className='navbar-left'>
        <Link to='/'><i className={userInfo.userLoaded ? 'fas fa-angle-left icon-style' : 'hidden'} onClick={() => unloadUser()}></i></Link>
        <p className='inline'>{userInfo.userLoaded ? ' Back' : ''}</p>
      </div>
      <div>
        <p>{userInfo.userLoaded ? 'Person' : 'Home'}</p>
      </div>
      <div><p className='third-column'>{userInfo.userLoaded ? '_________' : '_____'}</p></div>
    </Fragment>
  )
}

export default Navbar