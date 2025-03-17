import {
  userCard,
  userInfo,
  userImg,
  userName,
  userStats,
  userStat,
  statAmount,
} from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={userCard}>
      <div className={userInfo}>
        <img src={image} alt={name + '`s avatar'} className={userImg} />
        <p className={userName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={userStats}>
        <li className={userStat}>
          <span>Followers</span>
          <span className={statAmount}>{stats.followers}</span>
        </li>
        <li className={userStat}>
          <span>Views</span>
          <span className={statAmount}>{stats.views}</span>
        </li>
        <li className={userStat}>
          <span>Likes</span>
          <span className={statAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
