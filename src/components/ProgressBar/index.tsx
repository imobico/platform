import { Box, BoxProps } from '@/styled'
import { ColorToken } from '@/styled/tokens'

interface ProgressBarProps extends BoxProps {
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
    <Box width={width} height={height} {...rest} borderRadius="full" bg={backgroundColor}>
      <Box
        borderRadius="full"
        bg={progressColor}
        height="100%"
        style={{ width: `${calculatedPercentage}%` }}
      />
    </Box>
  )
}
