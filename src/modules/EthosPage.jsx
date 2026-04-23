function Section({ title, children }) {
  return (
    <section className="mb-5">
      <h2 className="mb-3 pb-2" style={{color:'#ffe38d', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>{title}</h2>
      {children}
    </section>
  );
}

function Entry({ title, href, dates, items }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
          <h5 className="card-title mb-0" style={{color:'#F2C6A0'}}>
            {href ? <a href={href}>{title}</a> : title}
          </h5>
          <span className="badge text-secondary" style={{background:'rgba(255,255,255,0.05)', fontFamily:'Poppins'}}>{dates}</span>
        </div>
        {items && (
          <ul className="mt-3 mb-0 ps-3">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

function EthosPage() {
  return (
    <>
      <Section title="About Me">
        <p>
          Here is some ethos; I talk about a lot, so here are some things I've done
          and am currently doing.
        </p>
      </Section>
      <Section title="Experience">
        <Entry
          title="Oregon State University College of Engineering / IT Support Technician"
          dates="September 2024 – Present"
          items={[
            'Assist graduate students and professors with IT issues, keeping track of workflow using ServiceNow.',
            'Perform system maintenance and hardware upgrades.',
            'Manage endpoints remotely using Intune, build packages with MECM, and manage devices and permissions with Active Directory.',
          ]}
        />
        <Entry
          title="Alternative Youth Activities / IT Support Specialist"
          href="https://www.aya1.org/"
          dates="November 2023 – Present"
          items={[
            'Plan, install, and maintain security systems and network infrastructure across multiple locations',
            'Create, maintain, and add features to multiple websites',
            'Train and supervise clients to fulfill IT-related duties',
            'Maintain password security, inventory, and manage accounts using Google Admin',
          ]}
        />
        <Entry
          title="Alternative Youth Activities / Trail Maintenance Crew Lead"
          dates="June 2024 – September 2024"
          items={[
            'Identified hard-working individuals and simulated an interview process',
            'Managed a crew of 2–4 youth using hand and electrical tools on the Whiskey Run trail system',
            'Taught proper power tool safety and maintenance techniques',
          ]}
        />
      </Section>

      <Section title="Volunteer Experience">
        <Entry
          title="Alpha Gamma Rho Alpha Beta Chapter / VNR of Finance"
          dates="December 2024 – May 2025"
          items={[
            'Report balance sheet, accounts payable, accounts receivable, and income statement weekly, collect accounts receivable, file taxes, compensate contractors/employees, reconcile monthly, maintain a general ledger, bookkeep, etc.'
          ]}
        />
        <Entry
          title="Bulldog Pageant Fundraiser / Contestant"
          dates="September 2023 – March 2024"
          items={[
            <>Raised over $2,000 individually and $24,000+ total for <a href="https://childrensmiraclenetworkhospitals.org/">Children's Miracle Network</a></>,
          ]}
        />
      </Section>

      <Section title="Education">
        <Entry
          title="Oregon State University / B.S. Biological Data Sciences (Comp. Sci. Minor)"
          dates="September 2024 – Present"
        />
        <Entry
          title="Southwestern Oregon Community College / A.S. Computer Science (4.0 GPA)"
          dates="March 2022 – June 2024"
          items={['Valedictorian', 'Graduated with Honors']}
        />
        <Entry
          title="North Bend High School / Honors Diploma — Mathematics, English & Computer Technology (4.0 GPA)"
          dates="September 2020 – June 2024"
          items={['Valedictorian', 'Class President', 'Science National Honor Society President', 'Zonta Club Social Media Chair']}
        />
      </Section>
    </>
  );
}

export default EthosPage;
