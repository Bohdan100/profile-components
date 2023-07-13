import { IFriendProps } from 'interface';
import css from './FriendList.module.css';

import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList: React.FC<{
  friends: Array<IFriendProps>;
}> = ({ friends }) => {
  return (
    <section className={css.friends}>
      <h2 className={css.title}>Friends</h2>
      <ul className={css.friendsList}>
        {friends.map((friend: IFriendProps) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
};
