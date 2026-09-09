import React from 'react'
import { AlertCircle } from 'lucide-react'
import MetaGrid from '@/components/ui/MetaGrid'
import HighlightList from './HighlightList'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
}

const ProjectModalContent = ({ project, activeView = 'output' }) => {
    // Localized meta items
    // Design-only projects describe device/responsive coverage instead of a dev tech stack.
    const stackItem = project.meta?.device
        ? { label: '디바이스 대응', value: project.meta.device }
        : { label: '기술 스택', value: project.meta?.stack }

    const metaItems = [
        { label: '분류', value: project.meta?.main },
        { label: '기여도', value: project.meta?.contribution },
        { label: '작업기간', value: project.meta?.duration },
        stackItem
    ].filter(item => item.value && String(item.value).trim() !== '')

    // PROCESS view shows the problem/solution/result case study; falls back to the
    // meta + highlights content (shown under OUTPUT) if a project has no caseStudy yet.
    const showCaseStudy = activeView === 'process' && !!project.caseStudy

    // The case-study (PROCESS) side hides the live Demo link and the "site may differ"
    // notice; both only make sense next to the meta/highlights (OUTPUT) side.
    const showDemoAndNotice = !showCaseStudy

    return (
        <motion.div
            className="modal-right-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* Header */}
            <motion.div className="modal-header-group" variants={itemVariants}>
                <h2 id="modal-title" className="modal-title">{project.title}</h2>
            </motion.div>

            {showCaseStudy ? (
                /* PROCESS: Problem definition > Solution design > Project result */
                <motion.div
                    key="process-case-study"
                    className="modal-case-study"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="case-study-block">
                        <h3 className="case-study-label">문제 정의</h3>
                        <p className="case-study-text">{project.caseStudy.problem}</p>
                    </div>
                    <div className="case-study-block">
                        <h3 className="case-study-label">솔루션 설계</h3>
                        <HighlightList items={project.caseStudy.solution || []} />
                    </div>
                    <div className="case-study-block">
                        <h3 className="case-study-label">프로젝트 결과</h3>
                        <HighlightList items={project.caseStudy.result || []} />
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="output-meta"
                    className="modal-output-content"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Meta Grid */}
                    <div>
                        <MetaGrid items={metaItems} />
                    </div>

                    {/* Highlights */}
                    <div className="modal-highlights">
                        <h3 className="highlight-title">주요 작업</h3>
                        <HighlightList items={(project.highlights || []).slice(0, 5)} />
                    </div>
                </motion.div>
            )}

            {/* Actions (Moved to bottom). Always rendered (even empty, on PROCESS)
                so the row/side-by-side desktop layout keeps its original
                margin-top: auto bottom-pinning behavior untouched. PROCESS never
                has a GitHub/Demo link or notice to show (showDemoAndNotice is
                false there), so an empty-but-present flex item here still pulls
                in modal-right-section's gap before it — that only becomes a
                visible double-gap bug in the stacked (mobile, <=1024px) modal
                layout, where the "is-empty" class lets the SCSS hide it (see
                @media (max-width: 1024px) .modal-actions-group.is-empty in
                _modal.scss); above that width it stays rendered and empty exactly
                as before. */}
            <motion.div
                className={`modal-actions-group${showDemoAndNotice ? '' : ' is-empty'}`}
                variants={itemVariants}
            >
                {showDemoAndNotice && (
                    <>
                        <div className="modal-actions">
                            {project.links?.github && project.links.github !== '#' && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-action"
                                >
                                    GitHub
                                </a>
                            )}
                            {project.links?.demo && project.links.demo !== '#' && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-action"
                                >
                                    {project.links.demo.toLowerCase().endsWith('.pdf') ? 'PDF' : 'Demo'}
                                </a>
                            )}
                        </div>

                        {project.type === 'Company' && (
                            <p className="modal-notice">
                                <AlertCircle strokeWidth={2} />
                                <span>개편 또는 유지보수로 인해 사이트가 기존과 상이할 수 있습니다.</span>
                            </p>
                        )}
                    </>
                )}
            </motion.div>

        </motion.div>
    )
}

export default ProjectModalContent
