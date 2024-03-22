import Header from '@/components/shared/Header'
// import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm';

import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationTypePage =async({params:{

type}}:SearchParamProps)=> {
  const {userId} = auth()
  const transformation = transformationTypes[type];
  // console.log(transformation.title)

  if(!userId){
    redirect('/sign-in')
  

  }
  
  const user =  await getUserById(userId)
  console.log(user)
  return (
   <div>
    <Header title={transformation.title} subtitle = {transformation.subTitle}/>
    {/* console.log(transformation.title) */}

    <section className='mt-10'>

        <TransformationForm 
        action ="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}/>

        </section>








   </div>
  )
}

export default AddTransformationTypePage




















