import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherbuttonProps}) => {
    return <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherbuttonProps}>{children}</button>
}

export default CustomButton