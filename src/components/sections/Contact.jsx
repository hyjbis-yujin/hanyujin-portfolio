import Section from '@/components/common/Section'
import { motion } from 'framer-motion'
import { cinematicReveal } from '@/styles/animations'
import { copyEmailToClipboard, GITHUB_URL } from '@/lib/contact'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const Contact = () => {
    return (
        <>
            <Section id="contact" className="contact-section-overflow">
                <motion.div
                className="contact-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4, margin: "-10% 0px -10% 0px" }}
            >
                <div className="contact-message-box">
                    <motion.h2 className="contact-title" variants={itemVariants}>
                        감사합니다.
                    </motion.h2>
                    <motion.p className="contact-desc" variants={itemVariants}>
                        방문자가 저의 사고 과정을 자연스럽게 따라올 수 있도록 목적과 이용 환경을 고려해 구조를 설계한 프로젝트입니다.<br />
                        더 나은 경험을 위해 사용성과 디테일을 꾸준히 다듬어가고자 합니다.
                    </motion.p>
                </div>

                <motion.div className="contact-buttons" variants={itemVariants}>
                    <button
                        onClick={copyEmailToClipboard}
                        className="btn-contact email"
                        aria-label="이메일 주소 복사하기"
                    >
                        <span>E-Mail</span>
                    </button>

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-contact github"
                        aria-label="깃허브 방문하기"
                    >
                        <span>GitHub</span>
                    </a >
                </motion.div>
                </motion.div>
                
                <footer>
                    <div className="footer-container">
                        본 사이트는 개인 포트폴리오 목적으로 제작되었으며, 상업적 용도로 사용하지 않습니다.
                        <br /> Copyright ⓒ YUJIN
                    </div>
                </footer>
            </Section>
        </>
    )
}

export default Contact
