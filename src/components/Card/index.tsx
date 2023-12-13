import { Flex, FlexProps } from '@/styled'

export interface CardProps extends FlexProps {}

export const Card = ({ px = 10, py = 6, ...props }: CardProps) => {
  return (
    <Flex
      bg="white"
      px={props.p || px}
      py={props.p || py}
      border="1px solid token(colors.slate.6)"
      borderRadius="xl"
      flexDirection={{ base: 'column', md: 'row' }}
      animationName="fadeInUp"
      animationDuration="0.4s"
      {...props}
    >
      {props.children}
    </Flex>
  )
}
