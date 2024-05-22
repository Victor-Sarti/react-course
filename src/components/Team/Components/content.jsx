import '../styles.css'
import image from "../../../assets/images/svg/Image-ex.svg"
import linke from "../../../assets/images/svg/LinkedIn.svg"
import x from  "../../../assets/images/svg/X.svg"
import bola from "../../../assets/images/svg/Dribble.svg"
export default function Content(){
    return(
        <div className='card-container'>
           <img src={image} alt="" className='content-image'/>
            <div className='content-title'>
                <h1>Full name</h1>
                <h2>Job title</h2>
                  </div>
                    <p className='content-description'>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                <div className='redes'>
                    <a href="https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target='_blank'> 
                        <img src={linke} alt="" />
                    </a>
                <a href="https://x.com/x." target='_blank'>
                     <img src={x} alt="" />
                </a>
               <a href="https://dribbble.com/" target='_blank'>
                 <img src={bola} alt="" />
               </a>
               
                </div>
        </div>
    )
}