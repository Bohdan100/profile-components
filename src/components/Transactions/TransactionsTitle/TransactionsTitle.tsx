import css from './TransactionsTitle.module.css';

export const TransactionsTitle: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className={css.tableTitle}>Type</th>
        <th className={css.tableTitle}>Amount</th>
        <th className={css.tableTitle}>Currency</th>
      </tr>
    </thead>
  );
};
