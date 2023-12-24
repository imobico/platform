import { IconProps, IconWrapper } from './IconWrapper'

export const MapLocationIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, accentColor, backgroundColor }) => {
        return (
          <>
            <path
              fill={backgroundColor}
              d="M5.253 3.204l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 5.746 2 6.33 2 7.499v8.217c0 1.535 0 2.303.342 2.73.228.285.547.476.9.54.53.095 1.18-.284 2.478-1.042.882-.515 1.73-1.05 2.785-.905.884.122 1.705.68 2.495 1.075l7.357.222a1.5 1.5 0 001.079-.412L22 15.485V9.217c0-1.94 0-2.909-.586-3.512-.586-.602-1.528-.602-3.414-.602h-2.079c-.466 0-.698 0-.921-.055-.215-.053-.423-.157-.829-.36L10.84 3.021c-1.391-.696-2.087-1.044-2.828-1.02H8c-.736.029-1.409.421-2.747 1.203z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M22 10v-.783c0-1.94 0-2.909-.586-3.512-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.021c-1.391-.696-2.087-1.044-2.828-1.02-.74.024-1.413.417-2.759 1.203l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 5.746 2 6.33 2 7.499v8.217c0 1.535 0 2.303.342 2.73.228.285.547.476.9.54.53.095 1.18-.284 2.478-1.042.882-.515 1.73-1.05 2.785-.905.884.122 1.705.68 2.495 1.075"
            ></path>
            <path stroke={strokeColor} strokeLinejoin="round" strokeWidth="1.5" d="M8 2v15"></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 5v4.5"
            ></path>
            <path
              fill={accentColor}
              d="M18.308 21.683A1.183 1.183 0 0117.5 22c-.302 0-.591-.113-.808-.317-1.986-1.87-4.646-3.96-3.349-6.993C14.045 13.05 15.73 12 17.5 12s3.456 1.05 4.157 2.69c1.296 3.03-1.358 5.13-3.349 6.993z"
            ></path>
            <path
              stroke={strokeColor}
              strokeWidth="1.5"
              d="M18.308 21.683A1.183 1.183 0 0117.5 22c-.302 0-.591-.113-.808-.317-1.986-1.87-4.646-3.96-3.349-6.993C14.045 13.05 15.73 12 17.5 12s3.456 1.05 4.157 2.69c1.296 3.03-1.358 5.13-3.349 6.993z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.5 16.5h.009"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
