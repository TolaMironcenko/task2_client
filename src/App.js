import './css/App.css';
import Chat from "./components/Chat";
import Chatlist from "./components/Chatlist";
import {useEffect, useState} from "react";
import routes from "./routes";

function App() {
    const [chats, setChats] = useState([])
    const [activeChat, setActiveChat] = useState(undefined)

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(routes.chats(), {
            })
                .then(res => res.json())
                .then(result => {
                    setChats(result)
                    console.log(chats)
                })
          }, 500);
          return () => clearInterval(interval);
    }, [])

    return (
        <div className="App">
          <Chatlist chats={chats} setActiveChat={setActiveChat} activeChat={activeChat}/>
          <Chat activeChat={activeChat} setChats={setChats} chats={chats}/>
        </div>
    );
}

export default App;
