import React, { useEffect, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Table from 'common/components/atoms/Table';
import { useAuth } from 'context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

type Person = {
  passengerName: string;
  airlineName: string;
  trips: number;
  airlineHeadQuaters: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('passengerName', {
    header: () => 'Name',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineName', {
    header: () => 'Airline',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('trips', {
    header: () => 'Trips',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineHeadQuaters', {
    header: () => <span>Head Quarters</span>,
    cell: (info) => info.renderValue(),
  }),
];

const DashboardTable = () => {
  const { accessToken, logout } = useAuth();
  const [data, setData] = useState<Person[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://asia-northeast1-willeder-official.cloudfunctions.net/api/lists?page=0&size=1',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setData(res.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (accessToken) fetchData();
  }, [accessToken]);

  const handleLogout = () => {
    logout(); // Clears tokens from context and localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      {data.length > 0 && <Table data={data} columns={columns} />}
      <Button onClick={handleLogout} color="red" mt="md">
        Logout
      </Button>
    </>
  );
};

export default DashboardTable;
