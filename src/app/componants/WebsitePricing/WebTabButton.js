import { useTransition } from 'react';

export default function WebTabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <button className="active-btn-tab">{children}</button>
  }
  if (isPending) {
    return <button className="pending">{children}</button>;
  }
  return (
    <button onClick={() => {
      startTransition(() => {
        onClick();
      });
    }}>
      {children}
    </button>
  );
}