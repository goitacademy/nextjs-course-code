import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
