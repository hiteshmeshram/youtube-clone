import React from 'react'
import Button from './Button'

const btnNames=["All","Gaming","Live","programming","music","Esport","Cricket" ,"valorant","BGMI","Hockey","Football","IPL","SOngs","valorant","BGMI","Hockey","Football","IPL"]

const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll'>

        {btnNames.map((name,index)=>{
          return  <Button key={index} name={name}/>
        })}
        
        
        {/* <Button name="Gaming"/>
        <Button name="Live"/>
        <Button name="Gaming"/>
        <Button name="Gaming"/>
        <Button name="Gaming"/>
        <Button name="Gaming"/>
        <Button name="Gaming"/>
        <Button name="Gaming"/>
        <Button name="Gaming"/> */}
    </div>
  )
}

export default ButtonList