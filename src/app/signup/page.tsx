import React from 'react'
import SignUpComponent from '@/components/pages/signup'
import { Metadata } from 'next';
import { MetaTags } from '@/contants/meta-data';

export const metadata: Metadata = MetaTags?.signUpPage;

export default function SignUpPage() {
  return (
    <SignUpComponent/>
  )
}
