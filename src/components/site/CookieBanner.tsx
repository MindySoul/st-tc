import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem('tecsol_cookies')) setShow(true); }, []);
  if (!show) return null;
  const accept = (kind: string) => { localStorage.setItem('tecsol_cookies', kind); setShow(false); };
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-background border-t-[3px] border-primary shadow-2xl animate-fade-in">
      <div className="container py-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
        <p className="text-sm text-foreground max-w-2xl">
          Usamos cookies para melhorar sua experiência e personalizar anúncios. Ao continuar, você aceita nossa{' '}
          <a href="/politica-de-privacidade" target="_blank" className="text-primary font-semibold underline">Política de Privacidade</a>.
        </p>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => accept('all')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold uppercase btn-press hover:bg-primary-dark">Aceitar todos</button>
          <button onClick={() => accept('essential')} className="border border-primary text-primary px-4 py-2 rounded-md text-sm font-semibold uppercase btn-press hover:bg-primary-soft">Apenas essenciais</button>
        </div>
      </div>
    </div>
  );
};
export default CookieBanner;
