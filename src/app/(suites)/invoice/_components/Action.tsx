'use client';
import { INVOICE } from '@/site-setting/navigation';
import { Download, Edit, Plus, Printer } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import {
  SET_CLEAR_DATA,
  SET_COLOR_THEME,
  SET_TEMPLATE,
} from '../../context/invoice/inovice.reducer';
import { BRAND_COLOR } from '@/app/_utils/contants';
import { Button } from '@/app/_components/ui/button';
import { TEMPLATES } from '@/app/_utils/enums';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

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

  const handleTemplateClick = (template: string) => {
    invoiceDispatch({ type: SET_TEMPLATE, payload: template });
  };

  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      // putOnlyUsedFonts: true,
      // floatPrecision: 16, // or "smart", default is 16
    });
    doc.setFont('Inter-Regular', 'italic');
    doc.setFontSize(12);
    const content = document.getElementById('content');
    if (content) {
      html2canvas(content).then((canvas) => {
        const imgData: any = canvas.toDataURL('image/webp');

        doc.addImage(imgData, 'WEBP', 0, 0, 210, 300);
        doc.save('invoice.pdf');
      });
    }
  };

  const renderTheme = () => {
    const theme: any = [];
    for (let [key, value] of Object.entries(BRAND_COLOR)) {
      theme.push(
        <span
          className={`bg-${value.bgColor} w-[18px] ml-2 h-[18px] rounded-full text-center cursor-pointer inline-block`}
          onClick={() =>
            handleClick(BRAND_COLOR[key as keyof typeof BRAND_COLOR])
          }
          key={key}
        >
          <svg
            xmlSpace="preserve"
            // style={{ enableBackground: 'new 0 0 24 24' }}
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

  const handlePrint = () => {
    const content = document.getElementById('content');
    if (!content) return;
    const frame1 = document.createElement('iframe');
    frame1.name = 'frame1';
    frame1.style.position = 'absolute';
    frame1.style.top = '-1000000px';
    document.body.appendChild(frame1);
    const frameDoc: any = frame1.contentWindow
      ? frame1.contentWindow
      : frame1.contentDocument;
    if (!frameDoc) return;
    frameDoc.document.open('', '_blank');
    frameDoc.document.write('<html><head><title> &nsp;</title>');
    frameDoc.document.write(
      '<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"  rel="stylesheet" />'
    );
    frameDoc.document.write(
      '<script src="https://cdn.tailwindcss.com"></script>'
    );
    frameDoc.document.write('</head><body>');
    frameDoc.document.write(content.innerHTML);
    frameDoc.document.write('</body></html>');
    frameDoc.document.close();

    setTimeout(function () {
      const frame = document.getElementsByTagName('iframe')[0].contentWindow;

      if (!frame) return;
      frame.focus();
      frame.print();
      // document.body.removeChild(frame1);
    }, 500);
  };

  return (
    <div className="grid md:p-6 p-3">
      <h2 className="text-black font-bold">Download Invoice</h2>
      <div className="grid md:flex md:flex-wrap gap-4 md:justify-between md:items-center mt-4 mb-6">
        <Link
          href={INVOICE.href}
          className="flex items-center gap-2 h-9 px-4 bg-red-400 justify-center hover:bg-red-300 rounded-lg text-white"
        >
          <Edit size={14} />
          <span className="text-sm">Edit</span>
        </Link>

        <Button
          variant={'primary'}
          className="flex items-center"
          onClick={handleDownload}
        >
          <Download size={14} className="mr-2" />
          <span className="text-sm">Download</span>
        </Button>
        <Button className="flex items-center" onClick={handlePrint}>
          <Printer size={14} className="mr-2" />
          <span className="text-sm">Print</span>
        </Button>
      </div>
      <hr className="h-[1px] bg-gray-400 w-full" />
      <div className="grid py-3">
        <h3 className="text-black font-semibold">Color Theme</h3>
        <div className="flex gap-4 mt-3 mb-4">{renderTheme()}</div>
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