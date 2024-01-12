import React, { useState } from "react";
import "./Messages.css";
import { format } from "timeago.js";

function Messages({ message, own }) {
  const messageDate = new Date(message.createdAt);
  const formattedMessageDate = formatDate(messageDate);
  const formattedMessageTime = formatTime(messageDate);
  // const [previousDate, setPreviousDate] = useState(null);

  // const showDate = !previousDate || formattedMessageDate !== previousDate;
  //  console.log(formattedMessageDate)
  // if (showDate) {
  //   setPreviousDate(formattedMessageDate);
  // }

  return (
    <div className={own ? "messages own" : "messages"}>
      <div className="chatiingBox">
        {own ? (
          <>
            <div className="messages_top">
              <span className="messages_text">{message.text}</span>
              <img
                src="https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt="nature"
                className="messages_image"
              />
            </div>
            <div className="messages_bottom">
             {/* {format(message.createdAt)} */}

             {formattedMessageTime}
            </div>
          </>
        ) : (
          <>
            <div className="messages_top">
              <img
                src="https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt="nature"
                className="messages_image"
              />
              <span className="messages_text">{message.text}</span>
            </div>
            <div className="messages_bottom">
              {formattedMessageTime}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}


export default Messages;



// --------------

// import React from "react";
// import "./Messages.css";
// import { format } from "timeago.js";

// function Messages({ messages, own }) {
//   // Group messages by date
//   const groupedMessages = groupMessagesByDate(messages);

//   return (
//     <div>
//       {groupedMessages.map((group) => (
//         <div key={group.date}>
//           <div className="date-header">{group.date}</div>
//           {group.messages.map((message) => (
//             <Message key={message._id} message={message} own={own} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// function Message({ message, own }) {
//   const messageDate = new Date(message.createdAt);
//   const formattedMessageTime = formatTime(messageDate);

//   return (
//     <div className={own ? "messages own" : "messages"}>
//       <div className="chatiingBox">
//         {own ? (
//           <>
//             <div className="messages_top">
//               <span className="messages_text">{message.text}</span>
//               <img
//                 src="https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
//                 alt="nature"
//                 className="messages_image"
//               />
//             </div>
//             <div className="messages_bottom">{formattedMessageTime}</div>
//           </>
//         ) : (
//           <>
//             <div className="messages_top">
//               <img
//                 src="https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
//                 alt="nature"
//                 className="messages_image"
//               />
//               <span className="messages_text">{message.text}</span>
//             </div>
//             <div className="messages_bottom">{formattedMessageTime}</div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// function formatTime(date) {
//   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// }

// // Function to group messages by date
// function groupMessagesByDate(messages) {
//   const groupedMessages = {};

//   messages.forEach((message) => {
//     const date = formatDate(message.createdAt);

//     if (!groupedMessages[date]) {
//       groupedMessages[date] = [];
//     }

//     groupedMessages[date].push(message);
//   });

//   return Object.entries(groupedMessages).map(([date, messages]) => ({
//     date,
//     messages,
//   }));
// }

// function formatDate(dateString) {
//   const date = new Date(dateString);
//   const day = date.getDate().toString().padStart(2, "0");
//   const month = (date.getMonth() + 1).toString().padStart(2, "0");
//   const year = date.getFullYear();
//   return `${month}/${day}/${year}`;
// }

// export default Messages;

