import React from 'react'
import Button from '../../atoms/Button/Button'
import Status from '../../atoms/Status/Status'
import { Flex } from '@mantine/core'
import { createColumnHelper } from '@tanstack/react-table'
import Table from '../../atoms/Table/Table'

type Person = {
  date: string
  vendorName: string
  lastName: string
  orders: number
  payment: number
  status: string
  actions: string
}

const defaultData: Person[] = [
  {
    date: '12.12.2022',
    vendorName: 'tanner',
    lastName: 'linsley',
    orders: 24,
    payment: 100,
    status: 'In Relationship',
    actions: '50',
  },
  {
    date: '12.12.2022',
    vendorName: 'tandy',
    lastName: 'miller',
    orders: 40,
    payment: 40,
    status: 'Single',
    actions: '80',
  },
  {
    date: '12.12.2022',
    vendorName: 'joel',
    lastName: 'dirte',
    orders: 45,
    payment: 20,
    status: 'Complicated',
    actions: '10',
  },
  {
    date: '12.12.2022',
    vendorName: 'joel',
    lastName: 'dirte',
    orders: 45,
    payment: 20,
    status: 'Complicated',
    actions: '10',
  },
  {
    date: '12.12.2022',
    vendorName: 'joel',
    lastName: 'dirte',
    orders: 45,
    payment: 20,
    status: 'Complicated',
    actions: '10',
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('date', {
    header: () => 'Date',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('vendorName', {
    header: () => 'Vendor Name',
    cell: (info) => info.renderValue(),
  }),

  columnHelper.accessor((row) => row.status, {
    id: 'status',
    cell: (info) => <Status variant="inTransit">{info.getValue()}</Status>,
    header: () => <span>Status</span>,
  }),
  columnHelper.accessor('orders', {
    header: () => 'Orders',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('payment', {
    header: () => <span>Payment</span>,
  }),
  columnHelper.accessor('actions', {
    header: () => 'Actions',
    cell: (info) => (
      <Flex gap={'xs'}>
        <Button onClick={() => console.log('one')} variant="changetoPackage">
          {info.getValue()}
        </Button>
        <Button onClick={() => console.log('one')} variant="changetoDeliver">
          {info.getValue()}
        </Button>
        <Button
          onClick={() => console.log(info.row.original.lastName)}
          variant="changetoCancel"
        >
          {info.getValue()}
        </Button>
      </Flex>
    ),
  }),
]
const DashboardTable = () => {
  const [data, setData] = React.useState(() => [...defaultData])

  return <>{data && <Table data={data} columns={columns} />}</>
}

export default DashboardTable
