import React from 'react'
import { Check } from 'lucide-react'

// Shared checkmark list used by the OUTPUT tab's "주요 작업" and the
// PROCESS tab's "솔루션 설계" / "프로젝트 결과". Keep this as the single
// source for that list styling — marker, color, icon size, indentation,
// line-height and item spacing must stay identical across all three.
const HighlightList = ({ items = [] }) => {
    return (
        <ul className="highlight-list">
            {items.map((text, idx) => (
                <li key={idx} className="highlight-item">
                    <Check strokeWidth={3} aria-hidden="true" />
                    <span>{text}</span>
                </li>
            ))}
        </ul>
    )
}

export default HighlightList
