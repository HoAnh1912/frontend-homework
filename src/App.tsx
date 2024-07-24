import Routes from 'assets/routes';
import LoadingCustom from 'components/LoadingCustom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('vite:preloadError', _ => {
      window.location.reload();
    });
  }, []);
  return (
    <>
      {/* <LoadingCustom /> */}
      <Routes />
    </>
  );
}

export default App;
