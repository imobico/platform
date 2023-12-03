import { IconProps, IconWrapper } from './IconWrapper'

export const PlusSquareIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      {(props) => {
        return (
          <>
            <path
              fill={props.backgroundColor}
              d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12z"
            ></path>
            <path
              stroke={props.strokeColor}
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12z"
            ></path>
            <path
              stroke={props.strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8v8m4-4H8"
            ></path>
          </>
        )
      }}
    </IconWrapper>
  )
}
