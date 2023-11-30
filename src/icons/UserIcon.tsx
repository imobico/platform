import { IconProps, IconWrapper } from './IconWrapper'

export const UserIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, accentColor, backgroundColor, altBackgroundColor }) => {
        return (
          <>
            <circle cx="12" cy="12" r="10" fill={backgroundColor}></circle>
            <path
              fill={altBackgroundColor}
              d="M7.783 17.111c-1.1.632-3.986 1.922-2.229 3.536C6.413 21.436 7.37 22 8.571 22h6.858c1.202 0 2.158-.564 3.017-1.353 1.757-1.614-1.128-2.904-2.229-3.536-2.58-1.481-5.854-1.481-8.434 0z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7.783 17.111c-1.1.632-3.986 1.922-2.229 3.536C6.413 21.436 7.37 22 8.571 22h6.858c1.202 0 2.158-.564 3.017-1.353 1.757-1.614-1.128-2.904-2.229-3.536-2.58-1.481-5.854-1.481-8.434 0z"
            ></path>
            <path fill={accentColor} d="M15.5 10a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path>
            <path
              stroke={strokeColor}
              strokeWidth="1.5"
              d="M15.5 10a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M2.854 16A9.9 9.9 0 012 11.965C2 6.46 6.477 2 12 2s10 4.461 10 9.965A9.9 9.9 0 0121.146 16"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
