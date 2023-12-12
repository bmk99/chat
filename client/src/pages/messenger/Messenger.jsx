import React, { useContext, useEffect, useState, useRef } from "react";
import "./Messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/chatMenu/Conversation";
import Messages from "../../components/chatBox/Messages";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import { io } from "socket.io-client";

function Messenger() {
  const { user } = useContext(AuthContext);
  const scroolRef = useRef();

  console.log({ user });

  const [conversations, setConversations] = useState([]);
  const [currentChat, SetCurrentChat] = useState(null);
  const [messages, SetMessages] = useState([]);
  const [text, setText] = useState("");
  const [socket, setSocket] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log({ conversations });
  // console.log({ currentChat });
  // console.log({ messages });
  useEffect(()=>{
    setSocket(io("ws://localhost:8000"))

  })

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get("/conversations/get/" + user._id);
        console.log(res);
        setConversations(res.data);
      };
      getData();
    } catch (err) {
      console.log({ err });
    }
  }, [user._id]);

  useEffect(() => {
    try {
      if (currentChat) {
        const getMessages = async () => {
          const res = await axios.get("/messages/get/" + currentChat._id);
          console.log({ res });
          SetMessages(res.data);
        };
        getMessages();
      }
    } catch (err) {
      console.log(err);
    }
  }, [currentChat]);

  console.log({ currentChat });
  console.log({ messages });
  const handleSendMessage = async (e) => {
    e.preventDefault();
    const inputs = {
      conversationId: currentChat._id,
      senderId: user._id,
      text: text,
    };
    try {
      setLoading(true);
      setText("");
      const res = await axios.post("/messages/new", inputs);
      console.log(res);
      SetMessages([...messages, res.data]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // for scrollin the last message
  useEffect(() => {
    scroolRef.current?.scrollIntoView({ behaviour: "smooth" });
  });
  console.log({ text });
  console.log("-----------------------");
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="search for the friends"
              className="chatMenu_Input"
            />
            <div className="chatMenu_Top">
              {conversations.map((c) => (
                <div onClick={() => SetCurrentChat(c)}>
                  <Conversation
                    key={c._id}
                    conversation={c}
                    currentUser={user}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBox_Top">
                  {messages.map((m) => (
                    <div className="div" ref={scroolRef}>
                      <Messages
                        key={m._id}
                        message={m}
                        own={m.senderId === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBox_Bottom">
                  <textarea
                    name="text"
                    value={text}
                    id=""
                    placeholder="send the text"
                    className="chatBoxBottom_input"
                    onChange={(e) => setText(e.target.value)}
                    cols="20"
                    rows="2"
                  ></textarea>
                  {loading ? <ClockLoader color="#36d7b7" size={30} /> : null}
                  <button className="button1" onClick={handleSendMessage}>
                    send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a New Chat for Conversation
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">{/* <ChatOnline /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
