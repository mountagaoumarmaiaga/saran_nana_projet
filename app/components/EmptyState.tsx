import { icons } from 'lucide-react'
import React, { FC } from 'react'

interface EmptyStateProps {
    IconComponent: keyof typeof icons,
    message: string
}

const EmptyState: FC<EmptyStateProps> = ({ IconComponent, message }) => {
    // Vérification que l'icône existe
    const SelectedIcon = icons[IconComponent]
    
    // Si l'icône n'existe pas, utiliser une icône par défaut
    if (!SelectedIcon) {
        console.warn(`Icône "${IconComponent}" non trouvée. Utilisation de l'icône par défaut.`)
        const DefaultIcon = icons['Package']
        return (
            <div className='w-full h-full my-20 flex justify-center items-center flex-col'>
                <div className='wiggle-animation'>
                    <DefaultIcon strokeWidth={1} className='w-30 h-30 text-primary' />
                </div>
                <p className='text-sm'>{message}</p>
            </div>
        )
    }

    return (
        <div className='w-full h-full my-20 flex justify-center items-center flex-col'>
            <div className='wiggle-animation'>
                <SelectedIcon strokeWidth={1} className='w-30 h-30 text-primary' />
            </div>
            <p className='text-sm'>{message}</p>
        </div>
    )
}

export default EmptyState