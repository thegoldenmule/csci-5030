const parseChatPayload = payload => {
    // ?
};

const parsePresencePayload = payload => {
    // ?
};

const messages = document.getElementById('container');

socket.on('chat', payload => {
    const { senderName, time, message, } = parseChatPayload(payload);
    const item = document.createElement('li');
    item.textContent = `${senderName} - ${time}: ${message}`;
    messages.appendChild(item);
});

socket.on('presence', payload => {
    const { senderName, isJoining, } = parsePresencePayload(payload);
    const verb = isJoining ? 'joined' : 'left';

    const item = document.createElement('li');
    item.textContent = `${senderName} ${verb} the chat.`;
    messages.appendChild(item);
});
