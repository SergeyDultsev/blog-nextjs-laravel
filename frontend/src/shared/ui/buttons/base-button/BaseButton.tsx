'use client'

import React from "react";
import styles from './BaseButton.module.scss'
import classNames from "classnames";

interface DefaultButtonProps {
  className: string,
  description: string,
}

const BaseButton: React.FC<DefaultButtonProps> = ({ description , className}) => {
  return (
      <button className={classNames(styles['base-button'], className)}>{description}</button>
  );
};

export default BaseButton;