export const Logout = () => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div>
      <h3>Logout</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
