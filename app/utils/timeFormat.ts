/**
 * dateTime을 상대시간으로 변경하는 유틸 함수
 * @param {string} dateString dateTime
 * @returns 상대시간
 */
export const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  let diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // 미래 시간일 경우
  if (diffInSeconds < 0) diffInSeconds = 0;

  if (diffInSeconds < 60) {
    return `${diffInSeconds}초 전`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}일 전`;
};
