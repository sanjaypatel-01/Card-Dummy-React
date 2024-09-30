import React, { useContext } from "react";
import UserDetails from "./UserDetails";
import { userContext } from "./Context";
import { Link } from "react-router-dom";

const User = () => {
  const { users, setUsers } = useContext(userContext);

  return (
    <div className="items-center flex-col flex w-1/2">
      <h1 className="text-3xl mt-10">User List</h1>
      <div className="flex w-1/2 flex-col mt-10">
        {users.map((u) => (
          <Link key={u.id} to={`/user/${u.id}`} className="mb-3 bg-red-300 p-3">
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
