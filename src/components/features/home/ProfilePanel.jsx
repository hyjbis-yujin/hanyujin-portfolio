import React from 'react'
import { copyEmailToClipboard, CONTACT_EMAIL } from '@/lib/contact'

const ProfilePanel = () => {
    return (
        <div className="home-panel profile-panel">
            <div className="profile-info">
                <span className="profile-name">Han Yujin</span>
                <span className="profile-email">{CONTACT_EMAIL}</span>
            </div>
            <div className="profile-actions">
                <button className="panel-btn copy-email" onClick={copyEmailToClipboard}>
                    <span className="btn-icon btn-arrow-icon"></span>
                    Copy Email
                </button>
                <a
                    className="panel-btn placeholder-btn"
                    href="https://www.figma.com/design/PhSq35LWDT4jn0uUoClhW2/%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0-1&t=0S6Jab2ZmEPMa4cr-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="btn-icon btn-arrow-icon"></span>
                    Resume
                </a>
            </div>
        </div>
    )
}

export default ProfilePanel
