import Link from 'next/link'

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
          <Link
            href={todoListItem.goToTask?.route || '#'}
            style={{ width: '100%', pointerEvents: todoListItem.isDone ? 'none' : 'all' }}
            key={`todo-list-item-${index}`}
          >
            <Flex
              transition="all 0.25s ease-in-out"
              alignItems="center"
              position="relative"
              width="100%"
              className="group"
              border={todoListItem.isDone ? 'none' : '1px solid token(colors.slate.4)'}
              bg="white"
              py={todoListItem.isDone ? 0 : 2}
              px={2}
              borderRadius="lg"
              cursor="pointer"
              _hover={{
                border: '1px solid token(colors.slate.6)',
                bg: 'slate.2',
                boxShadow: '0 1px 2px 0 token(colors.slate.3), 0 2px 6px 0 token(colors.slate.2)'
              }}
            >
              <Box
                transition="all 0.25s ease-in-out"
                opacity={1}
                _groupHover={{
                  opacity: 0
                }}
              >
                {todoListItem.isDone ? (
                  <SquareCheckmarkAltIcon size="7" isDisabled strokeColor="trusty" />
                ) : (
                  <SquareIcon size="7" />
                )}
              </Box>
              <Text
                flex="1"
                ml="4"
                color={todoListItem.isDone ? 'slate.8' : 'slate.11'}
                textDecoration={todoListItem.isDone ? 'line-through' : 'none'}
                lineHeight={1.3}
                transition="all 0.25s ease-in-out"
                opacity={1}
                _groupHover={{
                  opacity: 0
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
                  transition="all 0.25s ease-in-out"
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  zIndex={10}
                >
                  <ArrowRightSquare size="7" isActive />
                  <Box width="100%" height="100%" position="absolute" />
                  <Text zIndex={10} pl="16px" color="trusty.11" transform="translateY(-0.5px)">
                    {todoListItem.goToTask?.label}
                  </Text>
                </Flex>
              ) : null}
            </Flex>
          </Link>
        )
      })}
    </VStack>
  )
}
