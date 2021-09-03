import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

// uses redux-thunk paradigm
export function handelInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveTweets(tweets)); // if order users-tweets changed no parent exist in Tweet
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
