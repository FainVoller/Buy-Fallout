import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

// СТРАНИЦА «О НАС»
export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="О студии"
        title="О нас"
        subtitle="Небольшая команда, которая ничего не далет и хочет спать."
      />

      {/* Текстовый блок в две колонки: текст и картинка-заглушка */}
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Наша миссия</h2>
            <p>
              Нет у нас никакой мисси, мы пиратим игры и продаем вам...
            </p>
            <p>
             Мы единороги!!!
            </p>
          </div>
          <div className="ph ph--4x3"><img src='/Team.jpg' alt="ХЫ" className='team-image'/></div>
        </div>
      </section>

      <Stats />
     
     
      <Testimonials />
     
    </>
  );
}
