import css from 'components/PageTitle/PageTitle.module.css';

export const PageTitle = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};
