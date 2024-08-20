'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { cn } from '@/app/_utils/utils';
import { Calendar } from './calendar';
import { DateFormatter } from 'react-day-picker';

export function DatePicker({
  date,
  onSelect,
  placeholder,
}: {
  date: any;
  onSelect: (date: any) => void;
  placeholder: string;
}) {
  const formatDay: DateFormatter = (day) => day.getDate().toLocaleString('es');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full text-gray-800 hover:bg-white justify-start text-left font-normal py-[1.2872rem] px-4 bg-white',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-gray-800" />
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          initialFocus
          formatters={{ formatDay }}
        />
      </PopoverContent>
    </Popover>
  );
}
