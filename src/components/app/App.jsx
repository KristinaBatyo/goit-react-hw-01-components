import { User } from "../user/User";
import users from "../profile.json";

import statistics from "../data.json"
import { Statistic } from "../statistic/Statistics";

import { FriendListItem } from '../friendlist/FriendListItem'
import friends from "../friends.json";

import { TransactionHistory } from "../Transaction/TransactionHistory";
import transactions from "../transactions.json";
import {Container} from './App.styled'

export const App = () => {
  return ( 
  <Container>
    <User user={users}/>
    <Statistic statistic={statistics}/>
    <FriendListItem friends={friends}/>
    <TransactionHistory items={transactions}/>
  </Container>
  );
};
