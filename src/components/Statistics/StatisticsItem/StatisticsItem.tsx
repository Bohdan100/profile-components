import css from './StatisticsItem.module.css';

export const StatisticsItem: React.FC<{
  label: string;
  percentage: number;
  index: number;
}> = ({ label, percentage, index }) => (
  <li
    className={css.item}
    style={{
      backgroundColor: `${getRandomHexColor(index)}`,
    }}
  >
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
  </li>
);

function getRandomHexColor(i: number): string {
  const colors = ['#be7e6f', '#aaa189', '#fdcb26', '#d17edf', '#acf967'];
  return colors[i];
}
