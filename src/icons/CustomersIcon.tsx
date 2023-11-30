import { IconProps, IconWrapper } from './IconWrapper'

export const CustomersIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, accentColor, backgroundColor }) => {
        return (
          <>
            <path
              fill={accentColor}
              d="M20.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM8.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            ></path>
            <path
              fill={backgroundColor}
              d="M3.584 13.926c-1.022.527-3.701 1.602-2.07 2.947C2.313 17.53 3.2 18 4.317 18h6.368c1.117 0 2.004-.47 2.801-1.127 1.632-1.345-1.047-2.42-2.069-2.947-2.396-1.235-5.436-1.235-7.832 0z"
            ></path>
            <path
              fill={backgroundColor}
              d="M12.584 13.926c-1.022.527-3.701 1.602-2.07 2.947C11.313 17.53 12.2 18 13.317 18h6.368c1.116 0 2.004-.47 2.801-1.127 1.632-1.345-1.047-2.42-2.069-2.947-2.396-1.235-5.436-1.235-7.832 0z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M20.774 18c.75 0 1.345-.471 1.88-1.13 1.096-1.35-.703-2.43-1.389-2.957-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 000-5M3.226 18c-.75 0-1.345-.471-1.88-1.13-1.096-1.35.703-2.43 1.389-2.957C3.432 13.376 4.21 13.07 5 13m.5-2a2.5 2.5 0 010-5"
            ></path>
            <path
              fill={backgroundColor}
              d="M8.084 15.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353 1.632-1.614-1.047-2.904-2.069-3.536a7.457 7.457 0 00-7.832 0z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.084 15.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353 1.632-1.614-1.047-2.904-2.069-3.536a7.457 7.457 0 00-7.832 0z"
            ></path>
            <path fill={accentColor} d="M15.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path>
            <path
              stroke={strokeColor}
              strokeWidth="1.5"
              d="M15.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
