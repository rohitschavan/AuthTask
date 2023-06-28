import React from 'react'
import Card from '../../atoms/Card/Card'
import './FormLayout.scss'

interface formLayout {
  children?: React.ReactNode
}

const FormLayout = ({ children }: formLayout) => {
  return (
    <div className="form-layout">
      <Card>{children}</Card>
    </div>
  )
}

export default FormLayout
