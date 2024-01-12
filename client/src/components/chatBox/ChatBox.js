
import React from "react";
import "./Messages.css";
import { format } from "timeago.js";
import Messages from "./Messages";

function ChatBox({ messages,user }) {
  // Group messages by date
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div>
      {groupedMessages.map((group) => (
        <div key={group.date}>
          <div className="date-header">{group.date}</div>
          {group.messages.map((message) => (
            <Messages key={message._id} message={message} own={message.senderId === user._id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function groupMessagesByDate(messages) {
  const groupedMessages = {};

  messages.forEach((message) => {
    const date = formatDate(message.createdAt);

    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }

    groupedMessages[date].push(message);
  });

  return Object.entries(groupedMessages).map(([date, messages]) => ({
    date,
    messages,
  }));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export default ChatBox;

