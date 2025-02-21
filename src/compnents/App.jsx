import userData from "../UserData.json";
import UserProfile from "./UserCard/UserProfile";
import transactionsList from "../Transactions.json";
import Transaction from "./Transactions/Transactions";
import FriendListItem from "./FriendListItem/FriendListItem";
import friendsList from "../FriendList.json";

export default function App() {
  return (
    <>
      <UserProfile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></UserProfile>

      <ul>
        {friendsList.map((friend) => {
          return (
            <li key={friend.id}>
              {<FriendListItem friend={friend}></FriendListItem>}
            </li>
          );
        })}
      </ul>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionsList.map((item) => {
            return (
              <tr key={item.id}>
                <Transaction items={item}></Transaction>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
