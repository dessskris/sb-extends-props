import React, { FC } from 'react';
import { Breadcrumbs as PureBreadcrumbs, IBreadcrumbProps as _IBreadcrumbProps, IBreadcrumbsProps as _IBreadcrumbsProps } from '@blueprintjs/core';

export type IBreadcrumbProps = _IBreadcrumbProps;
export { Breadcrumb } from '@blueprintjs/core';
export type IBreadcrumbsProps = _IBreadcrumbsProps;

/**
 * Breadcrumbs identify the path to the current resource in an application.
 */
export const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => <PureBreadcrumbs {...props} />;
