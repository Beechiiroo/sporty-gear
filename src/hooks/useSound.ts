
const useSound = () => {
  const playAddToCartSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.volume = 1.0; // Set volume to maximum (100%)
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  };

  return { playAddToCartSound };
};

export default useSound;
