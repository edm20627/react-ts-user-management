import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react'
import { User } from '../types/api/user'

type LoginUser = User & { isAdmin: boolean }

export type LoginUserContextType = {
  // 型追加
  loginUser: LoginUser | null
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)

  // return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>

  // memo化
  const memoLoginUser = useMemo(() => ({ loginUser, setLoginUser }), [loginUser])
  return <LoginUserContext.Provider value={memoLoginUser}>{children}</LoginUserContext.Provider>
}
