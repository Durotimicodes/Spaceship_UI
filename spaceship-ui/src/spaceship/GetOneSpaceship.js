import React from 'react'

function GetOneSpaceship({spaceship, fetchData}) {
  return (
    <div>
      <div className='bg-slate-100 rounded-lg mb-4 p-4 hover:border hover:border-purple'>
        <div>
            <div>
                <div>
                    {spaceship.name}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetOneSpaceship
