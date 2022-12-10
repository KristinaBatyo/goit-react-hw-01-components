import { User } from "./user/User";
import users from "./profile.json";
import statistics from "./data.json"
import { Statistic } from "./statistic/Statistics";
import { FriendList } from "./friendlist/FriendList";
import friends from "./friends.json";
import { TransactionHistory } from "../transaction/TransactionHistory";
import transactions from "./transactions.json";

export const App = () => {
  return ( 
  <div>
    <User user={users}/>
    <Statistic statistic={statistics}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
  </div>
  );
};
