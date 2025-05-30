import styles from "./single-scroll.module.css";
export default function SingleScrollLayout({ children, theme }) {

  return (
    <main style = {theme} >
      {children}
    </main>
  );
}