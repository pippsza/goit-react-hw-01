import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./Friends.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li className={css.friendItem} key={friend.id}>
            {<FriendListItem friend={friend}></FriendListItem>}
          </li>
        );
      })}
    </ul>
  );
}
