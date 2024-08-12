import React from 'react';
import { InvoiceTemplate } from '../../_components/templates';

export function PreviewIPage() {
  return (
    <div className="bg-white w-full shadow-sm rounded">
      <div className="w-full rounded-t-lg  gap-12">
        <InvoiceTemplate />
      </div>
    </div>
  );
}
