import PageHeader from '../components/PageHeader';
import ServicesGrid from '../components/ServicesGrid';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';

// СТРАНИЦА «УСЛУГИ»
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Издания Fallout"
        title="Fallout"
        subtitle="Окунись в мир полной аморальщины и мутантов."
      />
      <ServicesGrid title="Все издания Fallout" subtitle="Полная коллекция серии" />
      
      
      
      <CtaBanner title="Хочешь поиграть?" text="Заплати и играй сколько влезит." />
    </>
  );
}
