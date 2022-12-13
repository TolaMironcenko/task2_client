const host = 'http://127.0.0.1:8000'
const prefix = 'api'

// eslint-disable-next-line
export default {
    chats: () => [host, prefix, 'chatbot', 'chats', ''].join('/'),
    send_message: () => [host, prefix, 'chatbot', 'send_to_telegram', ''].join('/')
}