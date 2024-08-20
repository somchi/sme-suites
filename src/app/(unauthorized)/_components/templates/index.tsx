'use client';
import React from 'react';
import { InvoiceContext } from '@/app/(unauthorized)/context/invoice/invoice.context';
import { TEMPLATES } from '@/app/_utils/enums';
import { useContext } from 'react';
import { StandardTemplate } from './Standard';
import { SpreadTemplate } from './Spread';
import { CompactTemplate } from './Compact';

export const InvoiceTemplate = () => {
  const { invoiceState } = useContext(InvoiceContext);

  const renderTemplate = () => {
    switch (invoiceState.template) {
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
