import { ITransactionsItemProps } from 'interface';
import css from './TransactionsItem.module.css';

export const TransactionsItem = ({
  type = 'invoice',
  amount = '0',
  currency = 'unknown',
}: ITransactionsItemProps) => (
  <tr className={css.tabelRow}>
    <td className={css.tabelCell}>{type}</td>
    <td className={css.tabelCell}>{amount}</td>
    <td className={css.tabelCell}>{currency}</td>
  </tr>
);
