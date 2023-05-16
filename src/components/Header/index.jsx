import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import logo from '../../images/logo.svg';
import account from '../../images/profile.svg';

import style from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  const body = document.body;

  const backgroundColor = location.pathname === '/' ? '' : style.header_white;
  const isMainPage = location.pathname === '/';

  //предотвращаем скролл при открытом меню
  const setBodyOverflow = (opened) => {
    if (opened) {
      body.style.overflow = '';
    } else {
      body.style.overflow = 'hidden';
    }
  };

  const handleBurgerClick = () => {
    setIsOpened(!isOpened);
    setBodyOverflow(isOpened);
  };

  const handleClick = () => {
    if (isOpened) {
      setIsOpened(false);
      setBodyOverflow(isOpened);
    }
  };

  return (
    <header className={`${style.header} ${backgroundColor}`}>
      <div className={style.header__container}>
        <Link to={'/'}>
          <img src={logo} alt='logo' />
        </Link>
        {isMainPage ? (
          <div className={style.header__buttons}>
            <Link to={'/register'} className={style.header__btn}>
              Регистрация
            </Link>
            <Link to={'/login'} className={style.header__btn + ' ' + style.header__active}>
              Войти
            </Link>
          </div>
        ) : (
          <>
            <nav className={style.header__menu}>
              <ul className={`${style.header__list} ${isOpened ? style.header__list_active : ''}`}>
                {isOpened && (
                  <li className={style.header__item} onClick={handleClick}>
                    <NavLink
                      to={'/'}
                      className={(link) =>
                        link.isActive ? style.header__link_active : style.header__link
                      }
                    >
                      Главная
                    </NavLink>
                  </li>
                )}
                <li className={style.header__item} onClick={handleClick}>
                  <NavLink
                    to={'/movies'}
                    className={(link) =>
                      link.isActive ? style.header__link_active : style.header__link
                    }
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className={style.header__item} onClick={handleClick}>
                  <NavLink
                    className={(link) =>
                      link.isActive ? style.header__link_active : style.header__link
                    }
                    to={'/saved-movies'}
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
                <li className={style.header__item} onClick={handleClick}>
                  <NavLink className={style.header__link} to='/profile'>
                    <img className={style.header__account} src={account} alt={'profile'} />
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button
              className={`${style.header__burger} ${isOpened && style.header__burger_active}`}
              onClick={handleBurgerClick}
            >
              <div className={style.header__line}></div>
              <div className={style.header__line}></div>
              <div className={style.header__line}></div>
            </button>
            {isOpened && <div className={style.header__overlay} onClick={handleClick}></div>}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
