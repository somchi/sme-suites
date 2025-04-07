'use client';
import { Download, Edit, Plus, Printer, Share } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from 'flowbite-react';
import { buttonTheme } from '@/app/asset/theme';
import { BRAND_COLOR } from '@/app/_libs/theme';
import { JSX, useMemo, useState } from 'react';
import { useUnauthStore } from '@/app/providers/unauth-provider';
import { BrandColor } from '@/app/_libs/types/invoice';
import { TEMPLATES, TRANSACTION_TYPES } from '@/app/_libs/enums';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import { capitalizeFirst } from '@/app/_libs/helpers';
import { ColorPicker, IColor, useColor } from 'react-color-palette';
import 'react-color-palette/css';

export const Action = ({ slug }: { slug: string }) => {
  const { invoice, receipt, setInvoce, setReceipt, setStep, step } =
    useUnauthStore((state) => state);
  const [palette, setPalette] = useState<boolean>(false);

  const router = useRouter();

  const data = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE ? invoice : receipt;
  }, [invoice, receipt, slug]);
  const [color] = useColor(data.brandColor.bgColor ?? BRAND_COLOR.GRAY.bgColor);

  const setState = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE ? setInvoce : setReceipt;
  }, [setInvoce, setReceipt, slug]);

  const handleClick = (theme: BrandColor) => {
    setState({ brandColor: theme });
  };

  const renderTheme = () => {
    const theme: JSX.Element[] = [];
    for (const [key, value] of Object.entries(BRAND_COLOR)) {
      theme.push(
        <div
          style={{
            borderColor: value.border,
            backgroundColor:
              value.bgColor === data.brandColor.bgColor
                ? 'bg-white'
                : value.bgColor,
          }}
          className={`
           h-[24px] w-[24px] border flex justify-center items-center rounded-full 
            cursor-pointer`}
          onClick={() =>
            handleClick(BRAND_COLOR[key as keyof typeof BRAND_COLOR])
          }
          key={key}
        >
          <div
            style={{ backgroundColor: value.bgColor }}
            className={`h-[17px] w-[17px] rounded-full`}
          ></div>
        </div>
      );
    }
    return theme;
  };

  const handleTemplateClick = (template: string) => {
    setState({ template });
  };

  const renderTemplate = () => {
    return Object.keys(TEMPLATES).map((key: string) => {
      const value = TEMPLATES[key as keyof typeof TEMPLATES];
      return (
        <div className="flex gap-2 items-center" key={key}>
          <div
            className={`${
              value === data.template
                ? 'border-theme-primary'
                : 'border-gray-400'
            }
           h-[24px] w-[24px] border bg-white pr-[0.4px] flex justify-center items-center rounded-full 
            cursor-pointer`}
            onClick={() => handleTemplateClick(value)}
          >
            <div
              className={`h-[17px] w-[17px] rounded-full ${
                value === data.template ? 'bg-theme-primary' : 'bg-white'
              }`}
            ></div>
          </div>
          <span className="text-black">{value}</span>
        </div>
      );
    });
  };

  const printContent = useReactToPrint({
    contentRef: {
      current:
        typeof window !== 'undefined'
          ? document.getElementById('content')
          : null,
    },
  });
  const handlePrint = () => {
    printContent();
  };

  const download = useReactToPrint({
    contentRef: {
      current:
        typeof window !== 'undefined'
          ? document.getElementById('content')
          : null,
    },
    print: async (printIframe: HTMLIFrameElement) => {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 'smart',
        precision: 10,
      });
      const document = printIframe.contentDocument;
      if (document) {
        const html = document.getElementsByTagName('html')[0];
        const width = doc.internal.pageSize.getWidth();
        doc.html(html, {
          callback: () => {
            doc.save(`${slug}.pdf`);
          },
          x: 0,
          y: 0,
          width: width,
          windowWidth: 800,
        });
      }
    },
  });

  const handleDownload = () => {
    download();
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
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const dataURI = await snap();
    const blob = await (await fetch(dataURI)).blob();

    const fileName = `${slug}.pdf`;

    const file = new File([blob], fileName, { type: blob.type });
    const shareData = {
      title: capitalizeFirst(slug),
      files: [file],
    };
    try {
      await navigator.share(shareData);
    } catch {}
  };

  const handleCustomColor = (color: IColor) => {
    const hex = color.hex.toString();
    setState({
      brandColor: {
        ...data.brandColor,
        bgColor: hex,
        border: hex,
      },
    });
  };

  return (
    <div className="grid md:py-6 md:px-12 p-3">
      <div className="grid py-3">
        <h3 className="text-black font-lora">Customize your {slug}</h3>
        <div className="grid gap-4 mt-3 mb-4">{renderTemplate()}</div>
      </div>
      <div className="grid py-3">
        <h3 className="text-black font-lora">Color Theme</h3>
        <div className="flex flex-wrap gap-4 mt-3 mb-4">{renderTheme()}</div>
      </div>
      <div className="flex flex-col">
        <div
          onClick={() => setPalette(!palette)}
          className="flex items-center justify-between border border-gray-300 rounded p-2"
        >
          <span className="text-black font-lora">Custom</span>
          <div className="relative w-2.5 h-2.5 rotate-[-138.00deg]">
            <div className="absolute w-2.5 h-px top-0 left-0 bg-black rounded-sm" />
            <div className="absolute w-2.5 h-px top-1 left-[-5px] bg-black rounded-sm rotate-[270deg]" />
          </div>
        </div>
        {palette && (
          <div className="custom-layout my-3">
            <ColorPicker
              hideAlpha
              hideInput={['hsv']}
              color={color}
              onChange={handleCustomColor}
              height={150}
            />
          </div>
        )}
      </div>

      <div className="h-[1px] bg-slate-100 w-full my-4" />
      <div className="grid gap-3">
        <div className="flex justify-between items-center gap-2">
          <Button
            onClick={() => {
              router.back();
            }}
            className="grid items-center gap-2 w-[55%] bg-red-400 justify-center hover:bg-red-300 rounded-lg text-white"
          >
            <Edit size={14} className="mt-1 mr-1" />
            <span className="text-sm">Edit</span>
          </Button>
          <Button
            className="flex items-center w-[65%] border border-theme-primary bg-white text-theme-primary"
            onClick={handleDownload}
            disabled={data.business.businessName ? false : true}
          >
            <Download size={14} className="mr-2" />
            <span className="text-sm">Download</span>
          </Button>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            className="flex items-center w-1/2 bg-theme-secondary justify-center hover:bg-theme-secondary/80 rounded-lg text-white"
            onClick={handleShare}
            disabled={data.business.businessName ? false : true}
          >
            <Share size={16} className="mr-1" />
            <span>Share</span>
          </Button>
          <Button
            className="flex items-center w-1/2"
            onClick={handlePrint}
            disabled={data.business.businessName ? false : true}
          >
            <Printer size={14} className="mr-2 mt-[2px]" />
            <span className="text-sm">Print</span>
          </Button>
        </div>
        <Button
          theme={buttonTheme}
          color="primary"
          className="flex items-center"
          onClick={() => {
            router.replace(`/tools/${slug}`);
            setStep(step - 1);
          }}
        >
          <Plus size={14} className="mr-2" />
          <span className="text-sm">New {slug}</span>
        </Button>
      </div>
    </div>
  );
};
