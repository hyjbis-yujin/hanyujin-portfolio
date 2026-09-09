import { useState, useMemo } from 'react'
import { skills } from '@/data/skills'

const CATEGORY_CONFIG = {
    design: { label: 'Design' },
    publishing: { label: 'Publishing' },
    tool: { label: 'Tool' }
}

export const useSkillState = () => {
    const [activeTab, setActiveTab] = useState('design')

    const filteredSkills = useMemo(() => {
        return skills.filter(skill => skill.category === activeTab)
    }, [activeTab])

    const tabs = Object.keys(CATEGORY_CONFIG).map(key => ({
        id: key,
        label: CATEGORY_CONFIG[key].label,
        isActive: activeTab === key
    }))

    return {
        activeTab,
        setActiveTab,
        filteredSkills,
        tabs
    }
}
