import Profile from './Profile';
import userData from '../data/user.json';
import Statistics from './Statistics';
import statData from '../data/data.json';
import FriendList from './FriendList';
import friends from '../data/friends.json';
import TransactionsHistory from './TransactionsHistory';
import transactions from '../data/transactions.json'



export const App = () => {
  return (
    <>
      <Profile
        username = {userData.username}
        tag = {userData.tag}
        location = {userData.location}
        avatar = {userData.avatar}
        stats = {userData.stats}
      />

      <Statistics
        title='Upload stats'
        stats={statData}
      />

      <FriendList 
        data={friends}
      />

      <TransactionsHistory 
        transactions={transactions}
      />

    </>
  );
};
