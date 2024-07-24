import './globals.css';

const Error404 = () => {
  return (
    <section className='h-96 w-full flex flex-col justify-center items-center'>
      <h1 className='md:text-3xl text-red-600 '>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exit.</p>
    </section>
  );
};

export default Error404;
