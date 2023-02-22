import '../styles/globals.scss';
import '../styles/buttons.scss';
import '../styles/spinner.scss';
import '../styles/input.scss';
import '../styles/modal.scss';

export default function App({ Component, pageProps }) {
  return (
    <div className='app'>
      <Component {...pageProps} />
    </div>
  );
}
