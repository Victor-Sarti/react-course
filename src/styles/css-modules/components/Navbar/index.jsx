import style from "./style.module.css"
export default function Navbar (props){
    return(
        <header>
            <h1 className={style.logo}>{props.logo}</h1>
            
            <nav >
                <a className={style.a}  href="">{props.link}</a>

                <a className={style.a}  href="">{props.link2}</a>

                <a className={style.a}  href="">{props.link3}</a>

                <a className={style.a}  href="">{props.link4}</a>
            </nav>

            <button className={style.button1}>{props.button1}</button>
            <button className={style.button}>{props.button}</button>
          
        </header>
        
    )
}