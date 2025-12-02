import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authcontext/AuthContext";
import Loading from "./Loading";
import Singleorder from "./Singleorder";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/orders/user?email=${user.email}`)
        .then(res => {
          setMyOrders(res.data);
        })
        .catch(err => console.error(err));
    }
  }, [user?.email]);


  return (
    <div>
      {myOrders.map(myOrder => (
        <Singleorder key={myOrder._id} myOrder={myOrder} />
      ))}
    </div>
  );
};

export default MyOrders;
