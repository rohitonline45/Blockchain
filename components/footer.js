import {React,useState,useEffect} from 'react'
const Footer = () => {
    const [showButton, setShowButton] = useState(true);
    const showBurger = () => {
      if (window.innerWidth <= 960) {
        setShowButton(false)
  
      } else {
        setShowButton(true)
      }
    }
  
    useEffect(() => {
      window.addEventListener('resize', showBurger)
      return () => {
        window.removeEventListener('resize', showBurger)
      }
    }, [])
    return (
      <>
        <div className='footer row'>
          <div className='col-sm-1 col-md-2 col-lg-2'></div>
           <div className='item1'>
               <h4>Our services</h4>
               <div>
                 <ul className='set'>
                   <li><a>About us</a></li>
                   <li><a>Our work</a></li>
                   <li><a>HelpCenter</a></li>
                   <li><a>Pricing</a></li>
                 </ul>
               </div>
           </div>
           <div className='item2'>

           </div>
           <div className='item3'>

           </div>
        </div>
      </>
    )
}

export default Footer
