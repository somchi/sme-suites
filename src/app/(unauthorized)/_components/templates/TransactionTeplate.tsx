'use client';
import React, { useMemo } from 'react';
import { StandardTemplate } from './Standard';
import { SpreadTemplate } from './Spread';
import { CompactTemplate } from './Compact';
import { useUnauthStore } from '@/app/providers/unauth-provider';
import { TEMPLATES, TRANSACTION_TYPES } from '@/app/_libs/enums';

export const TransactionTemplate = ({ slug }: { slug: string }) => {
  const { invoice, receipt } = useUnauthStore((state) => state);

  const template = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE
      ? invoice.template
      : receipt.template;
  }, [invoice.template, receipt.template, slug]);

  const renderTemplate = () => {
    switch (template) {
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
