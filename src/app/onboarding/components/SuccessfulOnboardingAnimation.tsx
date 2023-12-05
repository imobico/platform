import { Player } from '@lottiefiles/react-lottie-player'

import successAnimation from '@/public/successAnimation.json'

export const SuccessfulOnboardingAnimation = () => (
  <Player
    autoplay
    loop={false}
    speed={1}
    keepLastFrame={true}
    src={successAnimation}
    style={{ height: '200px', width: '200px' }}
  />
)

export default SuccessfulOnboardingAnimation
