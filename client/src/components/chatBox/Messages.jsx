import React from "react";
import "./Messages.css";
import {format} from "timeago.js"

function Messages({message,own}) {

  return (
    <div className={own?"messages own": "messages"}>
        {own ?<>
            <div className="messages_top">

            <span className="messages_text">
              {message.text}
        </span>
            <img
          src="https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="nature"
          className="messages_image"
        />
          </div>
          <div className="messages_bottom">
        <p>{format(message.createdAt)}</p>
      </div>

        </>:<>
        <div className="messages_top">

        <img
          src="https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="nature"
          className="messages_image"
        />
        <span className="messages_text">
          {message.text}
        </span>
        </div>
        <div className="messages_bottom">
        <p>{format(message.createdAt)}</p>
      </div>

        </>}
        
      
    </div>
  );
}

export default Messages;
