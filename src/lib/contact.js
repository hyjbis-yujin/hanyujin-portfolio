// Single source of truth for contact info + the "copy email" action, reused by
// ProfilePanel (Home), Contact section, and the left quick-menu Navigation.
import { toast } from 'sonner'

export const CONTACT_EMAIL = "hanyujin0104@naver.com"
export const GITHUB_URL = "https://github.com/hyjbis-yujin"

export const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL)
        .then(() => toast.success('이메일이 복사되었습니다!'))
        .catch(() => toast.error('이메일 복사에 실패했습니다.'))
}
