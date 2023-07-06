import React from 'react'
import {
  Anchor,
  Breadcrumbs,
  Flex,
  Header as MantineHeader,
  Menu,
} from '@mantine/core'
import Text from '../../atoms/Text/Text'
import { ReactComponent as DeliverIcon } from '../../../assets/icons/delivered.svg'
import './Header.scss'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../../../services/auth/authStore'

const breadCrumbData = [
  { title: 'ダッシュボード', href: '#' },
  { title: '代理店リスト', href: '#' },
  { title: '注文リスト', href: '#' },
]

const Header = () => {
  const navigate = useNavigate()
  const text = useAuthStore((state) => state.text)
  const setText = useAuthStore((state) => state.setText)

  const breadCrumbItems = breadCrumbData.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))
  return (
    <MantineHeader height={60} p="xs">
      <Breadcrumbs separator="&rsaquo;">{breadCrumbItems}</Breadcrumbs>
      <Menu shadow="md">
        <Menu.Target>
          <Flex gap={'md'}>
            <Text>Name</Text>
            <DeliverIcon fill="red.9" />
          </Flex>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            component="a"
            onClick={() => {
              setText('had test')
            }}
          >
            アカウントを編集
          </Menu.Item>

          <Menu.Item
            component="a"
            onClick={() => console.log(text)}
            target="_blank"
          >
            パスワードを変更
          </Menu.Item>
          <Menu.Item
            component="a"
            target="_blank"
            onClick={() => {
              Cookies.remove('accessToken')
              navigate('/')
            }}
          >
            ログアウト
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </MantineHeader>
  )
}

export default Header
