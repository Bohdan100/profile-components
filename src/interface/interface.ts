export interface IUserCardProps {
  username: string;
  tag: string;
  location: string;
  avatar?: string;
}

export interface IUserStatsProps {
  followers: number;
  views: number;
  likes: number;
}

export interface IUserProps extends IUserCardProps {
  stats: IUserStatsProps;
}

export interface IFriendProps {
  avatar?: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface IStatItemProps {
  id: string;
  title?: string;
  label: string;
  percentage: number;
}

export interface IStatInfoProps {
  stats: Array<IStatItemProps>;
  title: string;
}

export interface ITransactionsItemProps {
  type: string;
  amount: string;
  currency: string;
}

export interface ITransactionProps extends ITransactionsItemProps {
  id: string;
}
