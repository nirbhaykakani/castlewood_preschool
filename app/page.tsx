import Image from "next/image";

const googleMapsUrl =
  "https://www.google.com/maps/place/Castlewood+International+school/@22.6990084,75.8503397,17z/data=!4m6!3m5!1s0x3962fd60830a97cb:0xd494e850f3764d03!8m2!3d22.6990084!4d75.8503397!16s%2Fg%2F11f615nsv0";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=22.6990084%2C75.8503397";
const schoolPhone = "+918819977111";
const schoolPhoneDisplay = "088199 77111";
const schoolEmail = "castlewoodpreschool@gmail.com";
const schoolAddress =
  "6 Extention Rajmahal Colony, Near 6, Manik Bagh Rd, Four Bungalows, Indore, Madhya Pradesh 452007";

const programs = [
  {
    age: "18 months – 2.5 years",
    name: "Playgroup",
    description: "A happy first step into a bigger, brighter world.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    color: "peach",
  },
  {
    age: "2.5 – 3.5 years",
    name: "Nursery",
    description: "Curiosity takes the lead, one little discovery at a time.",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85",
    color: "yellow",
  },
  {
    age: "3.5 – 4.5 years",
    name: "Junior KG",
    description: "Big ideas, new friendships, and room to grow.",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=85",
    color: "blue",
  },
  {
    age: "4.5 – 5.5 years",
    name: "Senior KG",
    description: "Growing confidence for the wonderful years ahead.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    color: "green",
  },
];

const reasons = [
  {
    number: "01",
    title: "Little learners, big feelings",
    text: "We build a safe, caring space where every child feels seen, heard, and ready to try.",
  },
  {
    number: "02",
    title: "Learning you can touch",
    text: "Stories, songs, messy art, and real-world play turn everyday moments into discoveries.",
  },
  {
    number: "03",
    title: "A village around your child",
    text: "Warm teachers and open conversations make families a part of every little milestone.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M4.5 10h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`brand${inverse ? " brand-inverse" : ""}`}
      href="#top"
      aria-label="Castlewood Preschool home"
    >
      <Image
        className="brand-logo"
        src={inverse ? "/castlewood-logo-on-dark.png" : "/castlewood-logo-on-light.png"}
        alt="Castlewood International Pre-School — Learn with pride"
        width={561}
        height={388}
        unoptimized
        loading={inverse ? "lazy" : "eager"}
      />
    </a>
  );
}

function NavigationLinks() {
  return (
    <>
      <a href="#our-story">Our story</a>
      <a href="#programs">Programs</a>
      <a href="#our-way">Our approach</a>
      <a href="#visit">Find us</a>
    </>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">
        <span>A little place for big beginnings</span>
        <span className="announcement-note">Admissions now open · 2026–27</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavigationLinks />
          </nav>
          <a className="button button-small header-cta" href="#visit">
            Come say hello <ArrowIcon />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              <NavigationLinks />
              <a href="#visit">Book a visit <ArrowIcon /></a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A preschool for curious hearts</p>
          <h1 id="hero-title">
            Little steps.
            <br />
            <em>Lovely</em> big things.
          </h1>
          <p className="hero-description">
            Childhood isn&apos;t a race to the next thing. It&apos;s a thousand
            small, wonderful discoveries along the way.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#programs">
              Find their happy place <ArrowIcon />
            </a>
            <a className="text-link" href="#our-story">
              Get to know us
            </a>
          </div>
          <div className="hero-footnote">
            <a
              className="google-rating"
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Rated 4.8 out of 5 from 99 reviews on Google Maps"
            >
              <span className="rating-stars" aria-hidden="true">★★★★★</span>
              <span><strong>4.8</strong> on Google <span className="rating-divider">·</span> 99 reviews</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-photo">
            <div className="photo-caption">
              <span className="caption-dot" />
              <span>Room to wonder</span>
            </div>
          </div>
          <div className="sun-doodle" aria-hidden="true">✳</div>
          <div className="hero-sticker">
            <span>PLAY</span>
            <span>IS HOW</span>
            <span>WE GROW</span>
            <span className="sticker-star">✳</span>
          </div>
          <div className="hero-note">
            <span>Small hands,</span>
            <span>big imagination.</span>
            <svg aria-hidden="true" viewBox="0 0 64 28" fill="none">
              <path d="M2 5c20 22 38 22 56 6m0 0-12-2m12 2-1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Our promise">
        <span>GROW AT YOUR OWN PACE</span>
        <span className="ticker-flower">✳</span>
        <span>COME AS YOU ARE</span>
        <span className="ticker-flower">✳</span>
        <span>MAKE A LITTLE MAGIC</span>
        <span className="ticker-flower">✳</span>
        <span>GROW AT YOUR OWN PACE</span>
      </section>

      <section className="story section-pad" id="our-story">
        <div className="story-image-wrap">
          <div className="story-image" role="img" aria-label="Children sharing a playful moment outside" />
          <div className="story-stamp">
            <span>THE</span>
            <strong>good</strong>
            <span>OLD DAYS</span>
          </div>
          <span className="image-scribble" aria-hidden="true">aah!</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span /> Welcome to Castlewood</p>
          <h2 id="story-title">
            Remember when
            <br />
            everything felt <em>new?</em>
          </h2>
          <p>
            The first puddle jump. The first friend. The first time they did it
            all by themselves. At Castlewood, we make space for all of it.
          </p>
          <p>
            We&apos;re a close-knit preschool where little ones feel at home,
            follow their curiosity, and find their own way to shine.
          </p>
          <a className="text-link underlined" href="#our-way">
            A little more about us <ArrowIcon />
          </a>
          <div className="story-signoff">With care, the Castlewood team <span>♡</span></div>
        </div>
      </section>

      <section className="programs section-pad" id="programs">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> A place for every little stage</p>
            <h2>Big days for <em>little people.</em></h2>
          </div>
          <p className="section-intro">
            Every age brings a brand-new kind of wonderful. There&apos;s a
            Castlewood day for each one.
          </p>
        </div>
        <div className="program-grid">
          {programs.map((program, index) => (
            <a
              className={`program-card card-${program.color}`}
              href="#visit"
              key={program.name}
            >
              <div
                className="program-image"
                role="img"
                aria-label={`${program.name} preschool children learning through play`}
                style={{ backgroundImage: `url("${program.image}")` }}
              >
                <span className="program-number">0{index + 1}</span>
                <span className="program-age">{program.age}</span>
              </div>
              <div className="program-info">
                <div>
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                </div>
                <span className="round-arrow"><ArrowIcon /></span>
              </div>
            </a>
          ))}
        </div>
        <p className="program-footnote">Wonder grows differently in every child. We&apos;re here for all of it.</p>
      </section>

      <section className="approach" id="our-way">
        <div className="approach-top">
          <div>
            <p className="eyebrow eyebrow-light"><span /> The Castlewood way</p>
            <h2>
              No two little
              <br />
              worlds are <em>the same.</em>
            </h2>
          </div>
          <p className="approach-lead">
            So we don&apos;t believe in one-size-fits-all childhood. Just
            thoughtful days, good people, and lots of room to be a kid.
          </p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason" key={reason.number}>
              <span className="reason-number">{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
        <div className="approach-bottom">
          <span>More wonder. Less hurry.</span>
          <span className="approach-sparkle">✳</span>
          <span>That&apos;s our kind of growing up.</span>
        </div>
      </section>

      <section className="day-section section-pad">
        <div className="day-heading">
          <p className="eyebrow"><span /> A day, the Castlewood way</p>
          <h2>Little rituals. <em>Big memories.</em></h2>
          <p>
            A happy day has a rhythm to it: room to explore, time to connect,
            and a soft landing when it&apos;s time to go home.
          </p>
        </div>
        <div className="day-steps">
          <div className="day-step">
            <span className="step-time">09:00 <span>AM</span></span>
            <span className="step-icon step-sun">☼</span>
            <div><h3>Good morning, sunshine</h3><p>Warm hellos &amp; a gentle start</p></div>
          </div>
          <div className="day-step">
            <span className="step-time">10:00 <span>AM</span></span>
            <span className="step-icon step-flower">✿</span>
            <div><h3>Follow that curiosity</h3><p>Play, make, ask, discover</p></div>
          </div>
          <div className="day-step">
            <span className="step-time">11:30 <span>AM</span></span>
            <span className="step-icon step-heart">♡</span>
            <div><h3>Our little circle</h3><p>Stories, songs &amp; being together</p></div>
          </div>
          <div className="day-step">
            <span className="step-time">12:30 <span>PM</span></span>
            <span className="step-icon step-star">✦</span>
            <div><h3>See you tomorrow</h3><p>One last hug, a whole lot to tell</p></div>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-doodle visit-doodle-one" aria-hidden="true">✳</div>
        <div className="visit-doodle visit-doodle-two" aria-hidden="true">✿</div>
        <div className="visit-copy">
          <p className="eyebrow eyebrow-light"><span /> Your next little adventure</p>
          <h2>Come see where<br />the <em>magic happens.</em></h2>
          <p>
            The best way to get a feel for Castlewood? Come on in, take a look
            around, and let your little one lead the way.
          </p>
          <div className="visit-actions">
            <a className="button button-cream" href={`tel:${schoolPhone}`}>
              Call to plan a visit <ArrowIcon />
            </a>
            <a className="visit-phone" href={googleMapsUrl} target="_blank" rel="noreferrer">
              Check today&apos;s hours on Google Maps
            </a>
          </div>
        </div>
        <div className="visit-card">
          <p className="visit-card-top">VISIT CASTLEWOOD</p>
          <h3>Castlewood International School</h3>
          <a className="school-detail school-rating" href={googleMapsUrl} target="_blank" rel="noreferrer">
            <span className="detail-icon rating-icon" aria-hidden="true">★</span>
            <span className="detail-copy">
              <span className="detail-label">GOOGLE RATING</span>
              <span className="school-stars" aria-label="5 stars">★★★★★</span>
              <span><strong>4.8/5</strong> · 99 reviews</span>
            </span>
            <ArrowIcon />
          </a>
          <a className="school-detail hours-detail" href={googleMapsUrl} target="_blank" rel="noreferrer">
            <span className="detail-icon hours-icon" aria-hidden="true">◷</span>
            <span className="detail-copy">
              <span className="detail-label">WORKING HOURS</span>
              <span className="hours-list">
                <span><strong>Mon – Sat</strong><span>10:00 AM – 2:30 PM</span></span>
                <span><strong>Sunday</strong><span>Closed</span></span>
              </span>
              <span className="hours-note">Holiday hours may vary. Check Google Maps for updates.</span>
            </span>
            <ArrowIcon />
          </a>
          <a className="school-detail" href={directionsUrl} target="_blank" rel="noreferrer">
            <span className="detail-icon" aria-hidden="true">↗</span>
            <span className="detail-copy">
              <span className="detail-label">OUR ADDRESS</span>
              <span>{schoolAddress}</span>
              <span className="detail-action">Get directions</span>
            </span>
            <ArrowIcon />
          </a>
          <a className="school-detail" href={`tel:${schoolPhone}`}>
            <span className="detail-icon phone-icon" aria-hidden="true">☎</span>
            <span className="detail-copy">
              <span className="detail-label">CALL US</span>
              <span>{schoolPhoneDisplay}</span>
            </span>
            <ArrowIcon />
          </a>
          <a className="school-detail" href={`mailto:${schoolEmail}`}>
            <span className="detail-icon email-icon" aria-hidden="true">@</span>
            <span className="detail-copy">
              <span className="detail-label">EMAIL US</span>
              <span>{schoolEmail}</span>
            </span>
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand inverse />
            <p>For all the little things<br />that turn into big things.</p>
            <div className="footer-socials" aria-label="Follow Castlewood Preschool">
              <a
                href="https://www.facebook.com/castlewoodpreschoolindore/"
                target="_blank"
                rel="noreferrer"
                aria-label="Castlewood Preschool on Facebook"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/castlewoodpreschoolindore/"
                target="_blank"
                rel="noreferrer"
                aria-label="Castlewood Preschool on Instagram"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.7" cy="6.6" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <span className="footer-label">WANDER AROUND</span>
            <a href="#our-story">Our story</a>
            <a href="#programs">Programs</a>
            <a href="#our-way">Our approach</a>
          </div>
          <div className="footer-links">
            <span className="footer-label">SAY HELLO</span>
            <a href={`tel:${schoolPhone}`}>{schoolPhoneDisplay}</a>
            <a href={`mailto:${schoolEmail}`}>{schoolEmail}</a>
            <a href={directionsUrl} target="_blank" rel="noreferrer">Get directions to our Indore school</a>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer">Hours &amp; reviews on Google Maps</a>
          </div>
          <a className="back-top" href="#top" aria-label="Back to top">↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Castlewood Preschool. Made with care.</span>
          <span>Little steps, lovely big things. <span className="footer-heart">♡</span></span>
        </div>
      </footer>
    </main>
  );
}
