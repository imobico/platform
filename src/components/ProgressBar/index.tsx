import { Box, Flex, FlexProps } from '@/styled'
import { ColorToken } from '@/styled/tokens'

import { Text } from '@/ui'

interface ProgressBarProps extends FlexProps {
  percentage?: number
  completed?: number
  total?: number
  progressColor?: ColorToken
  backgroundColor?: ColorToken
}

export const ProgressBar = ({
  width = '100%',
  height = '12px',
  progressColor = 'accent.default',
  backgroundColor = 'slate.5',
  percentage,
  completed,
  total,
  ...rest
}: ProgressBarProps) => {
  let calculatedPercentage: number

  if (percentage) {
    calculatedPercentage = percentage
  } else if (completed && total) {
    calculatedPercentage = (completed / total) * 100
  } else {
    throw new Error('Either percentage or completed and total are required')
  }

  return (
    <Flex width={width} height={height} alignItems="center" justifyContent="center" {...rest}>
      <Box borderRadius="full" bg={backgroundColor} flex="1" height={height}>
        <Box
          borderRadius="full"
          bg={progressColor}
          height="100%"
          style={{ width: `${calculatedPercentage}%` }}
        />
      </Box>
      <Text ml={4} color="slate.11" fontWeight={700} fontSize="sm">
        {calculatedPercentage.toFixed(0)}%
      </Text>
    </Flex>
  )
}
