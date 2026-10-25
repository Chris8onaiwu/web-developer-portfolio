function Contact() {
  return (
    <section id="contact" className="contact">
      <div>
        <div className="intro">04 / LET'S CONNECT</div>
        <h2>Do you have a project in mind?</h2>
        <p>I’m open to discussing web projects and developer opportunities. Feel free to reach out.</p>
      </div>

      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="message"
          placeholder="Write me a message"
          required
        />
        <button type="submit" className="btn">
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
