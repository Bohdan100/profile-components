import { IStatInfoProps, IStatItemProps } from 'interface';
import css from './StatisticsList.module.css';
import { StatisticsItem } from '../StatisticsItem';

export const StatisticsList: React.FC<{ statInfo: IStatInfoProps }> = ({
  statInfo: { title, stats },
}) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
      {stats.map((stat: IStatItemProps, index) => (
        <StatisticsItem
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
          index={index}
        />
      ))}
    </ul>
  </section>
);
