import './css/App.css';
import Chat from "./components/Chat";
import Chatlist from "./components/Chatlist";
import {useEffect, useState} from "react";
import routes from "./routes";

function App() {
    const [chats, setChats] = useState([])
    const [activeChat, setActiveChat] = useState(undefined)

    useEffect(() => {
        fetch(routes.chats(), {
        })
            .then(res => res.json())
            .then(result => {
                setChats(result)
                console.log(chats)
            })
    }, [])

    return (
        <div className="App">
          <Chatlist chats={chats} setActiveChat={setActiveChat} activeChat={activeChat}/>
          <Chat/>
        </div>
    );
}

export default App;
