import { IconProps, IconWrapper } from './IconWrapper'

export const BuildingIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, accentColor, backgroundColor }) => {
        return (
          <>
            <path
              fill={backgroundColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 6.717V22h13V8.169c0-1.516 0-2.273-.407-2.83-.406-.556-1.11-.76-2.515-1.168l-5-1.451c-2.33-.676-3.496-1.015-4.287-.392C3 2.951 3 4.206 3 6.718z"
            ></path>
            <path
              fill={accentColor}
              d="M21 22v-7.524c0-1.434 0-2.15-.395-2.682-.396-.531-1.082-.737-2.456-1.15-.78-.233-1.17-.35-1.475-.245a1 1 0 00-.486.361c-.188.262-.188.67-.188 1.484V22h5zM10 17H9c-.943 0-1.414 0-1.707.293C7 17.586 7 18.057 7 19v1c0 .943 0 1.414.293 1.707C7.586 22 8.057 22 9 22h1c.943 0 1.414 0 1.707-.293C12 21.414 12 20.943 12 20v-1c0-.943 0-1.414-.293-1.707C11.414 17 10.943 17 10 17z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 10l2.15.645c1.373.412 2.06.618 2.455 1.15.395.53.395 1.248.395 2.681V22"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 9h3m-3 4h3"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 22v-3c0-.943 0-1.414-.293-1.707C11.414 17 10.943 17 10 17H9c-.943 0-1.414 0-1.707.293C7 17.586 7 18.057 7 19v3"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10 17H9c-.943 0-1.414 0-1.707.293C7 17.586 7 18.057 7 19v1c0 .943 0 1.414.293 1.707C7.586 22 8.057 22 9 22h1c.943 0 1.414 0 1.707-.293C12 21.414 12 20.943 12 20v-1c0-.943 0-1.414-.293-1.707C11.414 17 10.943 17 10 17z"
            ></path>
            <path stroke={strokeColor} strokeLinecap="round" strokeWidth="1.5" d="M2 22h20"></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 22V6.717c0-2.51 0-3.766.791-4.389.791-.623 1.956-.284 4.287.392l5 1.451c1.406.408 2.109.612 2.515 1.169C16 5.896 16 6.653 16 8.169V22"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
