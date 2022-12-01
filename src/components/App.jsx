import { User } from "./user/User";
import users from "./profile.json";

export const App = () => {
  return ( 
  <div>
    <User user={users}/>
  </div>
  );
};
