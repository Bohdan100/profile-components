import css from './App.module.css';

import { UserProfile } from '../User/UserProfile';
import { StatisticsList } from '../Statistics/StatisticsList';
import { FriendList } from '../Friends/FriendList';
import { TransactionsHistory } from '../Transactions/TransactionsHistory';

import userData from 'data/user.json';
import statInfo from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

const App: React.FC = () => {
  return (
    <div className={css.AppContainer}>
      <UserProfile user={userData} />
      <StatisticsList statInfo={statInfo} />
      <FriendList friends={friendsData} />
      <TransactionsHistory transactions={transactionsData} />
    </div>
  );
};

export default App;
