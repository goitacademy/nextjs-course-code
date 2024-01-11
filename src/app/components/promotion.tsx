import React from 'react';
import Image from 'next/image';
import { Promotion } from '@/lib/api';

export interface PromotionProps {
  promotion: Promotion;
}

export default function Promotion({ promotion }: PromotionProps) {
  return (
    <div className="rounded overflow-hidden	bg-gray-100">
      <div className="relative w-full h-40 bg-gray-300">
        {promotion.avatar && (
          <Image fill src={promotion.avatar} alt="promotion avatar" />
        )}
        <div className="w-14 h-14 absolute top-0 left-px rounded-br-full bg-lime-200" />
        <div className="w-14 h-14 absolute inset-0 py-3 pr-3 pl-0.5 rounded-br-full bg-gray-900">
          <p className="text-center text-xs font-bold text-lime-200">{`-${promotion.discount}%`}</p>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-3">
        <p className="text-base font-semibold text-gray-900">
          {promotion.title}
        </p>
        <p className="text-sm text-gray-900">{promotion.description}</p>
      </div>
    </div>
  );
}
