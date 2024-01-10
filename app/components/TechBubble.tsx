import React from 'react'

type TechBubbleProps = {
tech: string
};


const TechBubble = ({tech}:TechBubbleProps) => {
  return (
    <div className='bg-bluesteel text-white m-1 py-1 px-3 rounded-full'>{tech}</div>
  )
}

export default TechBubble