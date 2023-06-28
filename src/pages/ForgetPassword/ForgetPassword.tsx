import React from 'react'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import ForgetPasswordSection from '../../common/components/organisms/ForgetPasswordSection/ForgetPasswordSection'

const ForgetPassword = () => {
  return (
    <FormLayout>
      <ForgetPasswordSection
        username={''}
        onChange={function (field: string, value: string): void {
          throw new Error('Function not implemented.')
        }}
        onSubmit={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </FormLayout>
  )
}

export default ForgetPassword
