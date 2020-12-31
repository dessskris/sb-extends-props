import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Breadcrumbs, IBreadcrumbProps } from './Breadcrumbs';

export default {
  title: 'Example/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const items: IBreadcrumbProps[] = [
  { href: '/folder', icon: "folder-close", text: 'Folder One' },
  { href: '/folder/one', icon: "folder-close", text: 'Folder Two' },
  { icon: "document", text: 'Document.xls' },
];

export const Default = () => <Breadcrumbs items={items} collapseFrom='start' />;
