import { IUserCardProps } from 'interface';
import image from 'images/avatar.png';
import css from './UserCard.module.css';

export const UserCard: React.FC<IUserCardProps> = ({
  username,
  tag,
  location,
  avatar = image,
}) => (
  <div className={css.card}>
    <img src={avatar} alt="User avatar" className={css.avatar} />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
);
