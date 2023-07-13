import { ITransactionProps } from 'interface';
import css from './TransactionsHistory.module.css';

import { TransactionsTitle } from '../TransactionsTitle';
import { TransactionsItem } from '../TransactionsItem';

export const TransactionsHistory: React.FC<{
  transactions: Array<ITransactionProps>;
}> = ({ transactions }) => (
  <table className={css.transactionHistory}>
    <TransactionsTitle />
    <tbody>
      {transactions.map(transaction => (
        <TransactionsItem
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </tbody>
  </table>
);
