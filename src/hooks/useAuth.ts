/* eslint no-alert: 0 */
import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../components/types/api/user'

export const useAuth = () => {
  const history = useHistory()

  const [loading, setLoading] = useState(false)
  const login = useCallback((id: string) => {
    setLoading(true)

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history.push('/home')
        } else {
          alert('ユーザーが見つかりません。')
        }
      })
      .catch(() => alert('loginできません。'))
      .finally(() => setLoading(false))
  }, [])
  return { login, loading }
}
