import React from 'react'
import Typewriter from 'react-typewriter-effect'

const TypeWriterText = () => {
  return (
    <span className='spanText'> 
        <Typewriter
    cursorColor="green"
    multiText={[
      'Developer..',
      'Designer..',
      'Creator..'
    ]}
    multiTextDelay={2000}
    typeSpeed={300}
    deleteSpeed={150}
    multiTextLoop
  />
    </span>
    
  )
}

export default TypeWriterText