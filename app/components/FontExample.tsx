import React from 'react'
import { Roboto, Jockey_One } from 'next/font/google'

const roboto = Roboto({
    weight:["100", "200", "300", "400"],
    subsets:["latin"]
})
const jockeyOne = Jockey_One({
    weight:["400"],
    subsets:["latin"]
})
    
const FontExample = () => {
  return (
    <div>
        <h1 className={`text-4xl ${roboto.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repudiandae quam. Esse excepturi quisquam corporis deleniti nam magnam commodi numquam magni repellendus. Architecto consectetur sequi amet voluptatem quae doloribus minus?</h1>


        <p className={`text-2xl ${jockeyOne.className}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam iure modi inventore odit, ipsa nisi dolores repudiandae deserunt? Tempore quibusdam dolorum corporis, nobis quidem blanditiis odio unde vitae fugit quia.</p>
    </div>
  )
}

export default FontExample