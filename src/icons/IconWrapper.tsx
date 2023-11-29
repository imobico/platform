import { styled } from '@/styled'
import { ColorToken, SizeToken, token } from '@/styled/tokens'

export type IconProps = {
  isActive?: boolean
  strokeColor?: ColorToken
  backgroundColor?: ColorToken
  accentColor?: ColorToken
  activeStrokeColor?: ColorToken
  activeBackgroundColor?: ColorToken
  activeAccentColor?: ColorToken
  size?: SizeToken
  children?: (props: IconProps) => React.ReactNode
}

const SVG = styled.svg

export const IconWrapper = ({
  isActive = false,
  size = '8',
  strokeColor = 'slate.11',
  activeStrokeColor = 'trusty.12',
  backgroundColor = 'slate.2',
  activeBackgroundColor = 'trusty.2',
  accentColor = 'slate.2',
  activeAccentColor = 'trusty',
  children,
  ...rest
}: IconProps) => {
  const stroke = isActive ? activeStrokeColor : strokeColor
  const background = isActive ? activeBackgroundColor : backgroundColor
  const accent = isActive ? activeAccentColor : accentColor

  return (
    <SVG
      style={{ width: token(`sizes.${size}`), height: token(`sizes.${size}`), fill: 'transparent' }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children &&
        children({
          isActive,
          strokeColor: token(`colors.${stroke}`) as ColorToken,
          backgroundColor: token(`colors.${background}`) as ColorToken,
          accentColor: token(`colors.${accent}`) as ColorToken
        })}
    </SVG>
  )
}
