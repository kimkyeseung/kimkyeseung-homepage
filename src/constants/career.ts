import { EXPERIENCES } from './experiences'

// 'YYYY.MM' → 0부터 센 월 번호
function toMonthIndex(yearMonth: string) {
  const [year, month] = yearMonth.split('.').map(Number)
  return year * 12 + (month - 1)
}

function currentMonthIndex() {
  const now = new Date()
  return now.getFullYear() * 12 + now.getMonth()
}

// 재직 기간의 합(공백기는 빼고 센다). 문구에 연차를 직접 적지 말고 이 값을 쓸 것.
export const CAREER_MONTHS = EXPERIENCES.reduce((sum, exp) => {
  if (!exp.joinedAt) return sum
  const end = exp.isOngoing || !exp.seperatedAt ? currentMonthIndex() : toMonthIndex(exp.seperatedAt)
  return sum + Math.max(0, end - toMonthIndex(exp.joinedAt))
}, 0)

export const CAREER_YEARS = Math.floor(CAREER_MONTHS / 12)
