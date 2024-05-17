import "./styles.css"

import seta from "../../assets/images/svg/Seta-Button.svg"
import img from "../../assets/images/svg/Image.svg"

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-description">
        <div className="layout-text">
          <h4>{props.tags}</h4>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="layout-button">
          <button className=" button-box" >VER</button>
          <button className="button-link">
            <p>Comprar</p>
            <img src={seta} alt="" />
          </button>
          </div>
        </div>
        <img src={props.image ? props.image: img} alt="" />
      </div>
    </div>
  )
}


