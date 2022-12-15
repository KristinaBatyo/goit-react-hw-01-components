import { User } from "../user/User";
import users from "data/profile.json";

import statistics from "data/data.json"
import { Statistic } from "../statistic/Statistics";

import { FriendListItem } from '../friendlist/FriendListItem'
import friends from "data/friends.json";

import { TransactionHistory } from "../transaction/TransactionHistory";
import transactions from "data/transactions.json";
import {Container} from './App.styled'

export const App = () => {
  return ( 
  <Container>
    <User user={users}/>
    <Statistic title="Upload stats"
    statistic={statistics}/>
    <FriendListItem friends={friends}/>
    <TransactionHistory items={transactions}/>
  </Container>
  );
};
