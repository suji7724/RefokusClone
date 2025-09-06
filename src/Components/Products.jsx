import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'

function Products() {
    const products = [
        {
            title: "arqitel",
            description : "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live : true ,
            case : false,
    
        },

        {
            title: "Cula",
            description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",
            live : true ,
            case : true,
    
        },
        {
            title: "Layout",
            description : "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live : true ,
            case : false,
    
        },
        {
            title: "TTR",
            description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live : true ,
            case : false,
    
        },
        {
            title: "Maniv",
            description : "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live : true ,
            case : false,
    
        }

    ] 
    const [pos , setPos] = useState(0);
    const mover = (val) => {
        setPos(val*23);
    }
    
  return (
    <div className='mt-32 relative'>
        {products.map((val,index) => <Product val={val} mover = {mover} count={index}/>)}

        <div className='absolute top-0 w-full h-full pointer-events-none '>
            <motion.div
                initial = {{y: pos , x: '-50%'}}
                animate = {{y: pos + `rem`}}
                transition = {{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                className='window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden'>
                <motion.div animate= {{y: -pos + `rem`}} transition = {{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-[23rem] bg-sky-100'></motion.div>
                <motion.div animate= {{y: -pos + `rem`}} transition = {{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-[23rem] bg-sky-300'></motion.div>
                <motion.div animate= {{y: -pos + `rem`}} transition = {{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-[23rem] bg-sky-500'></motion.div>
                <motion.div animate= {{y: -pos + `rem`}} transition = {{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-[23rem] bg-sky-700'></motion.div>
                <motion.div animate= {{y: -pos + `rem`}} transition = {{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-[23rem] bg-sky-900'></motion.div>  
            </motion.div>
        </div>
    
    </div>
  )

}

export default Products
