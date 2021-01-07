import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Breadcrumbs, IBreadcrumbsProps, Breadcrumb, IBreadcrumbProps } from './Breadcrumbs';

export default {
  title: 'Example/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const items: IBreadcrumbProps[] = [
  { href: '/folder', icon: "folder-close", text: 'Folder One' },
  { href: '/folder/one', icon: "folder-close", text: 'Folder Two' },
  { icon: "document", text: 'Document.xls' },
];
const renderCurrentBreadcrumb = (props: IBreadcrumbProps) => <Breadcrumb {...props} />;

export const Default = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} />;

Default.args = {
  items: items,
  collapseFrom: 'start',
  breadcrumbRenderer: renderCurrentBreadcrumb,
};
