import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <h1>Social network profile</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Statistics section 1 option</h1>
      <Statistics title="Upload stats" stats={data} />
      <h1>Statistics section 2 option</h1>
      <Statistics stats={data} />
      <h1> Friend list </h1>
      <FriendList friends={friends} />
      <h1>Transaction history</h1>
      <TransactionHistory transaction={transactions} />
    </div>
  );
};
