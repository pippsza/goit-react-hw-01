import userData from "../UserData.json";
import Profile from "./Profile/UserProfile";
import transactionsList from "../Transactions.json";
import TransactionHistory from "./TransactionTable/TransactionTable";
import FriendsList from "./FriendList/FriendList";
import friends from "../FriendListData.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></Profile>

      <FriendsList friends={friends}></FriendsList>

      <TransactionHistory items={transactionsList}></TransactionHistory>
    </>
  );
}
