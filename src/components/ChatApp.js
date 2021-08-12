import React from 'react';
import Chatbot from "react-chatbot-kit";
import Config from './Config';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatApp = () => {
    return (
        <div>
           <Chatbot
               config={Config}
               messageParser={MessageParser}
               actionProvider={ActionProvider} />
        </div>
    )
}

export default ChatApp;
