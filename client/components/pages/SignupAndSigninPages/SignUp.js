import React from 'react'
import UserEntry from '../../userEntry/user-entry'
import '../../userEntry/userEntry.css'
const SignUp = () => {
  return (
    <div className="w-50 mx-auto">
      <UserEntry isReg={true} />
    </div>
  )
}

export default SignUp
