
const useSound = () => {
  const playAddToCartSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.volume = 0.3; // Reduce volume to 30%
    audio.play().catch((error) => {
      console.warn('Audio playback failed:', error);
    });
  };

  return { playAddToCartSound };
};

export default useSound;
