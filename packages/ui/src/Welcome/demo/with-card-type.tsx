/**
 * iframe: 600
 */
import React from 'react';
import { message } from '@oceanbase/design';
import { Welcome } from '@oceanbase/ui';

export default () => {
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Professional Management Platform',
      description: 'A professional database management platform built around OceanBase',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Full Lifecycle Management',
      description:
        'Provides full lifecycle management for OceanBase from deployment and operations to upgrade and removal',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Higher Efficiency, Lower Cost',
      description:
        'Improve OceanBase management efficiency and reduce enterprise IT operations costs',
    },
  ];
  const steps = [
    {
      title: 'Create Cluster',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: 'Create Application Service',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
    {
      title: 'Create Tenant',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: '',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
    {
      title: 'Create Database',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: 'Create Application Service',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
    {
      title: 'Connect Database',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: 'Create Application Service',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
  ];
  const helps = [
    {
      title: 'Create a New Cluster',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Create a New Tenant',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Clusters',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Tenants',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Tasks',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Alerts',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Add New User',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View More',
      link: 'https://www.oceanbase.com',
      isMore: true,
    },
  ];
  return (
    <Welcome
      title="Hi, welcome to OceanBase Cloud Platform"
      description="OceanBase Cloud Platform (OCP) is a platform for managing OceanBase database clusters. With OCP, you can install, deploy, monitor, and alert on OceanBase clusters throughout their full lifecycle. We are committed to providing efficient management services that create more value for you."
      bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
      introduces={introduces}
      steps={steps}
      stepType="card"
      buttonText="Create Cluster"
      buttonProps={{
        onClick: () => {
          message.success('You clicked the button');
        },
      }}
      helps={helps}
    />
  );
};
