
const playList = [
    {
      title: 'MIRAME',
      artist: 'BLESSD',
      img: 'https://th.bing.com/th?&id=OVP.6FQd9r6mvi14BYCE6D8G7AHgFo&w=293&h=164&c=7&pid=2.1&rs=1',
      song: 'https://www.bing.com/videos/riverview/relatedvideo?&q=blessd&&mid=C83441786AAA195A798EC83441786AAA195A798E&&mcid=2AA6050D51614FCF8E4149440C86C07A&FORM=VRDGAR'
    },
    {
      title: 'NI TENGO NI NESECITO',
      artist: 'YEISON JIMENEZ',
      img: 'https://th.bing.com/th?&id=OVP.PLSnIBVkTLQHQAAyEOfPYAHgFo&w=308&h=172&c=7&pid=2.1&rs=1',
      song: 'https://www.bing.com/videos/riverview/relatedvideo?&q=yeison+jim%c3%a9nez&&mid=EF421438B8B806EE6A13EF421438B8B806EE6A13&&mcid=F128BB41EFA94E66A9FDCA55481FE66D&FORM=VRDGAR'
    },
    {
      title: 'POR FIN TE ENCONTRE',
      artist: 'SEBASTIAN YATRA',
      img: 'https://th.bing.com/th?&id=OVF.A056uXCipq3dam%2blmDjLmA&w=308&h=172&c=7&pid=2.1&rs=1',
      song: 'https://www.bing.com/videos/riverview/relatedvideo?&q=sebasti%c3%a1n+yatra&&mid=4E0E694239F310C9918D4E0E694239F310C9918D&&mcid=434B4C7EDC594BB681408FF528F59B90&FORM=VRDGAR'
    },
    {
      title: 'HAWAII',
      artist: 'MALUMA',
      img: 'https://th.bing.com/th?&id=OVP.oI-1dBhqyXXtfNmTtvWanwHgFo&w=308&h=172&c=7&pid=2.1&rs=1',
      song: 'https://www.bing.com/videos/riverview/relatedvideo?&q=maluma&&mid=841C21D960AFE116CEB4841C21D960AFE116CEB4&&mcid=CF627B166A4C4CA1B9AA99437F271C43&FORM=VRDGAR'
    },
    {
      title: 'SOLTERA',
      artist: 'SHAKIRA',
      img: 'https://th.bing.com/th?&id=OVF.nUmH5mQPxxB7pq3THxO5/w&w=308&h=172&c=7&pid=2.1&rs=1',
      song: "/CANCIONES/y2mate.com - Shakira  Soltera Official Video"
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