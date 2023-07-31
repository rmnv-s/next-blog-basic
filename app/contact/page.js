import ContactForm from '../components/contact-form/contact-form';
function ContactPage() {
  return (
    <>
      <h1 className='text-xl text-center py-3 text-ace-white'>
        Ace Ventura ждет твоего предложения!{' '}
      </h1>
      <ContactForm />
    </>
  );
}

export default ContactPage;
