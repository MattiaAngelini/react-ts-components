import { headerInterface } from '../interfaces/headerInterface';
import { useState } from 'react';
import '../styles/header.scss';

function Header(props: headerInterface) {
  const [openMenu, setOpenMenu] = useState(false);

  function hamburgerMenu() {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }

  return (
    <header>
      {!openMenu && (
        <div style={{ backgroundColor: props.bgColor, color: props.textColor }}>
          <div className='d-flex justify-content-between align-items-center mx-3 p-2'>
            <div>
              <img src={props.logoImg} />
            </div>
            {/* - costruire oggetti links con {id,text,url} 
            - per usare router react sostituire <a> */}
            <div className='d-none d-lg-flex gap-5'>
              {props.arrayLinks.map((link) => (
                <a style={{color:props.textColor}} 
                    href={link.url} 
                    className='links text-decoration-none' 
                    key={link.id}>
                  {link.text}
                </a>
              ))}
            </div>

            {/* Hamburger responsive*/}
            <i
              onClick={hamburgerMenu}
              className='d-lg-none fa-solid fa-bars hamburger'
            ></i>
          </div>
        </div>
      )}

      {/* Hamburger menu */}
      {openMenu && 
        <section className='hamburger-menu p-3'>
            <div className='d-flex justify-content-between'>
                <div>MENU</div>
                <i  onClick={hamburgerMenu} className="fa-solid fa-xmark"></i>
            </div>
        
             {props.arrayLinks.map((link) => (
                <a style={{color:props.textColor}} 
                    href={link.url} 
                    className='links text-decoration-none d-block' 
                    key={link.id}>
                  {link.text}
                </a>
              ))}
        </section>}
    </header>
  );
}

export default Header;
