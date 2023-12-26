import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Content } from '../components/contents/entity/content.type'

interface ContentState {
  content: Map<string, Content>
}

interface ContentContextType {
  contentState: ContentState
  setContentState: (contentState: ContentState) => void
}

const ContentContext = createContext<ContentContextType | null>(null)

export const ContentProvider: React.FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [contentState, setContentState] = useState<ContentState>({
    content: new Map()
  })

  useEffect(() => {
  }, [contentState])

  return (
    <ContentContext.Provider value={{ contentState, setContentState }}>{children}</ContentContext.Provider>
  )
}

export const useContent = () => useContext(ContentContext)
