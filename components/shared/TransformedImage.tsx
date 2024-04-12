import React from 'react'
import Image from 'next/image'

const TransformedImage = ({
  image,
  type,
  title,
  isTransforming,
  setIsTransforming,
  hasDownload = false
} : TransformedImageProps) => {

  const downloadHandler = (e : any) => {

  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex-between'>
          <h3 className='h3-bold text-dark-600'>
              Transformed
          </h3>

          {
            hasDownload && (
              <button
                type='button'
                className='download-btn' 
                onClick={(e) => downloadHandler(e)}>
                  <Image
                      src={"/assets/icons/download.svg"}
                      alt='Download'
                      width={24}
                      height={24}
                      className='pb-[6px]'
                  />
              </button>
            )
          }
      </div>
    </div>
  )
}

export default TransformedImage