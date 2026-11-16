
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href =
      `mailto:dhanushskms11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title="Contact Me"
          icon={<Mail size={28} />}
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12">

          {/* Left Content */}
          <div>
            <p className="text-cyan-400 font-mono text-sm mb-4">
  LET'S CONNECT
</p>

<h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
  Let's start a conversation.
</h3>

<p className="text-slate-400 text-base leading-relaxed mb-10">
  I'm looking forward to connecting with professionals and exploring opportunities in software development.
</p>
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail size={21} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  {/* PASTE ORIGINAL EMAIL HERE */}
                  <a href="mailto:dhanushskms11@gmail.com"
                    className="text-slate-200 hover:text-cyan-400 transition-colors">
                    dhanushskms11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Phone size={21} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Phone</p>
                  {/* PASTE ORIGINAL PHONE NUMBER HERE */}
                  <a href="tel:+916383853508"
                    className="text-slate-200 hover:text-cyan-400 transition-colors">
                    +91 6383853508
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <MapPin size={21} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-slate-200">Tamil Nadu, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="p-7 md:p-9 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">

            <h3 className="text-2xl font-bold text-white mb-2">
              Send Me a Message
            </h3>

            <p className="text-slate-400 text-sm mb-7">
              Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
