import { IconProps, IconWrapper } from './IconWrapper'

export const PropertiesIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, accentColor, backgroundColor }) => {
        return (
          <>
            <path
              fill={accentColor}
              d="M21 11.5V18c0 1.885 0 2.828-.586 3.414C19.828 22 18.886 22 17 22h-5V7.5l9 4z"
            ></path>
            <path
              fill={backgroundColor}
              d="M12 22V3L3 7v11c0 1.886 0 2.828.586 3.414C4.172 22 5.114 22 7 22h5z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 2L2 7M12 3v19H7c-1.886 0-2.828 0-3.414-.586C3 20.828 3 19.886 3 18V7M12 7l10 5"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10 22h7c1.886 0 2.828 0 3.414-.586C21 20.828 21 19.885 21 18v-6.5M18 10V7M7 11h1m-1 4h1M16 14h1M16.5 22v-4"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
