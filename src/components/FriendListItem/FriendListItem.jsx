import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCard}>
      <img className={css.friendImg} src={avatar} alt={name} width="60" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;
