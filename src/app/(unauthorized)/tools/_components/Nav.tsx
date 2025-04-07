'use client';

import { capitalizeFirst } from '@/app/_libs/helpers';
import { StepIndicator } from './StepIndicator';
import { ArrowLeft } from 'lucide-react';
import { useUnauthStore } from '@/app/providers/unauth-provider';

export const ToolNav = ({ slug }: { slug: string }) => {
  const store = useUnauthStore((state) => state);

  const handleBack = () => {
    store.setStep(store.step - 1);
  };

  return (
    <div className="grid md:flex md:justify-between gap-y-8 items-center mb-6">
      <div
        className="flex items-center gap-[6px] cursor-pointer"
        onClick={handleBack}
      >
        <ArrowLeft className={`${store.step > 1 ? 'flex' : 'hidden'}`} />
        <p className="text-xl">{capitalizeFirst(slug)} Generator</p>
      </div>
      <StepIndicator />
    </div>
  );
};
