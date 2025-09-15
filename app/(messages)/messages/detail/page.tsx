import { Suspense } from 'react';
import MainContent from './content/main';

const MessageDetailPage = () => {
  return (
    <Suspense>
      <MainContent />
    </Suspense>
  );
};

export default MessageDetailPage;
