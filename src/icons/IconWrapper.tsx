import { ReactElement } from 'react'

import { styled } from '@/styled'
import { ColorToken, SizeToken, token } from '@/styled/tokens'

export type IconElement = (props: IconProps) => ReactElement

export type IconProps = {
  isActive?: boolean
  isHover?: boolean
  isDisabled?: boolean
  strokeColor?: ColorToken
  hoverStrokeColor?: ColorToken
  activeStrokeColor?: ColorToken
  backgroundColor?: ColorToken
  hoverBackgroundColor?: ColorToken
  activeBackgroundColor?: ColorToken
  altBackgroundColor?: ColorToken
  hoverAltBackgroundColor?: ColorToken
  activeAltBackgroundColor?: ColorToken
  accentColor?: ColorToken
  hoverAccentColor?: ColorToken
  activeAccentColor?: ColorToken
  size?: SizeToken
  children?: (props: IconProps) => React.ReactNode
}

const SVG = styled.svg

export const IconWrapper = ({
  isActive = false,
  isHover = false,
  isDisabled = false,
  size = '8',
  strokeColor = 'slate.11',
  hoverStrokeColor = 'trusty.12',
  activeStrokeColor = 'trusty.12',
  backgroundColor = 'slate.1',
  hoverBackgroundColor = 'slate.2',
  activeBackgroundColor = 'trusty.1',
  altBackgroundColor = 'slate.3',
  hoverAltBackgroundColor = 'slate.4',
  activeAltBackgroundColor = 'trusty.3',
  accentColor = 'slate.5',
  hoverAccentColor = 'slate.7',
  activeAccentColor = 'trusty.6',
  children,
  ...rest
}: IconProps) => {
  const stroke = isActive ? activeStrokeColor : isHover ? hoverStrokeColor : strokeColor
  const background = isActive
    ? activeBackgroundColor
    : isHover
    ? hoverBackgroundColor
    : backgroundColor
  const altBackground = isActive
    ? activeAltBackgroundColor
    : isHover
    ? hoverAltBackgroundColor
    : altBackgroundColor
  const accent = isActive ? activeAccentColor : isHover ? hoverAccentColor : accentColor

  return (
    <SVG
      style={{
        opacity: isDisabled ? 0.5 : 1,
        width: token(`sizes.${size}`),
        height: token(`sizes.${size}`),
        fill: 'transparent'
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children &&
        children({
          isActive,
          strokeColor: token(`colors.${stroke}`) as ColorToken,
          backgroundColor: token(`colors.${background}`) as ColorToken,
          altBackgroundColor: token(`colors.${altBackground}`) as ColorToken,
          accentColor: token(`colors.${accent}`) as ColorToken
        })}
    </SVG>
  )
}
