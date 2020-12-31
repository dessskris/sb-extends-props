import React, { FC } from 'react';
import { Breadcrumb, Breadcrumbs as PureBreadcrumbs, IBreadcrumbProps, IBreadcrumbsProps } from '@blueprintjs/core';

/**
 * Breadcrumbs identify the path to the current resource in an application.
 */
export const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => <PureBreadcrumbs {...props} />;

export { Breadcrumb, IBreadcrumbProps, IBreadcrumbsProps };
