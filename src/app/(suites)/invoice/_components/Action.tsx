'use client';
import { INVOICE } from '@/site-setting/navigation';
import { Download, Edit, Plus, Printer, Share } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import {
  SET_CLEAR_DATA,
  SET_COLOR_THEME,
  SET_SAVE_TO_DB,
  SET_TEMPLATE,
} from '../../context/invoice/inovice.reducer';
import { BRAND_COLOR } from '@/app/_utils/contants';
import { Button } from '@/app/_components/ui/button';
import { TEMPLATES } from '@/app/_utils/enums';
import { jsPDF } from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import { createClient } from '@/app/_utils/supabase/client';
import html2canvas from 'html2canvas';
import generatePDF, { Margin } from 'react-to-pdf';

export const Action = () => {
  const { invoiceState, invoiceDispatch } = useContext(InvoiceContext);

  const router = useRouter();

  const handleNewInvoice = () => {
    invoiceDispatch({
      type: SET_CLEAR_DATA,
      payload: '',
    });
    router.push(INVOICE.href);
  };

  const handleClick = (theme: { bgColor: any; textColor: any }) => {
    invoiceDispatch({ type: SET_COLOR_THEME, payload: theme });
  };

  const handleEdit = () => {
    invoiceDispatch({ type: SET_SAVE_TO_DB, payload: false });
    router.push(INVOICE.href);
  };

  const handleTemplateClick = (template: string) => {
    invoiceDispatch({ type: SET_TEMPLATE, payload: template });
  };

  const handleSaveToDB = async () => {
    if (invoiceState.saveToDB || !process.env.NEXT_PUBLIC_SUPABASE_URL) return;
    const supabase = createClient();

    const payload = {
      business: invoiceState.business.businessName,
      business_email: invoiceState.business.email ?? '',
      template: invoiceState.template,
    };
    const response = await supabase.from('FreeInvoiceUsage').insert(payload);
    if (response.error !== null) return;
    invoiceDispatch({ type: SET_SAVE_TO_DB, payload: true });
  };

  const handleDownload = () => {
    const content = document.getElementById('content');

    if (content) {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 'smart',
        precision: 10,
      });
      const width = doc.internal.pageSize.getWidth();

      doc.html(content.innerHTML, {
        callback: () => {
          doc.save('invoice.pdf');
        },
        x: 0,
        y: 0,
        width: width,
        windowWidth: 800,
      });

      handleSaveToDB();
    }
  };

  const renderTheme = () => {
    const theme: any = [];
    for (let [key, value] of Object.entries(BRAND_COLOR)) {
      theme.push(
        <span
          className={`${value.bgColor} w-[18px] ml-2 h-[18px] rounded-full text-center cursor-pointer inline-block`}
          onClick={() =>
            handleClick(BRAND_COLOR[key as keyof typeof BRAND_COLOR])
          }
          key={key}
        >
          <svg
            xmlSpace="preserve"
            viewBox="0 0 24 24"
            className={`${
              value.bgColor === invoiceState.brandColor.bgColor
                ? 'inline mt-[-8px]'
                : 'hidden'
            } h-[9px]`}
            fill={
              value.bgColor === invoiceState.brandColor.bgColor
                ? 'white'
                : 'transparent'
            }
          >
            <path d="M8.9 20.7c-.6 0-1.2-.2-1.6-.6L1 15c-1.1-.9-1.3-2.5-.4-3.6s2.5-1.3 3.6-.4l4.5 3.7L19.6 4c1-1 2.7-1 3.7 0s1 2.7 0 3.7L10.7 20c-.5.5-1.2.7-1.8.7z"></path>
          </svg>
        </span>
      );
    }
    return theme;
  };

  const renderTemplate = () => {
    return Object.keys(TEMPLATES).map((key: any) => {
      const value = TEMPLATES[key as keyof typeof TEMPLATES];
      return (
        <div className="flex gap-2 items-center" key={key}>
          <span
            className={`${
              value === invoiceState.template
                ? 'border-blue-500'
                : 'border-gray-600'
            } border  w-[18px] ml-2 h-[18px] rounded-full text-center cursor-pointer inline-block`}
            onClick={() => handleTemplateClick(value)}
          >
            <svg
              xmlSpace="preserve"
              viewBox="0 0 24 24"
              className={`${
                value === invoiceState.template
                  ? 'fill-blue-500 inline mt-[-8px]'
                  : 'hidden'
              } h-[9px]`}
            >
              <path d="M8.9 20.7c-.6 0-1.2-.2-1.6-.6L1 15c-1.1-.9-1.3-2.5-.4-3.6s2.5-1.3 3.6-.4l4.5 3.7L19.6 4c1-1 2.7-1 3.7 0s1 2.7 0 3.7L10.7 20c-.5.5-1.2.7-1.8.7z"></path>
            </svg>
          </span>
          <span className="text-black">{value}</span>
        </div>
      );
    });
  };

  const printContent = useReactToPrint({
    content: () => document.getElementById('content'),
  });

  const handlePrint = () => {
    printContent();
    handleSaveToDB();
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const snap = async () => {
    const content = document.getElementById('content');
    let dataUrl = '';
    if (content) {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 'smart',
        precision: 10,
      });
      const width = doc.internal.pageSize.getWidth();
      const fileName = 'invoice.pdf';
      doc.html(content.innerHTML, {
        callback: () => {
          const url = doc.output('datauristring', { filename: fileName });
          dataUrl = url;
        },
        x: 0,
        y: 0,
        width: width,
        windowWidth: 800,
      });
    }
    await sleep(3000);

    return dataUrl;
  };

  const handleShare = async (e: any) => {
    e.preventDefault();
    const dataURI = await snap();
    const blob = await (await fetch(dataURI)).blob();

    const fileName = 'invoice.pdf';

    const file = new File([blob], fileName, { type: blob.type });
    const shareData = {
      title: 'Invoice',
      files: [file],
    };
    try {
      await navigator.share(shareData);
      handleSaveToDB();
    } catch (err) {}
  };

  return (
    <div className="grid md:p-6 p-3">
      <h2 className="text-black font-bold">Download Invoice</h2>
      <div className="grid md:flex md:flex-wrap md:justify-between md:items-center mt-4 mb-2 gap-2">
        <Button
          onClick={handleEdit}
          className="flex items-center gap-2 h-9 px-4 bg-red-400 justify-center hover:bg-red-300 rounded-lg text-white"
        >
          <Edit size={14} />
          <span className="text-sm">Edit</span>
        </Button>
        <Button
          variant={'primary'}
          className="flex items-center"
          onClick={handleDownload}
          disabled={invoiceState.business.businessName ? false : true}
        >
          <Download size={14} className="mr-2" />
          <span className="text-sm">Download</span>
        </Button>
      </div>
      <div className="grid md:flex md:flex-wrap md:justify-between md:items-center mt-4 mb-2 gap-2">
        <Button
          className="flex items-center md:w-2/4 gap-2 h-9 px-4 bg-theme-secondary justify-center hover:bg-theme-secondary/80 rounded-lg text-white"
          onClick={handleShare}
          disabled={invoiceState.business.businessName ? false : true}
        >
          <Share size={16} />
          <span>Share</span>
        </Button>
        <Button
          className="flex items-center"
          onClick={handlePrint}
          disabled={invoiceState.business.businessName ? false : true}
        >
          <Printer size={14} className="mr-2" />
          <span className="text-sm">Print</span>
        </Button>
      </div>

      <hr className="h-[1px] bg-gray-400 w-full" />
      <div className="grid py-3">
        <h3 className="text-black font-semibold">Color Theme</h3>
        <div className="flex flex-wrap gap-4 mt-3 mb-4">{renderTheme()}</div>
      </div>
      <hr className="h-[1px] bg-gray-400 w-full" />
      <div className="grid py-3">
        <h3 className="text-black font-semibold">Template</h3>
        <div className="grid gap-4 mt-3 mb-4">{renderTemplate()}</div>
      </div>
      <hr className="h-[1px] bg-gray-400 w-full my-4" />
      <div className="grid">
        <Button
          variant={'primary'}
          className="flex items-center"
          onClick={handleNewInvoice}
        >
          <Plus size={14} className="mr-2" />
          <span className="text-sm">New invoice</span>
        </Button>
      </div>
    </div>
  );
};
