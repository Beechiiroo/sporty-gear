
const useSound = () => {
  // Preload audio files for better performance and reliability
  const cartSoundUrl = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';
  const favoriteSoundUrl = 'https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3';
  
  // Create audio elements only once
  const cartAudio = new Audio(cartSoundUrl);
  const favoriteAudio = new Audio(favoriteSoundUrl);
  
  // Configure audio settings
  cartAudio.volume = 1.0;
  favoriteAudio.volume = 0.8;
  
  const playAddToCartSound = () => {
    // Stop and reset before playing to ensure it works every time
    cartAudio.currentTime = 0;
    
    // Play the sound with error handling
    const playPromise = cartAudio.play();
    
    // Handle potential play() promise rejection (browser restrictions)
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Cart audio playback failed:', error);
      });
    }
  };

  const playFavoriteSound = () => {
    // Stop and reset before playing to ensure it works every time
    favoriteAudio.currentTime = 0;
    
    // Play the sound with error handling
    const playPromise = favoriteAudio.play();
    
    // Handle potential play() promise rejection (browser restrictions)
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Favorite audio playback failed:', error);
      });
    }
  };

  return { playAddToCartSound, playFavoriteSound };
};

export default useSound;
