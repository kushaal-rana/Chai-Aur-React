const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kushaal-rana");
  const data = await response.json();
  return data;
};
export default githubInfoLoader;
