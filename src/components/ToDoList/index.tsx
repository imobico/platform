import { Box, Flex, VStack, VstackProps } from '@/styled'

import { ArrowRightSquare, SquareCheckmarkAltIcon, SquareIcon } from '@/icons'
import { Text } from '@/ui'

export type ToDoListItem = {
  id?: string
  label: string
  isDone?: boolean
  goToTask?: {
    route: string
    label: string
  }
}

export interface ToDoListProps extends VstackProps {
  items: ToDoListItem[]
}

export const ToDoList = ({ items, ...rest }: ToDoListProps) => {
  return (
    <VStack justifyContent="flex-start" alignItems="flex-start" flex="1" {...rest}>
      {items.map((todoListItem, index) => {
        return (
          <Flex
            alignItems="center"
            key={`todo-list-item-${index}`}
            position="relative"
            width="100%"
            className="group"
            pointerEvents={todoListItem.isDone ? 'none' : 'all'}
            border={todoListItem.isDone ? 'none' : '1px solid token(colors.slate.5)'}
            py={todoListItem.isDone ? 0 : 2}
            px={2}
            borderRadius="lg"
            cursor="pointer"
          >
            <Box
              opacity={1}
              _groupHover={{
                opacity: 0.4
              }}
            >
              {todoListItem.isDone ? (
                <SquareCheckmarkAltIcon size="7" isDisabled />
              ) : (
                <SquareIcon size="7" isActive />
              )}
            </Box>
            <Text
              flex="1"
              ml="4"
              color={todoListItem.isDone ? 'slate.8' : 'slate.11'}
              textDecoration={todoListItem.isDone ? 'line-through' : 'none'}
              lineHeight={1.3}
              transition="all 0.1s ease-in-out"
              opacity={1}
              _groupHover={{
                opacity: 0.4
              }}
            >
              {todoListItem.label}
            </Text>
            {!todoListItem.isDone ? (
              <Flex
                alignItems="center"
                justifyContent="flex-start"
                height="100%"
                borderRadius="full"
                color="slate.10"
                position="absolute"
                width="100%"
                transition="all 0.1s ease-in-out"
                opacity={0}
                backdropFilter="blur(4px)"
                _groupHover={{ opacity: 1 }}
              >
                <Box zIndex={10}>
                  <ArrowRightSquare size="7" isActive />
                </Box>
                <Box width="100%" height="100%" position="absolute" />
                <Text zIndex={10} pl="18px" color="trusty.11">
                  {todoListItem.goToTask?.label}
                </Text>
              </Flex>
            ) : null}
          </Flex>
        )
      })}
    </VStack>
  )
}
