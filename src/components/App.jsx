import userData from "../UserData.json";
import Profile from "./UserCard/UserProfile";
import transactionsList from "../Transactions.json";
import TransactionHistory from "./Transactions/TransactionTable";
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
