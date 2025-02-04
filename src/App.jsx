// import React from "react";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import FriendList from "./components/FriendListIt/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div className={styles.app}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
