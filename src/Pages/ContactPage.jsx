import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Clock,
  Gift,
  Truck,
  Award
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="0"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const WHATSAPP_NUMBER = '7203060213';

const vipPerks = [
  {
    icon: <Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" />,
    title: 'Complimentary Discovery Vial',
    desc: 'Every flacon includes a 2ml travel sample to test before unsealing.'
  },
  {
    icon: <Truck size={16} className="text-amber-500 shrink-0 mt-0.5" />,
    title: 'Discreet Insured Air Express',
    desc: 'Dispatched within 24 hours with live priority tracking across India.'
  },
  {
    icon: <Award size={16} className="text-amber-500 shrink-0 mt-0.5" />,
    title: '35% Extrait & Tuscan Leather',
    desc: 'Composed in Grasse, France paired with full-grain Italian leathercraft.'
  },
  {
    icon: <Gift size={16} className="text-amber-500 shrink-0 mt-0.5" />,
    title: 'Bespoke Sizing & Gift Packaging',
    desc: 'Complimentary custom sizing, wax seals, and luxury coffret presentation.'
  }
];

const faqs = [
  {
    q: 'How fast is express delivery across India?',
    a: 'Orders are dispatched within 24 hours via air express, reaching within 2-4 business days.'
  },
  {
    q: 'Can I order directly on WhatsApp?',
    a: 'Yes, click the WhatsApp button to chat directly with our concierge team.'
  }
];

const ContactPage = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Perfume Collection (35% Extrait)',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const lines = [
      `*✨ New Concierge Inquiry - Maison COAG*`,
      ``,
      `*Client Details:*`,
      `• *Name:* ${formData.name}`,
      `• *Phone:* ${formData.phone}`,
      formData.email ? `• *Email:* ${formData.email}` : null,
      formData.city ? `• *City:* ${formData.city}` : null,
      `• *Interest:* ${formData.category}`,
      ``,
      `*Message:*`,
      formData.message || 'Looking for assistance with your luxury collection.'
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fafafa] text-black min-h-screen selection:bg-black selection:text-white pb-16">

      {/* ========================================================
          1. LUXURY HERO SECTION
          ======================================================== */}
      <section className="relative bg-[#070709] text-white pt-8 sm:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[260px] bg-gradient-to-b from-amber-500/15 via-amber-900/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto space-y-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs tracking-widest uppercase font-semibold text-neutral-400">
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                else window.location.hash = '#home';
              }}
              className="hover:text-amber-300 transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>Home</span>
            </button>
            <span className="text-white/30">/</span>
            <span className="text-amber-400 font-bold">Contact Concierge</span>
          </div>

          {/* Heading & Badge */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[10px] uppercase tracking-[0.22em] font-bold">
              <Sparkles size={11} className="text-amber-400" />
              <span>MAISON COAG • PRIVATE CLIENT SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-wide text-white leading-tight">
              Get in Touch with Our Concierge
            </h1>

            <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              For private perfume allocations, bespoke leather sizing, or general inquiries, our dedicated advisors are at your service.
            </p>
          </div>

          {/* 3 Concierge Highlight Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white tracking-wide">Dedicated Advisory</p>
                <p className="text-[10px] text-neutral-400">Personal Concierge Support</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white tracking-wide">Insured Express</p>
                <p className="text-[10px] text-neutral-400">2-4 Days Priority Air</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles size={15} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white tracking-wide">Bespoke Gifting</p>
                <p className="text-[10px] text-neutral-400">Personalized Requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">


          {/* Left: Detailed Luxury Inquiry Form */}
          <div className="md:col-span-7 bg-white p-4 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-sm space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 block">
                Private Client Services
              </span>
              <h2 className="text-xl font-serif font-light text-black pt-0.5">
                Send an Inquiry
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Please share your details below to connect directly with our WhatsApp concierge.
              </p>
            </div>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 size={28} className="mx-auto text-emerald-600" />
                <h3 className="text-sm font-bold text-emerald-900">Inquiry Sent via WhatsApp!</h3>
                <p className="text-xs text-emerald-700">
                  Our private client concierge will assist you shortly on +91 7203060213.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black text-xs text-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block">
                      Interested In
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black text-xs text-black cursor-pointer"
                    >
                      <option value="Perfume Collection (35% Extrait)">Perfume Collection (35% Extrait)</option>
                      <option value="Luxury Leather Belts">Luxury Leather Belts</option>
                      <option value="Artisanal Leather Wallets">Artisanal Leather Wallets</option>
                      <option value="Bespoke Gifting & Corporate">Bespoke Gifting & Corporate</option>
                      <option value="General Inquiry">General Concierge Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: City / Location */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block">
                    City / Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter Your City"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black text-xs text-black"
                  />
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block">
                    Message / Special Request
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your desired fragrance notes, belt sizes, or specific requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black text-xs text-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: The Atelier Experience & VIP Privileges */}
          <div className="md:col-span-5 space-y-4">

            {/* Atelier Luxury Card */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
              {/* Top Image Banner */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/images/Header_img.jpeg"
                  alt="Maison COAG Private Atelier"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[9.5px] uppercase tracking-[0.2em] font-bold text-amber-300">
                    Bespoke Craftsmanship
                  </span>
                  <h3 className="text-base font-serif font-light text-white">
                    The Private Atelier Experience
                  </h3>
                </div>
              </div>

              {/* VIP Concierge Privileges List */}
              <div className="p-5 space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                  Concierge Privileges
                </span>

                <div className="space-y-3">
                  {vipPerks.map((perk, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        {perk.icon}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-neutral-900 leading-tight">
                          {perk.title}
                        </h4>
                        <p className="text-[11px] text-neutral-500 leading-relaxed">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ================= FAQ (COMPACT) ================= */}
        <div className="mt-10 pt-8 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200/80 text-xs space-y-1">
                <p className="font-bold text-neutral-900 flex items-center space-x-1.5">
                  <HelpCircle size={13} className="text-amber-500 shrink-0" />
                  <span>{faq.q}</span>
                </p>
                <p className="text-neutral-600 pl-4 text-[11px] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};

export default ContactPage;


