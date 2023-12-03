import { IconProps, IconWrapper } from './IconWrapper'

export const LayersIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {(props) => {
        return (
          <>
            <rect width="11" height="11" x="2" y="11" fill={props.accentColor} rx="2.5"></rect>
            <rect
              width="11"
              height="11"
              x="11"
              y="2"
              fill={props.altBackgroundColor}
              rx="2.5"
            ></rect>
            <path
              fill={props.backgroundColor}
              d="M11.5 17.5h1c2.357 0 3.535 0 4.268-.733.678-.678.728-1.74.732-3.767H17c-2.828 0-4.243 0-5.121-.879C11 11.242 11 9.828 11 7v-.5c-2.028.004-3.09.053-3.768.732C6.5 7.964 6.5 9.142 6.5 11.5v1c0 2.357 0 3.535.732 4.267.732.733 1.911.733 4.268.733z"
            ></path>
            <rect
              width="11"
              height="11"
              x="11"
              y="2"
              stroke={props.strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              rx="2.5"
            ></rect>
            <path
              stroke={props.strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11 6.5c-2.028.004-3.09.053-3.768.732C6.5 7.964 6.5 9.142 6.5 11.5v1c0 2.357 0 3.535.732 4.267.732.733 1.911.733 4.268.733h1c2.357 0 3.535 0 4.268-.733.678-.678.728-1.74.732-3.767"
            ></path>
            <path
              stroke={props.strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.5 11c-2.028.004-3.09.053-3.768.732C2 12.464 2 13.642 2 16v1c0 2.357 0 3.535.732 4.267C3.464 22 4.643 22 7 22h1c2.357 0 3.536 0 4.268-.733.678-.678.728-1.74.732-3.767"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
