import React from 'react'

const GridItems = ({ 
    size, 
    children 
}: {
    size:string, 
    children: React.ReactNode
}) => {
  return <div>{children}</div>
};

export default GridItems