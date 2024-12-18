import React from 'react'

function Card({gameID}) {
  console.log({gameID})
  return (
    <>
    
      <div className="">
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">GIGA NIGGA </h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I believe slavery and racism should exist”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {gameID}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Gpt Engineer, India
      </div>
    </figcaption>
  </div>
</figure>
    </div>
    </>
  )
}

export default Card