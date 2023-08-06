import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SmoothScrollLink = ({ href, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === href) {
      return; // Don't scroll if the link points to the current page
    }

    const handleClick = (e) => {
      e.preventDefault();

      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    };

    const link = document.querySelector(`a[href='${href}']`);
    link.addEventListener('click', handleClick);

    return () => {
      link.removeEventListener('click', handleClick);
    };
  }, [href, router.asPath]);

  return (
    <a href={href}>{children}</a>
  );
};

export default SmoothScrollLink;