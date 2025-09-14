/**
 * 일정 글자 수 넘었을 경우 말 줄임표 표시 유틸
 * @param {string} text 텍스트
 * @param {number} limit 제한 글자 수
 * @returns
 */
export const truncateText = (text: string, limit: number) => {
  if (!text) return '';
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};
