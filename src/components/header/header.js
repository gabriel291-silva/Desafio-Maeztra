import Tarjeta from '../tarjetaHeader/tarjeta';
import './header.scss';

function Header() {
  return (
      <>
      <Tarjeta/>
      <header className="header">
    <div className='header-navigate'>
        <img className='logo-header' src='https://i.ibb.co/StZVfCx/logo-maeztra-novo.png'/>
        <div className='search-box'> <input/><button>BUSCAR</button></div>
        <div className='button-header'>minha conta</div>
        <div className='button-header'> meus favoritos</div>
        <div className='button-header'> meus carrinho</div>
    </div>
    <div className='header-category'>
        <div className='category'>
            <a>Novidades</a>
            <a>Vestidos</a>
            <a>Roupas</a>
            <a>Sapatos</a>
            <a>Lingerie</a>
            <a>Acessórios</a>
            <a>OUTLET</a>
        </div>
    </div>
    <div className='header-mobile'>
    <img className='logo-menu-mobile' src='https://firebasestorage.googleapis.com/v0/b/myimgs-padilha.appspot.com/o/icon-menu.png?alt=media&token=be8a0be3-98b6-4e25-8acb-19c11ea8f74f'/>
    <img className='logo-header' src='https://i.ibb.co/StZVfCx/logo-maeztra-novo.png'/>
    <img className='logo-search' src='https://firebasestorage.googleapis.com/v0/b/myimgs-padilha.appspot.com/o/search-icon.png?alt=media&token=338d72c7-5eee-44de-9d14-b89e1aa0df55'/>
    <img className='logo-sacola' src='https://firebasestorage.googleapis.com/v0/b/myimgs-padilha.appspot.com/o/sacola-icon.png?alt=media&token=3ab44394-96e9-4377-9152-0adb208939f8'/>
   
    

    </div>




    </header>
      </>
  );
}

export default Header;
