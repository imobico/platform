import { Player } from '@lottiefiles/react-lottie-player'

import successAnimation from '@/public/successAnimation.json'

export const SuccessfulOnboardingAnimation = () => (
  <Player
    autoplay
    loop={false}
    speed={0.8}
    keepLastFrame={true}
    src={successAnimation}
    style={{ height: '200px', width: '200px' }}
  />
)
