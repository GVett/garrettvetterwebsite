function ContactPage() {
  return (
    <>
      <h2 className="mb-4" style={{color:'#ffe38d'}}>Contact</h2>
      <div className="card" style={{maxWidth:'480px'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color:'#F2C6A0'}}>Get in Touch</h5>
          <p className="card-text text-secondary">
            Open to talk about whatever burning questions you may have!
          </p>
          <p className="mb-0">
            <a href="mailto:garrettvetter@icloud.com">garrettvetter@icloud.com</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
