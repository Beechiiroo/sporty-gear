
const useSound = () => {
  const playAddToCartSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.volume = 1.0; // Set volume to maximum (100%)
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  };

  const playFavoriteSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
    audio.volume = 0.8;
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  };

  return { playAddToCartSound, playFavoriteSound };
};

export default useSound;
