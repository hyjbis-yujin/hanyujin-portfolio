import React from 'react'
import { smoothScrollTo } from '@/lib/smoothScroll'
import { copyEmailToClipboard, GITHUB_URL } from '@/lib/contact'

const Navigation = () => {

    const handleScrollToHome = () => {
        smoothScrollTo('#home')
    }

    return (
        <aside className="left-quick-btn">
            <button
                onClick={handleScrollToHome}
                className="quick-btn btn-home"
                aria-label="Go to Home"
            />

            <button
                onClick={copyEmailToClipboard}
                className="quick-btn btn-mail"
                aria-label="Copy Email"
            />

            <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="quick-btn btn-github"
                aria-label="Go to GitHub"
            />
        </aside>
    )
}

export default Navigation
