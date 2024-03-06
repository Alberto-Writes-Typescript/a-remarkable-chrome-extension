// @ts-expect-error Required for React to be in scope
import React, { type ReactElement } from 'react'

export const Layout = (): ReactElement => {
  async function uploadFile ({ target: { files } }): Promise<void> {
    const file: File = files[0]
    const fileBuffer: ArrayBuffer = await arrayBuffer(file)
  }

  async function arrayBuffer (file: File): Promise<ArrayBuffer> {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onloadend = () => {
        const buffer = reader.result as ArrayBuffer
        resolve(buffer)
      }

      reader.onerror = reject

      reader.readAsArrayBuffer(file)
    })
  }

  return (
    <div className="w-[400px] h-fit px-8 py-6 space-y-6 bg-remarkableBackground-500">
      {/* Title */}
      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">ARCE</h1>

      {/* Content */}
      <div className="space-y-1">
        <label htmlFor="file" className="text-xs text-gray-700">Upload file to cloud</label>
        <div className="px-2 py-1 bg-remarkableBackground-100 border rounded-md">
          <p className="w-full text-center text-xs text-gray-400 italic">select file to upload</p>
          <input id="file" type="file" className="hidden" onChange={uploadFile}/>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-2">
        <hr/>
        <p className="text-[8px] text-gray-400">Non-official reMarkable extension - Alberto Hernandez, 2024</p>
      </div>
    </div>
  )
}
