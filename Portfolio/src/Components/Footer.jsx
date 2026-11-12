import { useLanguage } from "../i18n/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-black border-t py-8 dark:bg-black dark:text-white dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p>
            © {t.footer.madeBy}, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
