import React from 'react'
import GeneralWrapperStyle from './GeneralWrapperStyle'


const GeneralWrapper = ({children}) => {
  return (
    <GeneralWrapperStyle>{children}</GeneralWrapperStyle>
  )
}

export default GeneralWrapper;