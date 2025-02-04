import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem.jsx";
import styles from "./FriendListItem.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
