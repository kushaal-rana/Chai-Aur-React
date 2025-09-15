import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return (
    <div className="text-3xl font-bold underline bg-red-500 p-6 border-2 rounded-lg mb- text-center">
      User {userId}
    </div>
  );
}

export default User;
