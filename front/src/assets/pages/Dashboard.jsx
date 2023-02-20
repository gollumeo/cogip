import React from 'react';
import Dash from '../component/Dash';

const Dashboard = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //     axios.get('/verification_login.php')
  //         .then(response => setIsLoggedIn(response.data.isLoggedIn))
  //         .catch(error => console.error(error));
  // }, []);

  return (
    <>
      <Dash />
    </>
  );
};

export default Dashboard;
