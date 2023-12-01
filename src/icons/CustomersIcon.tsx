import { IconProps, IconWrapper } from './IconWrapper'

export const CustomersIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, accentColor, backgroundColor, altBackgroundColor }) => {
        return (
          <>
            <path fill={altBackgroundColor} d="M19 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path
              fill={altBackgroundColor}
              d="M10.783 14.926c-1.1.527-3.986 1.602-2.229 2.947C9.413 18.53 10.37 19 11.571 19h6.858c1.202 0 2.158-.47 3.017-1.127 1.757-1.345-1.128-2.42-2.229-2.947-2.58-1.235-5.854-1.235-8.434 0z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.505 19h.44c1.035 0 1.859-.471 2.598-1.13 1.877-1.676-2.536-3.37-4.043-3.37"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M15 5.069c.227-.045.463-.069.705-.069C17.525 5 19 6.343 19 8s-1.475 3-3.295 3c-.242 0-.478-.024-.705-.069"
            ></path>
            <path
              fill={accentColor}
              d="M4.783 15.111c-1.1.632-3.986 1.922-2.229 3.536C3.413 19.436 4.37 20 5.571 20h6.858c1.202 0 2.158-.564 3.017-1.353 1.757-1.614-1.128-2.904-2.229-3.536-2.58-1.481-5.854-1.481-8.434 0z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.783 15.111c-1.1.632-3.986 1.922-2.229 3.536C3.413 19.436 4.37 20 5.571 20h6.858c1.202 0 2.158-.564 3.017-1.353 1.757-1.614-1.128-2.904-2.229-3.536-2.58-1.481-5.854-1.481-8.434 0z"
            ></path>
            <path fill={backgroundColor} d="M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            <path stroke={strokeColor} strokeWidth="1.5" d="M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
