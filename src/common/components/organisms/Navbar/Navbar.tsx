import React, { useState } from 'react'
import { Navbar as MantineNavbar, NavLink, Title } from '@mantine/core'
import './Navbar.scss'

const data = [
  { label: 'ダッシュボード' },
  { label: '代理店リスト' },
  { label: '注文リスト' },
]

const Navbar = () => {
  const [active, setActive] = useState(0)
  const navItems = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
      color="gray.9"
    />
  ))
  return (
    <MantineNavbar width={{ base: 250 }} p="xs">
      <div className="header">
        <Title order={4}>宇治巨椋園</Title>
        <Title order={6}>管理者用ログインページ</Title>
      </div>
      <div className="nav-links">{navItems}</div>
    </MantineNavbar>
  )
}

export default Navbar
