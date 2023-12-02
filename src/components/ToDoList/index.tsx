import { Flex, VStack, VstackProps } from '@/styled'

import { SquareCheckmarkAltIcon, SquareIcon } from '@/icons'
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
          <Flex alignItems="center" key={`todo-list-item-${index}`}>
            {todoListItem.isDone ? (
              <SquareCheckmarkAltIcon size="7" isDisabled />
            ) : (
              <SquareIcon size="7" isActive />
            )}
            <Text
              flex="1"
              ml="4"
              fontSize="lg"
              color={todoListItem.isDone ? 'slate.8' : 'slate.10'}
              textDecoration={todoListItem.isDone ? 'line-through' : 'none'}
              lineHeight={1.3}
            >
              {todoListItem.label}
            </Text>
          </Flex>
        )
      })}
    </VStack>
  )
}
