import { useCallback, useState } from 'react'
import { User } from '../components/types/api/user'

type Props = {
  id: number
  users: Array<User>
  onOpen: () => void
}

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback(
    (props: Props) => {
      const { id, users, onOpen } = props
      const targetUser = users.find((user) => user.id === id)
      // 左辺がundefinedもしくはnullなら右辺を評価
      setSelectedUser(targetUser ?? null)
      // targetUserがundefinedになる可能性がないことをtype scriptに伝える
      // setSelectedUser(targetUser!)
      onOpen()
    },
    [setSelectedUser]
  )

  return { onSelectUser, selectedUser }
}
