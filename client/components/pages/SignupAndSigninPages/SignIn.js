import React from 'react'
import UserEntry from '../../userEntry/user-entry'

import '../../userEntry/userEntry.css'

const SignIn = () => {
  return (
    <div className="w-50 mx-auto">
      <UserEntry isReg={false} />
    </div>
  )
}

export default SignIn
