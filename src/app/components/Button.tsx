import React from 'react'

type buttonProps = {
  text: string
  classes: string
  icon?: React.ReactElement
}

export function Button ({ text, classes, icon }: buttonProps) {
  return (
    <button
      className={`${classes} flex items-center gap-2 rounded-xl`}
    >
      {text}
      {icon}
    </button>
  )
}
