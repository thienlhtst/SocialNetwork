import React, { useEffect, useState } from 'react'
 





export const _title = ({id} : {id:string}) => {
    const language:any[] = [{
        funtionId: 'fun1',
        title: 'dang nhap'
    },
    {
    
    
    }]
const [name, setName] = useState<string>('')
useEffect (() => {
    const findid= language.find(x=>x.funtionId ==id)
    setName(findid.title)
}
)
  return (
    <span>{name}</span>
  )
}
