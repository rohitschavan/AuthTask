interface StatusProps {
  variant?:
    | 'awaitingPayment'
    | 'preparingtoShip'
    | 'inTransit'
    | 'delivered'
    | 'cancelled'
    | 'notDelivered'
    | 'default'
  children: React.ReactNode
}
