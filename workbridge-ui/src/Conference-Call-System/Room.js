import React from 'react';
import './Main.css';
import './Room.css';
import './Lobby.css';
import AgoraRTC from 'agora-rtc-sdk-ng'; 

// import {Package} from './Agora-rtm-sdk-1.4.4'; 

// import AgoraRTC from './AgoraRTC_N-4.17.2';
// import AgoraRTM from './Agora-rtm-sdk-1.4.4';
// import RoomHandler from './RoomHandler';
// import Room_rtm from './Room_rtm';
// import Room_rtc from './Room_rtc';
// import { useEffect } from 'react';
// import ScriptTag from 'react-script-tag';
// import { AddLibrary } from './ScriptLoader';
import { useEffect, useState } from 'react';

export default function Room() {
  // const AgoraRtmSdk = require('./Agora-rtm-sdk-1.4.4');
  // const AgoraRTC = require('./AgoraRTC_N-4.17.2');
  // const RoomHandler = require('./RoomHandler'); 
  // const Room_rtm = require('./Room_rtm');
  // const Room_rtc = require('./Room_rtc');
  // const LobbyHandler = require('./LobbyHandler'); 
  // const [room, setRoom] = React.useState(null);
  // const [roomHandler, setRoomHandler] = React.useState(null);
  // const [room_rtm, setRoom_rtm] = React.useState(null);
  // const [room_rtc, setRoom_rtc] = React.useState(null);
  // const [agoraRtmSdk, setAgoraRtmSdk] = React.useState(null);
  
  // useEffect(() => {
  //   // Import the library using CommonJS syntax
  //   const AgoraRtmSdk = require('./Agora-rtm-sdk-1.4.4');

  //   // Set the SDK instance in the state
  //   setAgoraRtmSdk(AgoraRtmSdk);

  //   // Clean up the SDK instance on component unmount (optional)
  //   return () => {
  //     setAgoraRtmSdk(null);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Example usage of the imported SDK
  //   if (agoraRtmSdk) {
  //     // Initialize the SDK
  //     const client = agoraRtmSdk.createInstance();

  //     // Other SDK operations...
  //     // ...

  //     // Set the room or other variables as needed
  //     setRoom(client);
  //     setRoomHandler(client.getRtmCallManager());
  //     setRoom_rtm(client.getRtmManager());
  //     setRoom_rtc(client.getRtcManager());
  //   }
  // }, [agoraRtmSdk]);
  // useEffect(() => {
  //   const scriptPaths = [
  //     './AgoraRTC_N-4.17.2.js',
  //     './Agora-rtm-sdk-1.4.4.js',
  //     './RoomHandler.js',
  //     './Room_rtm.js',
  //     './Room_rtc.js',
  //   ];

  //   const loadScripts = () => {
  //     scriptPaths.forEach((path) => {
  //       const script = document.createElement('script');
  //       script.src = path;
  //       script.async = false;
  //       document.body.appendChild(script);
  //     });
  //   };

  //   loadScripts();

  //   return () => {
  //     // Cleanup: remove the dynamically added scripts
  //     scriptPaths.forEach((path) => {
  //       const script = document.querySelector(`script[src="${path}"]`);
  //       if (script) {
  //         document.body.removeChild(script);
  //       }
  //     });
  //   };
  // }, []);
 
  // const result = Package(); 
   return (

    <React.Fragment>


      <head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title>Room</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' type='text/css' media='screen' href='Main.css' />
        <link rel='stylesheet' type='text/css' media='screen' href='Room.css' />
      </head>
      <body>
        <header id='nav'>
          <div className='nav--list'>
            <button id='members__button'>
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'>
                <path d='M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z' fill='#ede0e0' />
                <path d='M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z' />
              </svg>
            </button>
            <a href='./Lobby'>
              <h3 id='logo'>
                <span>
                  {/* <img className='pineapple' src='./Images/logo.png' alt='' /> */}
                  WorkBridge
                </span>
              </h3>
            </a>
            <span></span>
          </div>

          <div id='nav__links'>
            <button id='chat__button'>
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' fill='#ede0e0' clip-rule='evenodd'>
                <path d='M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-15.667-6l-5.333 4v-4h-3v-14.001l18 .001v14h-9.667zm-6.333-2h3v2l2.667-2h8.333v-10l-14-.001v10.001z' />
              </svg>
            </button>
            {/* <a className='nav__link' href='/'>
              Lobby
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#ede0e0' viewBox='0 0 24 24'>
                <path d='M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z' />
              </svg>
            </a> */}
            <a className='nav__link' id='create__room__btn' href='./Lobby'>
              Create Room
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#ede0e0' viewBox='0 0 24 24'>
                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z' />
              </svg>
            </a>
          </div>
        </header>

        <main className='container'>
          <div id='room__container'>
            <section id='members__container'>
              <div id='members__header'>
                <p>Participants</p>
                <strong id='members__count'>0</strong>
              </div>

              <div id='member__list'>
                {/* <div className='member__wrapper' id='member__1__wrapper'>
                  <span className='green__icon'></span>
                  <p className='member_name'>Sulammita</p>
                </div> */}
              </div>
            </section>

            <section id='stream__container'>
              <div id='stream__box'></div>
              <div id='streams__container'>
                <div className='video__container' id='user-container-1'>
                  <h1 style={{ display: 'none' }}>1</h1>
                </div>

                <div className='video__container' id='user-container-2'>
                  <h1 style={{ display: 'none' }}>2</h1>
                </div>
              </div>

              <div className='stream__actions'>
                <button id='camera-btn' className='active'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path d='M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z' />
                  </svg>
                  <div className='indicator'></div>
                </button>

                <button id='mic-btn' className='active'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path d='M12 2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2v-7c0-1.103.897-2 2-2zm0-2c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4s4-1.791 4-4v-7c0-2.209-1.791-4-4-4zm8 9v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z' />
                  </svg>
                  <div className='indicator'></div>
                </button>

                <button id='screen-btn'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path d='M0 1v17h24v-17h-24zm22 15h-20v-13h20v13zm-6.599 4l2.599 3h-12l2.599-3h6.802z' />
                  </svg>
                </button>

                <button id='leave-btn'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path d='M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z' />
                  </svg>
                </button>
              </div>
            </section>

            <section id='messages__container'>
              <div id='messages'>
                <div className='message__wrapper'>
                  <div className='message__body__bot'>
                    <strong className='message__author__bot'>🤖 ANANAS Bot</strong>
                    <p className='message__text__bot'>Welcome to the room, Don't be shy, say hello!</p>
                  </div>
                </div>
              </div>

              <form id='message__form'>
                <input type='text' name='message' placeholder='Send a message....' />
              </form>
            </section>
          </div>
        </main>
        </body>
        {/* AddLibrary('AgoraRTC_N-4.17.2.js');
        AddLibrary('Agora-rtm-sdk-1.4.4.js');
        AddLibrary('RoomHandler.js');
        AddLibrary('Room_rtm.js');
        AddLibrary('Room_rtc.js'); */}

        {/* <script type="text/javascript" src="AgoraRTC_N-4.17.2.js"></script>
        <script type="text/javascript" src="Agora-rtm-sdk-1.4.4.js"></script>
        <script type="text/javascript" src="RoomHandler.js"></script>
        <script type="text/javascript" src="Room_rtm.js"></script>
        <script type="text/javascript" src="Room_rtc.js"></script> */}
        </React.Fragment>    
    );
  }
