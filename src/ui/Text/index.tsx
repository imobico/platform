import { type HTMLStyledProps, styled } from '@/styled/jsx'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & HTMLStyledProps<As>

export const Text = (props: TextProps) => {
  const { as = 'p', ...rest } = props
  const Component = styled(as)

  return <Component {...rest} />
}

export const Strong = (props: TextProps) => {
  const { ...rest } = props
  const Component = styled('strong')

  return <Component fontWeight={props.fontWeight || '700'} {...rest} />
}
