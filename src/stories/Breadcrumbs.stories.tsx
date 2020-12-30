import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Breadcrumbs, IBreadcrumbProps, IBreadcrumbsProps } from '@blueprintjs/core';

export default {
  title: 'Example/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const items: IBreadcrumbProps[] = [
  { href: '/folder', icon: "folder-close", text: 'Folder One' },
  { href: '/folder/one', icon: "folder-close", text: 'Folder Two' },
  { icon: "document", text: 'Document.xls' },
];

export const Default = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} collapseFrom='start' />;

Default.args = {
  items,
  collapseFrom: 'start',
} as IBreadcrumbsProps;
