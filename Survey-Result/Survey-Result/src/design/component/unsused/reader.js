import React, { useState, useEffect } from "react";
import axios from "axios";

function Reader() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://172.20.30.172:8080/from")
      .then((res) => {
        setposts(res.data);
        setLoading(false);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
        <li key={posts.id}>{posts.message}</li>
    </div>
);
  // render()
  // {
  //   if(res.data.message==="Origin logged")
  //   {
  //     return <div>All good here on read</div>
  //   }
  // }
}
export default Reader;
