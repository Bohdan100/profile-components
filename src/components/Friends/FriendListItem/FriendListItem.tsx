import css from './FriendListItem.module.css';
import defaultImage from 'images/defaultAvatar.png';

export const FriendListItem: React.FC<{
  avatar: string | undefined;
  name: string;
  isOnline: boolean;
}> = ({ avatar = defaultImage, name = 'friend', isOnline = false }) => {
  return (
    <li className={css.item}>
      <span>
        {isOnline ? (
          <div className={css.statusOnline}></div>
        ) : (
          <div className={css.statusOffline}></div>
        )}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
