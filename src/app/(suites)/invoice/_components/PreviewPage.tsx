import React from 'react';
import { InvoiceTemplate } from './templates';

function PreviewPage() {
  return (
    <div className="bg-white w-full shadow-sm rounded">
      <div className="w-full rounded-t-lg  gap-12">
        <InvoiceTemplate />
      </div>
    </div>
  );
}

export default PreviewPage;
