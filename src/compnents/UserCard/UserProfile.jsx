import css from "./Profile.module.css";
export default function UserProfile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileCard}>
      <div className={css.mainInfo}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.h1}>{name}</p>
        <p className={css.secondText}>@{tag}</p>
        <p className={css.secondText}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.itemValue}>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.itemTitle}>Views</span>

          <span className={css.itemValue}>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
