import React from 'react'
import { Title } from '@mantine/core'
import ChangePasswordForm from '../../molecules/ChangePasswordForm/ChangePasswordForm'


const ChangePasswordSection = ({
  title,
  oldPassword,
  newPassword,
  onChange,
  onSubmit,
}: ChangePasswordSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <ChangePasswordForm
        oldPassword={oldPassword}
        newPassword={newPassword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </section>
  )
}

export default ChangePasswordSection
