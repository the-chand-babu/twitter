import style from './home.module.css'
import React from 'react'

const Home = () => {
  return (
    <div className={style.homeContainer}>

       <div className={style.sidebar}>
        sidebar... invoks
       </div>

       <div className={style.mainContainer}>
      main tweets component involks
       </div>
       <div>
            whats new and search bar here...
       </div>
    </div>
  )
}

export default Home
