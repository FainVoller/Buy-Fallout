import PageHeader from '../components/PageHeader';
import ProjectsGrid from '../components/ProjectsGrid';
import BeforeAfter from '../components/BeforeAfter';
import Stats from '../components/Stats';
import CtaBanner from '../components/CtaBanner';

// СТРАНИЦА «РАБОТЫ» (ПОРТФОЛИО)
export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="Издания Fallout"
        title="Fallout"
        
      />
      <ProjectsGrid title="Издания Fallaut" subtitle="Все издания серии по выгодным ценам !!" />
      <CtaBanner title="Хочешь поиграть?" text="Заплати и играй." />
    </>
  );
}
