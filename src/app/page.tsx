import styles from './index.module.scss';

// TODO: Reactive grid effect from https://www.youtube.com/watch?v=bAwEj_mSzOs and when clicked it turns to light and dark mode respectively

export default function Home() {
  return (
    <header>
      <div className="flex flex-col pl-8 justify-center items-center w-full h-full absolute overlay">
        <h1 className="title text-4xl sm:text-7xl break-words">
          Juliette
          <small className="pronouns text-2xl text-cambridge-blue">
            (Jules)
          </small>{' '}
          Cordor
        </h1>
        <small className="pronouns text-4xl text-cambridge-blue">
          {' '}
          (She/Her){' '}
        </small>
      </div>
    </header>
  );
}
