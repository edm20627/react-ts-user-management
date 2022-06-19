import React, { memo, useCallback, useEffect, VFC } from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUser'

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectUser, selectedUser } = useSelectUser()

  useEffect(() => getUsers(), [getUsers])

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [onSelectUser, users, onOpen]
  )

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
})
