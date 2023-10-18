import React from 'react'
import useSound from 'use-sound';

function Sample() {

  const currentDuration = sound.seek();

// Convert seconds to minutes and seconds
const minutes = Math.floor(currentDuration / 60);
const seconds = Math.floor(currentDuration % 60);

    const [result , controller] = useSound('https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e447ae38c3e33a7253.mp3', {
        onPlay: () => console.log('Audio started playing'),
        onPause: () => console.log('Audio paused'),
      });
      const { play, setLoop , loop } = result;
      const { pause, stop, isPlaying, seek, currentTime, duration } = controller;

      console.log(currentTime , duration , isPlaying)

      
      const handlePlayFromStart = () => {
        seek(0); // Set the playback position to the start (0 seconds)
        play();
      };

      const handlePlay = () => {
        play();
      };
    
      const handlePause = () => {
        pause();
      };
    
      const handleStop = () => {
        stop();
      };
    
      const handleSeekToStart = () => {
        seek(0); // Seek to the start (0 seconds)
      };


      // Initialize Howler.js with audio sources
const sound = new Howl({
    src: ['audio.mp3', 'audio.ogg'],
    preload: true, // Preload audio for immediate playback
    autoplay: true, // Start playing audio automatically
    volume: 0.5, // Set initial volume to 50%
    loop: true, // Enable looping
    onload: () => {
      console.log('Audio loaded and ready to play');
    },
    onend: () => {
      console.log('Audio playback ended');
    },
  });

  console.log(typeOf , sound)
  
  // Play the audio
  sound.play();
  
  // Pause the audio after 3 seconds
  setTimeout(() => {
    sound.pause();
  }, 3000);
  
  // Resume audio after 6 seconds
  setTimeout(() => {
    sound.play();
  }, 6000);
  
  // Mute audio after 9 seconds
  setTimeout(() => {
    sound.mute(true);
  }, 9000);
  
  // Unmute audio after 12 seconds
  setTimeout(() => {
    sound.mute(false);
  }, 12000);
  
  // Adjust volume to 80% after 15 seconds
  setTimeout(() => {
    sound.volume(0.8);
  }, 15000);
  
  // Fade volume from 80% to 20% over 5 seconds after 18 seconds
  setTimeout(() => {
    sound.fade(0.8, 0.2, 5000);
  }, 18000);
  
  // Seek to a specific position (10 seconds) after 21 seconds
  setTimeout(() => {
    sound.seek(10);
  }, 21000);
  
  // Stop audio playback after 24 seconds
  setTimeout(() => {
    sound.stop();
  }, 24000);
  
  // Loop the audio after 27 seconds
  setTimeout(() => {
    sound.loop(true);
  }, 27000);
  
  // Get the duration of the audio
  console.log('Audio duration (seconds):', sound.duration());
  
  // Event listeners
  sound.on('play', () => {
    console.log('Audio playback started');
  });
  
  sound.on('pause', () => {
    console.log('Audio playback paused');
  });
  
  sound.on('stop', () => {
    console.log('Audio playback stopped');
  });
  
  sound.on('mute', (muted) => {
    console.log('Audio is muted:', muted);
  });
  
  sound.on('volume', (volume) => {
    console.log('Volume is set to:', volume);
  });
  
  sound.on('end', () => {
    console.log('Audio has finished playing');
  });
  
  return (
    <div>Sample</div>
  )
}

export default Sample