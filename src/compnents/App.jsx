import userData from "../UserData.json";
// import UserProfile from "./UserCard/UserCard";
import UserProfile from "./UserCard/UserProfile";

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
    </>
  );
}
