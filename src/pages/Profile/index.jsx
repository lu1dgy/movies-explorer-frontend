import React, { useState } from 'react';
import Header from '../../components/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import style from './Profile.module.css';

const Profile = ({ name, email, onExit, onUpdate, setCurrentUser }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [formValue, setFormValue] = useState({
    email,
    name,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onUpdateUser = (e) => {
    if (currentUser.name === formValue.name && currentUser.email === formValue.email) {
      e.preventDefault();
      return;
    } else {
      setCurrentUser(formValue.name, formValue.email);
      onUpdate(formValue.name, formValue.email);
      setIsEditing(false);
    }
  };

  const handleExit = (e) => {
    e.preventDefault();
    onExit();
  };

  return (
    <>
      <Header />
      <main className={style.profile}>
        <div className={style.profile__container}>
          <h1 className={style.profile__heading}>Привет, {name}!</h1>
          <form className={style.profile__form}>
            <fieldset className={style.profile__fieldset}>
              <label className={style.profile__label}>
                <span className={style.profile__name}>Имя</span>
                <input
                  className={style.profile__input}
                  type='text'
                  placeholder={name}
                  onChange={handleChange}
                  value={formValue.name || ''}
                  name='name'
                  required
                  disabled={!isEditing}
                />
              </label>
              <div className={style.profile__line}></div>
              <label className={style.profile__label}>
                <span className={style.profile__email}>E-mail</span>
                <input
                  className={style.profile__input}
                  placeholder=''
                  value={formValue.email || ''}
                  onChange={handleChange}
                  type='email'
                  name='email'
                  required
                  disabled={!isEditing}
                />
              </label>
            </fieldset>
            <div className={style.profile__buttons}>
              {!isEditing && (
                <button
                  className={style.profile__edit}
                  type='button'
                  onClick={() => setIsEditing(true)}
                >
                  Редактировать
                </button>
              )}
              {isEditing && (
                <button className={style.profile__edit} onClick={onUpdateUser}>
                  Сохранить
                </button>
              )}
              <button className={style.profile__exit} type='button' onClick={handleExit}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Profile;
