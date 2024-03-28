import Header from '@/components/shared/header'
import React from 'react'

type SearchParamProps = {
  params : {
    type : string
  }
}
const AddTransformationTypePage = ({ params : { type }} : SearchParamProps) => {
  return (
    <Header title="Transformation Title" subTitle="Transformation Subtitle" />
  )
}

export default AddTransformationTypePage