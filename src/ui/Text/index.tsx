import { type HTMLStyledProps, styled } from '@/styled'

type As = 'p' | 'span' | 'div' | 'label'

const textStyle = {
  base: {
    color: 'red.12',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    fontWeight: 500
  }
}

export type TextProps = {
  as?: As
} & HTMLStyledProps<As>

export const Text = (props: TextProps) => {
  const { as = 'p', ...rest } = props
  const Component = styled(as)

  return <Component color="#FF0" {...rest} />
}
