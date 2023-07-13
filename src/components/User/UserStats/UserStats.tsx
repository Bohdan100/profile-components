import { IUserStatsProps } from 'interface';
import css from './UserStats.module.css';

export const UserStats: React.FC<{
  stats: IUserStatsProps;
}> = ({ stats }) => {
  const followers: number = stats.followers;
  const views: number = stats.views;
  const likes: number = stats.likes;

  return (
    <ul className={css.stats}>
      <li className={css.firstStat}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.secondStat}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.thirdStat}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  );
};
