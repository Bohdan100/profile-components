import { IUserProps } from 'interface';
import css from './UserProfile.module.css';

import { UserCard } from '../UserCard';
import { UserStats } from '../UserStats';

export const UserProfile: React.FC<{
  user: IUserProps;
}> = ({ user }) => (
  <div className={css.profile} key={user.tag}>
    <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
    />
    <UserStats stats={user.stats} />
  </div>
);
