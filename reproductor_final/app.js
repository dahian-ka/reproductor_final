const playList = [
    {
      title: 'MIRAME',
      artist: 'BLESSD',
      img: 'https://th.bing.com/th?&id=OVP.6FQd9r6mvi14BYCE6D8G7AHgFo&w=293&h=164&c=7&pid=2.1&rs=1',
      song: '/CANCIONES/y2mate.com - BLESSD  OVY ON THE DRUMS  MÍRAME  VIDEO OFICIAL.mp3'
    },
    {
      title: 'NI TENGO NI NESECITO',
      artist: 'YEISON JIMENEZ',
      img: 'https://th.bing.com/th?&id=OVP.PLSnIBVkTLQHQAAyEOfPYAHgFo&w=308&h=172&c=7&pid=2.1&rs=1',
      song: '/CANCIONES/y2mate.com - Ni tengo ni necesito  Yeison Jiménez Letra.mp3'
    },
    {
      title: 'POR FIN TE ENCONTRE',
      artist: 'SEBASTIAN YATRA',
      img: 'https://th.bing.com/th?&id=OVF.A056uXCipq3dam%2blmDjLmA&w=308&h=172&c=7&pid=2.1&rs=1',
      song: '/CANCIONES/y2mate.com - Sebastian Yatra  Por fin te encontré  en Argentina.mp3'
    },
    {
      title: 'HAWAII',
      artist: 'MALUMA',
      img: 'https://th.bing.com/th?&id=OVP.oI-1dBhqyXXtfNmTtvWanwHgFo&w=308&h=172&c=7&pid=2.1&rs=1',
      song: '/CANCIONES/y2mate.com - Maluma  Hawái Official Video.mp3'
    },
    {
      title: 'SOLTERA',
      artist: 'SHAKIRA',
      img: 'https://th.bing.com/th?&id=OVF.nUmH5mQPxxB7pq3THxO5/w&w=308&h=172&c=7&pid=2.1&rs=1',
      song: '/CANCIONES/y2mate.com - Shakira  Soltera Official Video.mp3'
    },
  ]
  
  const audio = document.getElementById('audio');
  const audioSource = document.getElementById('audio-source');
  const albumImg = document.getElementById('album-img');
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const stop = document.getElementById('stop');
  const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
  
  let currentTrackIndex = 0;
  
  function loadTrack(index) {
    const track = playList[index];
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    albumImg.src = track.img;
    audioSource.src = track.song;
    audio.load(); 
  }
  
  function playAudio() {
    audio.play();
    play.style.display = 'none';
    pause.style.display = 'inline';
  }
  
  function pauseAudio() {
    audio.pause();
    pause.style.display = 'none';
    play.style.display = 'inline';
  }
  
  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    pause.style.display = 'none';
    play.style.display = 'inline';
  }
  
  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playList.length) % playList.length;
    loadTrack(currentTrackIndex);
    playAudio();
  }
  
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playList.length;
    loadTrack(currentTrackIndex);
    playAudio();
  }
  
  play.addEventListener('click', playAudio);
  pause.addEventListener('click', pauseAudio);
  stop.addEventListener('click', stopAudio);
  prev.addEventListener('click', prevTrack);
  next.addEventListener('click', nextTrack);
  rewind.addEventListener('click', () => audio.currentTime -= 10)
forward.addEventListener('click', () => audio.currentTime += 10)
  
  window.addEventListener('DOMContentLoaded', () => {
    loadTrack(currentTrackIndex);
    pause.style.display = 'none'; 
  });


