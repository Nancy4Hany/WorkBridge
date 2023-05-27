import React, { useEffect } from 'react';
import './Main.css';
import './Room.css';
import './Lobby.css';
export default function Lobby() {
  useEffect(() => {
    let form = document.getElementById('lobby__form')

    let displayName = sessionStorage.getItem('display_name')
    if(displayName){
        form.name.value = displayName
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    //lobby
        sessionStorage.setItem('display_name', e.target.name.value)
    
        let inviteCode = e.target.room.value
        if(!inviteCode){
            inviteCode = String(Math.floor(Math.random() * 10000))
        }
        // window.location = `Room.js?room=${inviteCode}`
        window.location = `./Room?room=${inviteCode}`
          })
  });
  return (
    <>
      {/* HTML code goes here */}
      <html>
        <head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <title>Room</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' type='text/css' media='screen' href='./Main.css' />
          <link rel='stylesheet' type='text/css' media='screen' href='./Lobby.css' />
        </head>
        <body>
          <header id="nav">
            <div class="nav--list">
              <a href="Lobby.js">
                <span>
                  <h3 id="logo">
                    {/* <span> <img class="pineapple" src="./Images/logo.png" alt="" />ANANAS</span> */}
                  </h3>
                </span>
              </a>
            </div>

            <div id="nav__links">
              <a class="nav__link" href="/">
                Lobby
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24">
                  <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
                </svg>
              </a>
              <a class="nav__link" id="create__room__btn" href="Lobby.js">
                Create Room
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                </svg>
              </a>
            </div>
          </header>

          <main id="room__lobby__container">
            <div id="form__container">
              <div id="form__container__header">
                <p>👋 Create or Join Room</p>
              </div>

              <form id="lobby__form">
                <div class="form__field__wrapper">
                  <label>Your Name</label>
                  <input type="text" name="name" required placeholder="Enter your display name..." />
                </div>

                <div class="form__field__wrapper">
                  <label>Room Name</label>
                  <input type="text" name="room" placeholder="Enter room name..." />
                </div>

                <div class="form__field__wrapper">
                  <button type="submit">
                    Go to Room
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </main>
        </body>
        <script type="text/javascript" src="LobbyHandler.js"></script>
      </html>
    </>
  );
}
