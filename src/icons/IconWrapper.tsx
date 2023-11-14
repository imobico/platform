import { styled } from '@/styled'
import { ColorToken, SizeToken, token } from '@/styled/tokens'

export type IconProps = {
  color: ColorToken
  secondaryColor?: ColorToken
  size: SizeToken
  children?: React.ReactNode
}

const SVG = styled.svg

export const IconWrapper = ({ size, children, ...rest }: IconProps) => {
  return (
    <SVG
      style={{ width: token(`sizes.${size}`), height: token(`sizes.${size}`), fill: 'transparent' }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </SVG>
  )
}
