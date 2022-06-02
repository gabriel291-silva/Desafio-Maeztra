import './tarjetaHome.scss';



function TarjetaHome() {
  return (
    <div className="tarjeta-home">
    <div className='title'>Por que comprar na Maeztra?</div>
    <div className='cards'>
     
     <div className='card-contents'>
         <div className='icon-card'> <img src='https://i.imgur.com/QTFwPmU.png'/></div>
         <div className='text-card'>
             <p>Produtos importados</p>
             <span>Produto de Alta Qualidade</span>
         </div>
     </div>

     <div className='card-contents'>
         <div className='icon-card'> <img src='https://i.imgur.com/5GTW9ii.png'/></div>
         <div className='text-card'>
         <p>Estoque no Brazil</p>
             <span>Produtos mais perto de você!</span>
         </div>
     </div>

     <div className='card-contents'>
         <div className='icon-card'> <img src='https://i.imgur.com/sxrqa57.png'/></div>
         <div className='text-card'>
         <p>Trocas Garantidas</p>
             <span>Trocas em até 48 horas, vejas as regras</span>
         </div>
     </div>

     <div className='card-contents'>
         <div className='icon-card'> <img src='https://i.imgur.com/pyNUUin.png'/></div>
         <div className='text-card'>
         <p>Ganhe 5% off</p>
             <span>Pagando à vista no Cartão</span>
         </div>
     </div>

     <div className='card-contents'>
         <div className='icon-card'> <img src='https://i.imgur.com/o6jS7Gc.png'/></div>
         <div className='text-card'>
         <p>Frete Grátis</p>
             <span>Em compras acima de R$ 499,00</span>
         </div>
     </div> 

    </div>
    </div>
  );
}

export default TarjetaHome;