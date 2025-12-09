import React, { useEffect, useState, useRef, Fragment } from 'react';
import { XIcon, FileIcon, PaperclipIcon, SmileIcon, SendIcon, MoreVerticalIcon } from 'lucide-react';
import { mockChatMessages, getRequestById } from '../../data/mockData';

const EMOJI_LIST = [   '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇',
  '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑',
  '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬',
  '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵',
  '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '😮',
  '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖',
  '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀',
  '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺', '😸', '😹', '😻',
  '😼', '😽', '🙀', '😿', '😾', '👋', '🤚', '🖐', '✋', '🖖', '👌', '🤏', '✌️',
  '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '✊',
  '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪',
  '🦾', '🦵', '🦿', '🦶', '👂', '耳', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀',
  '👁', '👅', '👄', '💋', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎',
  '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️',
  '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️',
  '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️',
  '📴', '📳', '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️',
  '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️', '🆘', '❌', '⭕️', '🛑',
  '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭',
  '❗️', '❕', '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️',
  '🔰', '♻️', '✅', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🏧',
  '🚾', '♿️', '🅿️', '🈳', '🈂️', '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '🚻',
  '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗', '🆙', '🆒',
  '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣',
  '🔟', '🔢', '#️⃣', '*️⃣', '⏏️', '▶️', '⏸', '⏯', '⏹', '⏺', '⏭', '⏮', '⏩',
  '⏪', '⏫', '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️',
  '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '🔄', '🔃', '🎵',
  '🎶', '➕', '➖', '➗', '✖️', '♾', '💲', '💱', '™️', '©️', '®️', '👁‍🗨', '🔚',
  '🔙', '🔛', '🔝', '🔜', '〰️', '➰', '➿', '✔️', '☑️', '🔘', '🔴', '🟠', '🟡',
  '🟢', '🔵', '🟣', '⚫', '⚪', '🟤', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷', '🔳',
  '🔲', '▪️', '▫️', '◾️', '◽️', '◼️', '◻️', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪',
  '⬛', '⬜', '🟫', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '💬', '💭',
  '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄️', '🕐', '🕑', '🕒', '🕓', '🕔',
  '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡',
  '🕢', '🕣', '🕤', '🕥', '🕦', '🕧' ];

export const ChatPanel = ({
  isOpen,
  requestId,
  onClose,
  onViewDetails
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockChatMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const request = requestId ? getRequestById(requestId) : null;
  const isCompleted = request?.status === 'Completed';

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'client',
      content: newMessage,
      timestamp: new Date().toISOString(),
      status: 'sent',
      type: 'text'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
    setShowEmojiPicker(false);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg => msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg)
      );

      setTimeout(() => {
        setMessages(prev =>
          prev.map(msg => msg.id === newMsg.id ? { ...msg, status: 'read' } : msg)
        );
      }, 1500);

    }, 1000);
  };

  const handleFileClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'client',
      content: '',
      timestamp: new Date().toISOString(),
      status: 'sent',
      type: 'attachment',
      fileName: file.name,
      fileSize: `${(file.size / 1024).toFixed(1)} KB`
    };

    setMessages([...messages, newMsg]);

    if (fileInputRef.current) fileInputRef.current.value = '';

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg => msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg)
      );

      setTimeout(() => {
        setMessages(prev =>
          prev.map(msg => msg.id === newMsg.id ? { ...msg, status: 'read' } : msg)
        );
      }, 1500);

    }, 1000);
  };

  const handleEmojiClick = (emoji) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleViewDetails = () => {
    setShowOptions(false);
    onViewDetails();
  };

  if (!isOpen) return null;

  const renderMessageStatus = (status) => {
    if (status === 'sent') return <span className="text-[#6B7280]">✓</span>;
    if (status === 'delivered') return <span className="text-[#6B7280]">✓✓</span>;
    if (status === 'read') return <span className="text-[#3B82F6]">✓✓</span>;
    return null;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-lg z-40 transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 flex flex-col`}>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <div className="flex items-center">
          <button onClick={onClose} className="mr-2 md:hidden">
            <XIcon className="h-5 w-5 text-gray-500" />
          </button>

          {request && (
            <>
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img src={request.notary.avatar} alt={request.notary.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-medium text-sm">{request.notary.name}</p>
                <div className="flex items-center">
                  <span className="flex h-2 w-2 mr-1">
                    <span className={`absolute inline-flex h-2 w-2 rounded-full 
                      ${request.notary.isOnline ? 'bg-green-500' : 'bg-gray-400'} animate-ping opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 
                      ${request.notary.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
                  </span>
                  <span className="text-xs text-gray-500">
                    {request.notary.isOnline ? 'Online' : 'Last seen 2h ago'}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Options */}
        <div className="relative">
          <button onClick={() => setShowOptions(!showOptions)} className="p-2 rounded-full bg-gray-100">
            <MoreVerticalIcon className="h-5 w-5" />
          </button>

          {showOptions && (
            <div className="absolute top-10 right-0 bg-white shadow-lg border rounded-xl p-1 w-48 z-50">
              <button onClick={handleViewDetails} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
                <FileIcon className="h-4 w-4" /> View Request Details
              </button>
            </div>
          )}

          <button onClick={onClose} className="p-2 hidden md:block text-gray-500">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 bg-gray-100">
        {isCompleted && (
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
              Session Completed
            </div>
          </div>
        )}

        {messages.map((message, index) => {
          const isClient = message.sender === 'client';
          const showTimestamp =
            index === 0 ||
            new Date(message.timestamp).getDate() !== new Date(messages[index - 1].timestamp).getDate();

          return (
            <Fragment key={message.id}>
              {showTimestamp && (
                <div className="flex justify-center my-2">
                  <span className="text-xs text-gray-500">
                    {new Date(message.timestamp).toLocaleDateString()}
                  </span>
                </div>
              )}

              <div className={`flex ${isClient ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm 
                    ${isClient ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>

                  {message.type === 'attachment' ? (
                    <div>
                      <div className="bg-gray-100 rounded-lg p-2 mb-1">
                        <div className="flex items-center">
                          <div className="bg-gray-200 rounded p-1 mr-2">
                            <FileIcon className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">{message.fileName}</p>
                            <p className="text-xs text-gray-500">{message.fileSize}</p>
                          </div>
                        </div>
                      </div>
                      {message.content && <p className="text-sm mt-1">{message.content}</p>}
                    </div>
                  ) : (
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  )}
                </div>
              </div>

              <div className={`flex ${isClient ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                  {isClient && renderMessageStatus(message.status)}
                </div>
              </div>
            </Fragment>
          );
        })}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Message Composer */}
      <div className="px-4 py-3 border-t bg-white">
        {isCompleted ? (
          <div className="text-center text-gray-500 text-sm">
            This session is completed. You can no longer send messages.
          </div>
        ) : (
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2 relative">
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />

            <button type="button" onClick={handleFileClick} className="p-2 text-gray-600">
              <PaperclipIcon className="h-5 w-5" />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full py-2 px-4 bg-gray-100 border rounded-full pr-10"
                placeholder="Type a message..."
              />

              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              >
                <SmileIcon className="h-5 w-5" />
              </button>

              {showEmojiPicker && (
                <div className="absolute bottom-12 right-0 bg-white shadow-xl border rounded-xl p-2 grid grid-cols-6 gap-2 w-64 max-h-60 overflow-y-auto">
                  {EMOJI_LIST.map((emoji) => (
                    <button key={emoji} type="button" onClick={() => handleEmojiClick(emoji)} className="text-2xl p-1 hover:bg-gray-100 rounded">
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={!newMessage.trim()}
              className={`p-2 rounded-full ${newMessage.trim() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
