import { IconProps, IconWrapper } from './IconWrapper'

export const SquareCheckmarkAltIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {({ strokeColor, backgroundColor }) => {
        return (
          <>
            <path
              fill={backgroundColor}
              d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12z"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M21.448 8.2c.052 1.05.052 2.3.052 3.8 0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c1.072 0 2.016 0 2.85.02"
            ></path>
            <path
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 11.5s1.5 0 3.5 3.5c0 0 5.059-9.167 10-11"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
