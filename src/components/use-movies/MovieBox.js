import React from 'react'

const MovieBox = ({children}) => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-purple-800 to-purple-600 flex-1 rounded-lg">
      {children}
    </div>
  );
}

export default MovieBox