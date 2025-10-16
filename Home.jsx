import { useLocation } from "react-router-dom";


function Home() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to the Home Page</h1>
        {user ? (
          <>
            <h2>Hello, {user.name}!</h2>
            <p>We’re glad to see you 😊</p>
          </>
        ) : (
          <p>User data not found. Please log in again.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
