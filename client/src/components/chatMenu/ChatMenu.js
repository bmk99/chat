import React from "react";
import Conversation from "./Conversation";

function ChatMenu({ conversations, setCurrentChat, user }) {
  return (
    <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input
          type="text"
          placeholder="Search for friends"
          className="chatMenu_Input"
        />
        <div className="chatMenu_Top">
          {conversations.map((c) => (
            <Conversation
              key={c._id}
              conversation={c}
              currentUser={user}
              handleCurrentChat={() => setCurrentChat(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatMenu;
