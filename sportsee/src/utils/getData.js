import config from "../config";
import {
  getUserActivityMock,
  getUserAvgSessionMock,
  getUserInfosMock,
  getUserPerformanceMock,
} from "./mockedData";
import {
  getUserActivity,
  getUserAvgSession,
  getUserInfos,
  getUserPerformance,
} from "./apiCall";

export const getData = async (type, id) => {
  let data = [];

  if (config.devmode) {
    switch (type) {
      case "USER_ACTIVITY":
        data = await getUserActivityMock(id);
        break;
      case "USER_PERFORMANCE":
        data = await getUserPerformanceMock(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAvgSessionMock(id);
        break;
      case "USER_MAIN_DATA":
        data = await getUserInfosMock(id);
        break;
      default:
        console.log("Error type");
    }
  } else {
    switch (type) {
      case "USER_ACTIVITY":
        data = await getUserActivity(id);
        break;
      case "USER_PERFORMANCE":
        data = await getUserPerformance(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAvgSession(id);
        break;
      case "USER_MAIN_DATA":
        data = await getUserInfos(id);
        break;
      default:
        console.log("Error type");
    }
  }
  return data;
};
