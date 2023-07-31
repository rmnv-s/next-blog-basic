function ContactForm() {
  return (
    <section className='container'>
      <form className='max-w-md m-auto border-2 border-white rounded p-5'>
        <fieldset className='flex flex-col'>
          <label className='mb-2' forHtml='email'>
            Email
          </label>
          <input className='p-2 mb-4' type='email' id='email' required />
        </fieldset>

        <fieldset className='flex flex-col'>
          <label className='mb-2' forHtml='name'>
            Имя
          </label>
          <input className='p-2 mb-4' type='text' id='name' required />
        </fieldset>

        <fieldset className='flex flex-col'>
          <label className='mb-2' for='story'>
            О чем должен быть следующий пост
          </label>

          <textarea
            className='p-2 mb-10'
            id='story'
            name='story'
            rows='5'
            cols='33'
          >
            О том как Ace Ventura...
          </textarea>
        </fieldset>

        <button className='p-5 bg-amber-400 uppercase text-sm'>
          Отправить
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
