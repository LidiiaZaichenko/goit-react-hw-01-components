import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.status__true : css.status__false} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}> {name} </p>
    </li>
  );
};
