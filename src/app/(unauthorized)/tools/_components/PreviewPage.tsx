import React from 'react';
import { TransactionTemplate } from '../../_components/templates/TransactionTeplate';

export function PreviewPage({ slug }: { slug: string }) {
  return (
    <div className=" w-full shadow-sm rounded">
      <div className="w-full rounded-t-lg  gap-12">
        <TransactionTemplate slug={slug} />
      </div>
    </div>
  );
}
