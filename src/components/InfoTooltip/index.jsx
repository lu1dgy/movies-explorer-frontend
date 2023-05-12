import React from 'react';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg';
import styles from './InfoTooltip.module.css';
const InfoTooltip = ({ isOpen, onClose, status }) => {
  return (
    <div
      className={`${styles.popup + ' ' + styles.popup_type_photo} ${
        isOpen ? styles.popup_opened : ``
      }`}
    >
      <div className={styles.popup__container}>
        <img
          className={styles.popup__status}
          src={status ? success : fail}
          alt={status ? 'Успешно' : 'Ошибка'}
        />
        <h2 className={styles.popup__statusText}>
          {status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз'}
        </h2>
        <button onClick={onClose} type='button' className={styles.popup__close} />
      </div>
      <div className={styles.popup__overlay}></div>
    </div>
  );
};

export default InfoTooltip;
