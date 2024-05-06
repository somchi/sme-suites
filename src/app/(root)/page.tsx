import LandingModules from '@/app/_components/LandingModules';

export default async function Index() {
  return (
    <div className="">
      <div className="">
        <LandingModules />
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://adventlabs.ng"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Adventlabs
          </a>
        </p>
      </footer>
    </div>
  );
}
