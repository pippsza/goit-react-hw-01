export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />

      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
