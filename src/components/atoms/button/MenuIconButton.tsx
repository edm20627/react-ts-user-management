import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React, { memo, VFC } from 'react'

type Props = {
  onClick: () => void
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onClick } = props
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onClick}
    />
  )
})
