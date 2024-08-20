'use client';
import React from 'react';
import { TEMPLATES } from '@/app/_utils/enums';
import { useContext } from 'react';
import { StandardTemplate } from './Standard';
import { SpreadTemplate } from './Spread';
import { CompactTemplate } from './Compact';
import { ReceiptContext } from '../../context/receipt/receipt.context';

export const ReceiptTemplate = () => {
  const { receiptState } = useContext(ReceiptContext);

  const renderTemplate = () => {
    switch (receiptState.template) {
      case TEMPLATES.COMPACT:
        return <CompactTemplate />;
      case TEMPLATES.SPREAD:
        return <SpreadTemplate />;
      default:
        return <StandardTemplate />;
    }
  };

  return <div id="content">{renderTemplate()}</div>;
};
