import React, { useEffect } from 'react';
import './Main.css';
import './Room.css';
import './Lobby.css';
import AgoraRTC from 'agora-rtc-sdk-ng'; 
// import { createChannel, createClient, RtmMessage } from 'agora-rtm-react'
import AgoraRTM from 'agora-rtm-react';



export default function Room() {
    useEffect(() => {
        
        const APP_ID = "92a5df8598284ec6bff6e67eb559a0e5";
// token
let uid = sessionStorage.getItem('uid');
if(!uid){
    uid = String(Math.floor(Math.random()*10000));
    sessionStorage.setItem('uid',uid);
}
let token = null; 
let client; 

let rtmClient; 
let channel; 
//room.html?room=1234

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let roomId = urlParams.get('room');
if(!roomId){
    roomId = 'main';
}
let displayName = sessionStorage.getItem('display_name')
if(!displayName){
    window.location = 'Lobby'
}
let LocalTracks = [];
let remoteUsers = {};

let localScreenTracks; 
let sharingScreen = false; 

let joinRoomIunit = async () => {

rtmClient = await AgoraRTM.createInstance(APP_ID)
await rtmClient.login({uid,token})
await rtmClient.addOrUpdateLocalUserAttributes({'name':displayName})
let handleMemberJoined = async (MemberId) => {
    console.log('A new member has joined the room:', MemberId)
    addMemberToDom(MemberId)

    let members = await channel.getMembers()
    updateMemberTotal(members)

    let {name} = await rtmClient.getUserAttributesByKeys(MemberId, ['name'])
    addBotMessageToDom(`Welcome to the room ${name}! 👋`)
}

let addMemberToDom = async (MemberId) => {
    let {name} = await rtmClient.getUserAttributesByKeys(MemberId, ['name'])

    let membersWrapper = document.getElementById('member__list')
    let memberItem = `<div class="member__wrapper" id="member__${MemberId}__wrapper">
                        <span class="green__icon"></span>
                        <p class="member_name">${name}</p>
                    </div>`

    membersWrapper.insertAdjacentHTML('beforeend', memberItem)
}



let updateMemberTotal = async (members) => {
    let total = document.getElementById('members__count')
    total.innerText = members.length
}
 
let handleMemberLeft = async (MemberId) => {
    removeMemberFromDom(MemberId)

    let members = await channel.getMembers()
    updateMemberTotal(members)
}

let removeMemberFromDom = async (MemberId) => {
    let memberWrapper = document.getElementById(`member__${MemberId}__wrapper`)
    let name = memberWrapper.getElementsByClassName('member_name')[0].textContent
    addBotMessageToDom(`${name} has left the room.`)
        
    memberWrapper.remove()
}

let getMembers = async () => {
    let members = await channel.getMembers()
    updateMemberTotal(members)
    for (let i = 0; members.length > i; i++){
        addMemberToDom(members[i])
    }
}

let handleChannelMessage = async (messageData, MemberId) => {
    console.log('A new message was received')
    let data = JSON.parse(messageData.text)

    if(data.type === 'chat'){
        addMessageToDom(data.displayName, data.message)
    }

    if(data.type === 'user_left'){
        document.getElementById(`user-container-${data.uid}`).remove()

        if(userIdInDisplayFrame === `user-container-${uid}`){
            displayFrame.style.display = null
    
            for(let i = 0; videoFrames.length > i; i++){
                videoFrames[i].style.height = '300px'
                videoFrames[i].style.width = '300px'
            }
        }
    }
}

let sendMessage = async (e) => {
    e.preventDefault()

    let message = e.target.message.value
    channel.sendMessage({text:JSON.stringify({'type':'chat', 'message':message, 'displayName':displayName})})
    addMessageToDom(displayName, message)
    e.target.reset()
}

let addMessageToDom = (name, message) => {
    let messagesWrapper = document.getElementById('messages')

    let newMessage = `<div class="message__wrapper">
                        <div class="message__body">
                            <strong class="message__author">${name}</strong>
                            <p class="message__text">${message}</p>
                        </div>
                    </div>`

    messagesWrapper.insertAdjacentHTML('beforeend', newMessage)

    let lastMessage = document.querySelector('#messages .message__wrapper:last-child')
    if(lastMessage){
        lastMessage.scrollIntoView()
    }
}


let addBotMessageToDom = (botMessage) => {
    let messagesWrapper = document.getElementById('messages')

    let newMessage = `<div class="message__wrapper">
                        <div class="message__body__bot">
                            <strong class="message__author__bot">🤖 ANANAS Bot</strong>
                            <p class="message__text__bot">${botMessage}</p>
                        </div>
                    </div>`

    messagesWrapper.insertAdjacentHTML('beforeend', newMessage)

    let lastMessage = document.querySelector('#messages .message__wrapper:last-child')
    if(lastMessage){
        lastMessage.scrollIntoView()
    }
}

let leaveChannel = async () => {
    await channel.leave()
    await rtmClient.logout()
}

window.addEventListener('beforeunload', leaveChannel)
let messageForm = document.getElementById('message__form')
messageForm.addEventListener('submit', sendMessage)
channel = await rtmClient.createChannel(roomId)
await channel.join()
channel.on('MemberJoined', handleMemberJoined)
channel.on('MemberLeft', handleMemberLeft)
channel.on('ChannelMessage', handleChannelMessage)
getMembers()
// #
addBotMessageToDom(`Welcome to the room ${displayName}! 👋`)
//hena 3ady
    client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'});
   

    //will be in the use effect in the function before the return
    client.on('user-published', handleUserPublished);
    client.on('user-left', handleUserLeft);
    await client.join(APP_ID, roomId, token, uid);
    joinStream();
};

//fo2 3ady w bytndh 3leha fel function bt3t l useEffect
let joinStream = async () => {
  LocalTracks = await AgoraRTC.createMicrophoneAndCameraTracks({camera: true, microphone: true}, {
    encoderConfig: {
      width: { min: 1280, ideal: 1280, max: 1280 },
      height: { min: 720, ideal: 720, max: 720 },
      frameRate: { min: 30, ideal: 30, max: 30 }
    }
  });

  //da fel use effects 
  let player = `<div class="video__container" id="user-container-${uid}">
    <div class="video-player" id="user-${uid}"></div>
  </div>`;

  document.getElementById('streams__container').insertAdjacentHTML('beforeend',player);
  document.getElementById(`user-container-${uid}`).addEventListener('click', expandVideoFrame);

  LocalTracks[1].play(`user-${uid}`);
  await client.publish([LocalTracks[0], LocalTracks[1]]);
};

//tmam


let handleUserPublished = async (user, mediaType) => {

    remoteUsers[user.uid] = user;

    await client.subscribe(user, mediaType);

    let player = document.getElementById(`user-container-${user.uid}`);
    if(player === null){
        player = `<div class="video__container" id="user-container-${user.uid}">
        <div class="video-player" id="user-${user.uid}"></div>
        </div>`;
        document.getElementById('streams__container').insertAdjacentHTML('beforeend',player);
        document.getElementById(`user-container-${user.uid}`).addEventListener('click', expandVideoFrame);
    }

    if(displayFrame.style.display){
       let videoFrame = document.getElementById(`user-container-${user.uid}`)
        videoFrame.style.height = '100px';
        videoFrame.style.width = '100px';
    }
    if(mediaType === 'video'){
        user.videoTrack.play(`user-${user.uid}`);
    }
    if(mediaType === 'audio'){
        user.audioTrack.play();
    }
};

let handleUserLeft = async (user)=>{

    delete remoteUsers[user.uid];
    document.getElementById(`user-container-${user.uid}`).remove();

    if(userIdInDisplayFrame === `user-container-${user.uid}` ){
        displayFrame.style.display = null;
        let videoFrames = document.getElementsByClassName('video__container');

        for(let i=0; videoFrames.length>i;i++){
            videoFrames[i].style.height = '300px';
            videoFrames[i].style.width = '300px';
        }
    }
};

let toggleMic = async (e) =>{
    let button = e.currentTarget;
    if(LocalTracks[0].muted){
        await LocalTracks[0].setMuted(false);
        button.classList.add('active');
    }
    else{
        await LocalTracks[0].setMuted(true);
        button.classList.remove('active');
    }
};



let toggleCamera = async (e) =>{
    let button = e.currentTarget;
    if(LocalTracks[1].muted){
        await LocalTracks[1].setMuted(false);
        button.classList.add('active');
    }
    else{
        await LocalTracks[1].setMuted(true);
        button.classList.remove('active');
        const mediaStream = LocalTracks[1].mediaStream;
        const tracks = mediaStream.getVideoTracks();
        tracks.forEach(track => track.enabled = false);
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoTrack = stream.getVideoTracks()[0];
        videoTrack.stop();
    }
    
};



let toggleScreen = async (e) => {
    let screenButton = e.currentTarget;
    let cameraButton = document.getElementById('camera-btn');

    if(!sharingScreen){
        sharingScreen = true;

        screenButton.classList.add('active');
        cameraButton.classList.remove('active');
        cameraButton.style.display = 'none';

        localScreenTracks = await AgoraRTC.createScreenVideoTrack();

        document.getElementById(`user-container-${uid}`).remove();
        displayFrame.style.display = 'block';

        let player = `<div class="video__container" id="user-container-${uid}">
                <div class="video-player" id="user-${uid}"></div>
            </div>`;

        displayFrame.insertAdjacentHTML('beforeend', player);
        document.getElementById(`user-container-${uid}`).addEventListener('click', expandVideoFrame);

        userIdInDisplayFrame = `user-container-${uid}`;
        localScreenTracks.play(`user-${uid}`);

        await client.unpublish([LocalTracks[1]]);
        await client.publish([localScreenTracks]);

        let videoFrames = document.getElementsByClassName('video__container');
        for(let i = 0; videoFrames.length > i; i++){
            if(videoFrames[i].id !== userIdInDisplayFrame){
              videoFrames[i].style.height = '100px';
              videoFrames[i].style.width = '100px';
            }
        }

    }else{
        sharingScreen = false;
        cameraButton.style.display = 'block';
        screenButton.classList.remove('active');
        localScreenTracks.stop();
        await client.unpublish([localScreenTracks]);
        await client.publish([LocalTracks[1]]);
        displayFrame.style.display = null;

        let videoFrames = document.getElementsByClassName('video__container');
        for(let i = 0; videoFrames.length > i; i++){
            videoFrames[i].style.height = '300px';
            videoFrames[i].style.width = '300px';
        }

        let player = `<div class="video__container" id="user-container-${uid}">
            <div class="video-player" id="user-${uid}"></div>
        </div>`;
        document.getElementById('streams__container').insertAdjacentHTML('beforeend', player);
        document.getElementById(`user-container-${uid}`).addEventListener('click', expandVideoFrame);
        LocalTracks[1].play(`user-${uid}`);
        await client.unpublish([localScreenTracks]);
        await client.publish([LocalTracks[1]]);
    }
};


document.getElementById('camera-btn').addEventListener('click',toggleCamera);
document.getElementById('mic-btn').addEventListener('click',toggleMic);
document.getElementById('screen-btn').addEventListener('click', toggleScreen)

const micBtn = document.getElementById('mic-btn');
const cameraBtn = document.getElementById('camera-btn');
const micIndicator = micBtn.querySelector('.indicator');
const cameraIndicator = cameraBtn.querySelector('.indicator');

micBtn.addEventListener('click', () => {
  const muted = LocalTracks[0].muted;
  if (muted) {
    micIndicator.style.display = 'block';
  } else {
    micIndicator.style.display = 'none';
  }
});

cameraBtn.addEventListener('click', () => {
  const muted = LocalTracks[1].muted;
  if (muted) {
    cameraIndicator.style.display = 'block';
  } else {
    cameraIndicator.style.display = 'none';
  }
});

joinRoomIunit();
let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});
let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null ; 

let expandVideoFrame = (e)=> {
  let child = displayFrame.children[0]
  if(child){
     document.getElementById ('streams__container').appendChild(child)
  }

  displayFrame.style.display = 'block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget.id

  for(let i=0; videoFrames.length >i; i++){

   if(videoFrames[i].id!== userIdInDisplayFrame){
    videoFrames[i].style.height = '100px '
    videoFrames[i].style.width = '100px '
   }
  }
}

for(let i=0; videoFrames.length >i; i++){

  videoFrames[i].addEventListener('click',expandVideoFrame)
}

let hideDisplayFrame = () => {
  userIdInDisplayFrame = null 
  displayFrame.style.display = null 
  let child = displayFrame.children[0]
  document.getElementById('streams__container').appendChild(child)
  
  for(let i=0; videoFrames.length >i; i++){

    videoFrames[i].style.height = '300px'
    videoFrames[i].style.width = '300px'
    
  }
}


    })
    
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
    )
}



