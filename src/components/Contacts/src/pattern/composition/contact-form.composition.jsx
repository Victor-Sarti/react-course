import "../../../styles.css"

export default function ContactForm(){
    return(
        <div className="all-box">
             <div className="box">
          <label htmlFor="">Name</label>
            <textarea name="" id=""></textarea>
         </div> 
             <div className="box">
             <label htmlFor="">Email</label>
            <textarea name="" id=""></textarea>

         </div> 
             <div className="boxM">
             <label htmlFor="">Menssage</label>
            <textarea name="" id="">Type your message...</textarea>
        
         </div> 

         <div className="check">
            <input type="checkbox" />
            <label htmlFor="">I accept the Terms</label>
         </div>
         <button>Submit</button>
        </div>
       
         
        
    )
}