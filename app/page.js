"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import CalLayout from './components/CalLayout'
import DisplayLayout from './components/DisplayLayout'
import TipForm from './components/TipForm'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-5 lg:p-24 gap-3'>
      <h1 className='text-[50px]'>Tip calculator</h1>

      <div>
        <CalLayout>
          <TipForm />
        
        </CalLayout>


      </div>
    </div>


  )
}
