import React from 'react'
import {Button} from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <h1 className="text-4xl text-red-500 underline hover:text-xs">Welcome to my SaaS App.</h1>
      <Button>Lets get Started.</Button>
    </div>
  )
}

export default Page