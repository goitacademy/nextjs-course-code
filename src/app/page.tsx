import ActiveLabel from '@/app/components/active-label';
import NotActiveLabel from '@/app/components/not-active-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
