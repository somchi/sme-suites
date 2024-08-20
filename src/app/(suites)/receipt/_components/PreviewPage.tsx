import React from 'react';
import { ReceiptTemplate } from '../../_components/templates/ReceiptTeplate';

export function PreviewPage() {
  return (
    <div className="bg-white w-full shadow-sm rounded">
      <div className="w-full rounded-t-lg  gap-12">
        <ReceiptTemplate />
      </div>
    </div>
  );
}
