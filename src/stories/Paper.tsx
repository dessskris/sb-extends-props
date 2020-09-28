import React from 'react';
import './button.css';
import { PaperProps as MUIPaperProps } from '@material-ui/core';

export interface PaperProps extends MUIPaperProps {
  /**
   * Button contents
   */
  label: string;
    /**
   * If `true`, a darker background will be applied.
   * @default false
   */
  filled?: boolean;
  /**
   * If `true`, the border around the Paper will be removed.
   * @default false
   */
  disableOutline?: boolean;
}

//type PaperProps = BasePaperProps & MUIPaperProps;

/**
 * Primary UI component for user interaction
 */
export const Paper: React.FC<PaperProps> = ({
  label,
}) => {
  return (
    <div>{label}</div>
  );
};
