export const saveUserInLocalStorage = (user) => {
  const localStorageUser = JSON.stringify(user);
  localStorage.setItem('user', localStorageUser);
};

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.role) return user.role;
  return 'nothing here';
};

export const getUserToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) return user.token;
  return '';
};

export const getUserName = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.name) return user.name;
  return 'nothing here';
};

export const clearUserInLocalStorage = async () => {
  localStorage.clear('user');
  return 'everything clean';
};

export const getUserEmail = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.email) return user.email;
  return '';
};
