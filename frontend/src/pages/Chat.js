import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Chat = () => {
    // const messagesEndRef = useRef(null);

    // useEffect(() => {
    //     scrollToBottom();
    // }, []);

    // const scrollToBottom = () => {
    //     messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        // <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
        //     <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        //         <div className="relative flex items-center space-x-4">
        //             <div className="relative">
        //                 <span className="absolute text-green-500 right-0 bottom-0">
        //                     <i className="fas fa-circle"></i>
        //                 </span>
        //                 <img
        //                     src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
        //                     alt=""
        //                     className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
        //                 />
        //             </div>
        //             <div className="flex flex-col leading-tight">
        //                 <div className="text-2xl mt-1 flex items-center">
        //                     <span className="text-gray-700 mr-3">Anderson Vanhron</span>
        //                 </div>
        //                 <span className="text-lg text-gray-600">Junior Developer</span>
        //             </div>
        //         </div>

        //     </div>
        //     <div
        //         id="messages"
        //         className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        //     >
        //         <div className="chat-message">
        //             <div className="flex items-end">
        //                 <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
        //                             Can be verified on any platform using docker
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <img
        //                     src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
        //                     alt="My profile"
        //                     className="w-6 h-6 rounded-full order-1"
        //                 />
        //             </div>
        //         </div>
        //         <div className="chat-message">
        //             <div className="flex items-end justify-end">
        //                 <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
        //                             Your error message says permission denied, npm global installs must be given root privileges.
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <img
        //                     src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
        //                     alt="My profile"
        //                     className="w-6 h-6 rounded-full order-2"
        //                 />
        //             </div>
        //         </div>
        //         <div className="chat-message">
        //             <div className="flex items-end">
        //                 <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
        //                             Command was run with root privileges. I'm sure about that.
        //                         </span>
        //                     </div>
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
        //                             I've updated the description so it's more obvious now
        //                         </span>
        //                     </div>
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
        //                             FYI https://askubuntu.com/a/700266/510172
        //                         </span>
        //                     </div>
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
        //                             Check the line above (it ends with a # so, I'm running it as root)
        //                             <pre># npm install -g @vue/devtools</pre>
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <img
        //                     src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
        //                     alt="My profile"
        //                     className="w-6 h-6 rounded-full order-1"
        //                 />
        //             </div>
        //         </div>
        //         <div className="chat-message">
        //             <div className="flex items-end justify-end">
        //                 <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
        //                     <div>
        //                         <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white">
        //                             Any updates on this issue? I'm getting the same error when trying to install DevTools. Would be great if
        //                             someone could help out.
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <img
        //                     src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
        //                     alt="My profile"
        //                     className="w-6 h-6 rounded-full order-2"
        //                 />
        //             </div>
        //         </div>
        //         <div ref={messagesEndRef}></div>
        //     </div>
        //     <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        //         <div className="relative flex">
        //             <span className="absolute inset-y-0 flex items-center">
        //                 <button
        //                     type="button"
        //                     className="inline-flex items-center justify-center rounded-lg h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        //                 >
        //                     <i className="fas fa-paperclip h-6 w-6 text-gray-600"></i>
        //                 </button>
        //             </span>
        //             <input
        //                 type="text"
        //                 placeholder="Write your message!"
        //                 className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
        //             />
        //             <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
        //                 <button
        //                     type="button"
        //                     className="inline-flex items-center justify-center rounded-lg h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        //                 >
        //                     <i className="fas fa-paper-plane h-6 w-6 text-gray-600"></i>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <p className="text-center footerLocation">Soon to be Added.</p>

    );
};

export default Chat;
