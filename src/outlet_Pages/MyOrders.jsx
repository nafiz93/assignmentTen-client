import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "../authcontext/AuthContext";

const MyOrders = () => {
  const { user } = useAuthContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/orders/user?email=${user.email}`)
        .then(res => {
          console.log("MY ORDERS:", res.data);
          setMyOrders(res.data);
        })
        .catch(err => console.error(err));
    }
  }, [user?.email]);

  return <div>{/* show orders here */}</div>;
};

export default MyOrders;
