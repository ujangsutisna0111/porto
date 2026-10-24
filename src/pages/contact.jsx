const CONTACT_EMAIL = "ujangsutisnao11@gmail.com";
const INSTAGRAM_USERNAME = "ujangsutisna";
const WHATSAPP_NUMBER = "083877481603";
const WHATSAPP_LINK_NUMBER = "6283877481603";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = `Nama: ${name}\nEmail: ${senderEmail}\n\nPesan:\n${message}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="flex flex-1 flex-col px-container-mobile py-10 sm:px-8 sm:py-12 lg:px-desktop lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Hubungi Saya
          </p>
          <h1 className="text-3xl font-bold text-brand-green sm:text-4xl">
            Mari ngobrol tentang ide kamu
          </h1>
          <p className="mt-4 leading-relaxed text-gray-600">
            Punya pertanyaan, ide proyek, atau ingin bekerja sama? Kirim pesan
            lewat formulir ini atau hubungi saya melalui Instagram.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Nama
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Nama kamu"
                  required
                  className="min-h-12 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nama@email.com"
                  required
                  className="min-h-12 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Subjek
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Tentang apa pesanmu?"
                required
                className="min-h-12 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Pesan
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tulis pesan kamu di sini..."
                required
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover sm:w-auto"
            >
              Buka email untuk mengirim
            </button>
            <p className="text-xs leading-relaxed text-gray-500">
              Formulir ini akan membuka aplikasi email dengan pesan yang sudah
              terisi. Tekan Send di aplikasi email untuk mengirimkannya.
            </p>
          </form>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-brand-text">
                Info kontak
              </h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-5 flex items-center gap-3 rounded-xl p-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-brand-green">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3.75 6.75h16.5v10.5H3.75z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m4.5 7.5 7.5 6 7.5-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-gray-500">Email</span>
                  <span className="break-all font-medium">{CONTACT_EMAIL}</span>
                </span>
              </a>

              <a
                href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-3 rounded-xl p-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs text-gray-500">Instagram</span>
                  <span className="font-medium">@{INSTAGRAM_USERNAME}</span>
                </span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_LINK_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-3 rounded-xl p-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.48 0 .11 5.37.11 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.93 11.93 0 0 0 5.88 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.54-8.42ZM12.09 21.84h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.9 9.9 0 0 1-1.52-5.29c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.05 2.92 9.9 9.9 0 0 1 2.91 7.06c0 5.5-4.47 9.96-9.96 9.96Zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.49 0 1.48 1.07 2.9 1.22 3.1.15.2 2.11 3.23 5.12 4.53.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs text-gray-500">WhatsApp</span>
                  <span className="font-medium">{WHATSAPP_NUMBER}</span>
                </span>
              </a>
            </section>

            <section className="rounded-2xl bg-green-50 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-green-900">
                Saya terbuka untuk diskusi proyek, kolaborasi, maupun sekadar
                bertukar cerita seputar teknologi.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
