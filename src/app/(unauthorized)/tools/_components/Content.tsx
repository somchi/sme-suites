'use client';

import { useUnauthStore } from '@/app/providers/unauth-provider';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

export const Content = ({ slug }: { slug: string }) => {
  const store = useUnauthStore((state) => state);
  return <>{store.step === 1 ? <StepOne /> : <StepTwo slug={slug} />}</>;
};
