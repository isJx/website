export const getUserInfo = () => {
  const userInfo = window.localStorage.getItem("userInfo");
  if (userInfo) {
    return JSON.parse(userInfo).roles;
  }
  return [];
};
