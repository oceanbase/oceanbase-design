import React, { useState } from 'react';
import { Filter } from '@oceanbase/ui';
import { Flex, Table } from '@oceanbase/design';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

export default () => {
  const [selectedCity, setSelectedCity] = useState<string[][]>([]);
  const [selectedPersonnel, setSelectedPersonnel] = useState<string>('');

  const cityOptions: Option[] = [
    {
      value: 'America',
      label: 'America',
      children: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'Los Angeles',
          label: 'Los Angeles',
        },

        {
          value: 'Chicago',
          label: 'Chicago',
        },
      ],
    },
    {
      value: 'England',
      label: 'England',
      children: [
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Manchester',
          label: 'Manchester',
        },
        {
          value: 'Liverpool',
          label: 'Liverpool',
        },
      ],
    },
    {
      value: 'Australia',
      label: 'Australia',
      children: [
        {
          value: 'Sydney',
          label: 'Sydney',
        },
        {
          value: 'Melbourne',
          label: 'Melbourne',
        },
      ],
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
    },
  ];

  const data = [
    {
      name: 'John Brown',
      age: 18,
      city: 'New York',
      tags: ['developer'],
    },
    {
      name: 'Jim Green',
      age: 24,
      city: 'London',
      tags: ['loser'],
    },
    {
      name: 'Joe Black',
      age: 32,
      city: 'Sydney',
      tags: ['teacher'],
    },
    {
      name: 'Bruce Lee',
      age: 32,
      city: 'Sydney',
      tags: ['teacher'],
    },
  ];

  const personnelOptions = data.map(item => ({
    value: item.name,
    label: item.name,
  }));

  const handleData = () => {
    return data
      .filter(item => {
        if (selectedCity.length === 0) {
          return true;
        }
        return selectedCity.some(city => city.includes(item.city));
      })
      .filter(item => {
        if (selectedPersonnel === '') {
          return true;
        }
        return selectedPersonnel.includes(item.name);
      });
  };

  return (
    <>
      <div>
        <Flex gap={10} align="center" justify="end">
          <Filter.Cascader
            label="City"
            haveValueLabel="Selected City"
            options={cityOptions}
            value={selectedCity}
            onChange={value => {
              setSelectedCity(value);
            }}
            clear={() => {
              setSelectedCity([]);
            }}
            showSearch={true}
          />
          <Filter.Select
            label="Personnel"
            value={selectedPersonnel}
            setValue={setSelectedPersonnel}
            options={personnelOptions}
            clear={() => {
              setSelectedPersonnel('');
            }}
            showSearch={true}
            multi={true}
          />
        </Flex>
        <Table dataSource={handleData()} columns={columns} />
      </div>
    </>
  );
};
