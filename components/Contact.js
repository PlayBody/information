export default function Contact() {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p>Email: jordantj0821@gmail.com</p>
      <p>Phone: +1 318 996 1202</p>
      <a
        href="/resume.pdf"
        download="Jordan_Jones_Resume.pdf"
        className="block mt-4 p-2 bg-blue-500 text-white rounded text-center"
      >
        Download Resume
      </a>
    </section>
  );
}
