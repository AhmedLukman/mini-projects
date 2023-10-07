import React, { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

function UserBox({
  handleSelectButtonClicked,
  selectedUserId,
  userData,
  handleAddFriend,
}) {
  const [isAddFriendBtnClicked, setIsAddFriendBtnClicked] = useState(false);
  const handleAddFriendClicked = () => {
    setIsAddFriendBtnClicked((prevState) => !prevState);
  };
  return (
    <div className="flex basis-1/2 flex-col gap-10 lg:px-10">
      <UserList
        selectedUserId={selectedUserId}
        userData={userData}
        handleSelectButtonClicked={handleSelectButtonClicked}
      />
      <button
        className={`button-primary ${
          isAddFriendBtnClicked && "bg-yellow-700"
        } self-center`}
        onClick={handleAddFriendClicked}
      >
        Add friend
      </button>
      {isAddFriendBtnClicked && <AddUser handleAddFriend={handleAddFriend} />}
    </div>
  );
}

export default UserBox;
