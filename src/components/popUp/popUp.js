import './popUp.scss';



function PopUp(props) {
const display = props.trigger
    function closePopUp(){
        display = false
    }

  return (display) ? (

    <div className="popup-contents">
        <div className='div-btn-close'> 
        <button onClick={()=> props.setTrigger(false)} >fechar</button></div>

        <div className='popup'>
        
            <div className='popup-image'>
                <img src='https://firebasestorage.googleapis.com/v0/b/myimgs-padilha.appspot.com/o/image%204.png?alt=media&token=e080352c-cc57-40ca-891f-35f4eae7c485'/>
            </div>
            <div className='popup-text'>
                <div className='icon-title'>
                   <img src='https://firebasestorage.googleapis.com/v0/b/myimgs-padilha.appspot.com/o/newsletter-mail-icon.png?alt=media&token=d2874151-99e0-47a2-85de-e7929361d57f'/>
                <p>Bem Vindo à MAEZTRA</p>
                </div>
                <div className='email'>
                    <p>Receba em Primeira mão</p>
                    <span>desconto e ofertas exclusivas</span>
                    <input placeholder='Digite seu e-mail'></input>
                    <button>Enviar</button>
                    
                </div>
            </div>
        </div>
   
    </div>
  ): "";
}
export default PopUp;