import { FC } from "react"

type PropsWithChildren = {
    children: React.ReactNode
  }

export const LigthLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <h3>Ligth-Layout</h3>
            <div>
                {children}
            </div>
            
        </div>
    )
}
