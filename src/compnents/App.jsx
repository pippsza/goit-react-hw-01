// import userData from "../UserData.json";
// import UserProfile from "./UserCard/UserProfile";
// import transactionsList from "../Transactions.json";
// import Transactions from "./Transactions/Transactions";
import FriendListItem from "./FriendListItem/FriendListItem";
import FriendsList from "../FriendList.json";

export default function App() {
  return (
    <>
      {/* <UserProfile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></UserProfile> */}

      <ul>
        {FriendsList.map((friend) => {
          return (
            <li key={friend.id}>
              {<FriendListItem friend={friend}></FriendListItem>}
            </li>
          );
        })}
      </ul>

      {/* <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionsList.map((items) => {
            return (
              <tr key={items.id}>
                <Transactions items={items}></Transactions>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}
