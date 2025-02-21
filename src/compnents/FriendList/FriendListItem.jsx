import css from "./Friends.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />

      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
