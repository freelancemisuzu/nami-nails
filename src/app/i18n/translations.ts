export type Language = "en" | "ja";

export const translations = {
  // Navigation
  nav: {
    services: { en: "SERVICES", ja: "メニュー" },
    about: { en: "ABOUT", ja: "サロンについて" },
    testimonials: { en: "TESTIMONIALS", ja: "お客様の声" },
    faq: { en: "FAQ", ja: "よくある質問" },
    location: { en: "LOCATION", ja: "アクセス" },
    bookNow: { en: "BOOK NOW", ja: "予約する" },
  },

  // Hero
  hero: {
    bookAppointment: { en: "Book Appointment", ja: "ご予約はこちら" },
  },

  // Services
  services: {
    title: { en: "Nail Menu", ja: "ネイルメニュー" },
    subtitle: {
      en: "Bespoke nail artistry and care tailored to your unique style and needs.",
      ja: "お客様一人ひとりのスタイルに合わせた、こだわりのネイルアートとケア。",
    },
    items: [
      {
        title: { en: "Basic", ja: "Basic" },
        description: {
          en: "One Color, French, or Magnet",
          ja: "ワンカラー・フレンチ・マグネット",
        },
        duration: { en: "60-90 MIN", ja: "60〜90分" },
        price: { en: "FROM $80", ja: "¥8,000〜" },
      },
      {
        title: { en: "Design", ja: "Design" },
        description: {
          en: "60mins, 90mins, or 120mins Bespoke Art",
          ja: "60分・90分・120分 オーダーメイドアート",
        },
        duration: { en: "VARIES", ja: "時間制" },
        price: { en: "FROM $120", ja: "¥12,000〜" },
      },
      {
        title: { en: "Extensions", ja: "Extensions" },
        description: {
          en: "Gel Extension: One Color, French, or Magnet",
          ja: "ジェルエクステンション：ワンカラー・フレンチ・マグネット",
        },
        duration: { en: "120-150 MIN", ja: "120〜150分" },
        price: { en: "FROM $150", ja: "¥15,000〜" },
      },
      {
        title: { en: "Removal", ja: "Removal" },
        description: {
          en: "Only Removal, Gel Removal, or Extension Removal",
          ja: "オフのみ・ジェルオフ・エクステンションオフ",
        },
        duration: { en: "30-60 MIN", ja: "30〜60分" },
        price: { en: "FROM $30", ja: "¥3,000〜" },
      },
    ],
  },

  // About
  about: {
    title: { en: "About our salon", ja: "サロンについて" },
    paragraph1: {
      en: "NAMI NAILS is a sanctuary for those who appreciate the art of minimalism and the beauty of precision. Our studio is dedicated to providing an elevated nail care experience that combines modern techniques with a tranquil, refined atmosphere.",
      ja: "Aura Nailsは、上質なネイルケアを求める方々のための特別な空間です。ミニマルで落ち着いた環境の中、あなただけのネイルアートをご提案します。",
    },
    paragraph2: {
      en: "We believe that nails are a canvas for self-expression, and our artistry is rooted in the philosophy of \"intentional beauty\"—where every stroke and detail is carefully considered to enhance your natural elegance.",
      ja: "すべてのご来店が、くつろぎの体験になるよう心がけています。",
    },
    paragraph3: {
      en: "Founded on the principles of quality, hygiene, and bespoke service, NAMI NAILS offers a curated selection of treatments designed to leave you feeling restored and your hands looking impeccable.",
      ja: "お仕事や家事、どんなシーンでもあなたを輝かせるネイルを、プライベートな落ち着いた空間で丁寧に仕上げます。",
    },
    paragraph4: {
      en: "",
      ja: "歴史ある街の、小さな隠れ家サロン。",
    },
    paragraph5: {
      en: "",
      ja: "自分を整える、特別なひとときをお過ごしください。",
    },
    yearsLabel: { en: "YEARS OF EXCELLENCE", ja: "年の実績" },
    clientsLabel: { en: "CLIENTS SERVED", ja: "施術実績" },
  },

  // Testimonials
  testimonials: {
    title: { en: "Client Voices", ja: "Client Voices" },
    items: [
      {
        quote: {
          en: "It was my first time visiting, and I'm extremely satisfied with the result! The consultation was very thorough, and they finished my nails exactly as I requested. The salon's atmosphere is cozy, and I'll definitely be back.",
          ja: "初めて伺いましたが、大満足の仕上がりです！カウンセリングも丁寧で、こちらの要望通りにとても素敵に仕上げてくださいました。サロンの雰囲気も居心地が良く、ぜひまたお願いしたいです。",
        },
        author: "Sarah M.",
        role: { en: "CLIENT SINCE 2022", ja: "2022年からのお客様" },
      },
      {
        quote: {
          en: "The care and application are exceptionally careful, making my nails look incredibly beautiful! Their sense of style is outstanding, and looking at my hands always lifts my mood. The nails last a long time, so I can trust them completely.",
          ja: "とにかくケアと施術が丁寧で、爪の形がすごく綺麗に見えます！センスも抜群で、手元を見るたびに気分が上がります。モチも良いので安心してお任せできます。",
        },
        author: "Jessica L.",
        role: { en: "CLIENT SINCE 2020", ja: "2020年からのお客様" },
      },
      {
        quote: {
          en: "With their professional suggestions, I was able to find a design that perfectly suits me. It's a salon where you can feel at ease. I will definitely visit again.",
          ja: "プロならではの提案力で、自分に似合うデザインが見つかる安心のサロンです。また伺います。",
        },
        author: "Miranda K.",
        role: { en: "CLIENT SINCE 2021", ja: "2021年からのお客様" },
      },
      {
        quote: {
          en: "To put it simply, this is the best salon I've ever been to. The speed, meticulousness, and interpretation of design—everything was perfect. I'm definitely a regular now!",
          ja: "結論から言うと、今まで行ったサロンの中で一番良かったです。施術のスピード、丁寧さ、デザインの解釈、どれをとってもパーフェクト。リピート確定です！",
        },
        author: "Elena S.",
        role: { en: "CLIENT SINCE 2023", ja: "2023年からのお客様" },
      },
    ],
  },

  // FAQ
  faq: {
    title: { en: "Frequently Asked", ja: "よくある質問" },
    items: [
      {
        question: {
          en: "How long does a gel manicure typically last?",
          ja: "ジェルネイルはどのくらい持ちますか？",
        },
        answer: {
          en: "A professional gel manicure usually lasts between 2 to 3 weeks depending on your nail growth and lifestyle. To ensure longevity, we recommend using cuticle oil daily and wearing gloves when using harsh cleaning chemicals.",
          ja: "プロのジェルネイルは、爪の伸び方やライフスタイルにもよりますが、通常2〜3週間持続します。長持ちさせるために、キューティクルオイルの毎日の使用と、強い洗剤を使用する際の手袋の着用をおすすめします。",
        },
      },
      {
        question: {
          en: "Do you offer custom nail art designs?",
          ja: "持ち込みのネイルアートは可能ですか？",
        },
        answer: {
          en: "Yes! We specialize in minimalist and bespoke nail artistry. Whether you have a specific reference or want us to create something unique for you, our artists are skilled in various techniques from hand-painted details to 3D elements.",
          ja: "はい！ミニマリストでオーダーメイドのネイルアートを得意としています。具体的なイメージをお持ちの方も、お任せでオリジナルデザインをご希望の方も、手描きから3Dまで様々な技法で対応いたします。",
        },
      },
      {
        question: {
          en: "What kinds of payments do you accept?",
          ja: "どのような支払い方法がありますか？",
        },
        answer: {
          en: "We accept cash, major credit cards (Visa, Mastercard, Amex), and Apple Pay.",
          ja: "現金、主要なクレジットカード（Visa、Mastercard、Amex）、およびApple Payをご利用いただけます。",
        },
      },
      {
        question: {
          en: "What is your cancellation policy?",
          ja: "キャンセルポリシーについて教えてください。",
        },
        answer: {
          en: "We ask that you provide at least 24 hours notice for any cancellations or rescheduling. Cancellations within 24 hours will be charged 50% of the scheduled service fee.",
          ja: "キャンセルや日程変更の場合は、24時間前までにご連絡をお願いいたします。24時間以内のキャンセルにつきましては、ご予約メニューの50%のキャンセル料を申し受けます。",
        },
      },
      {
        question: {
          en: "Can I get a manicure if I have damaged nails?",
          ja: "爪が傷んでいてもネイルはできますか？",
        },
        answer: {
          en: "During your consultation, we will assess the health of your natural nails. If they are severely damaged, we may recommend a strengthening treatment or a break from enhancements to allow them to recover. We always prioritize the long-term health of your nails.",
          ja: "カウンセリングの際に、自爪の健康状態を確認させていただきます。重度のダメージがある場合は、補強トリートメントやお休み期間をおすすめすることもあります。爪の長期的な健康を常に最優先に考えています。",
        },
      },
      {
        question: {
          en: "What is the difference between gel polish and hard gel?",
          ja: "ジェルポリッシュとハードジェルの違いは何ですか？",
        },
        answer: {
          en: "Gel polish is a long-lasting color that is applied like regular polish but cured under a lamp. Hard gel is a thicker, more durable enhancement used for extending nail length or providing extra strength to the natural nail. Both require professional removal to prevent damage.",
          ja: "ジェルポリッシュは通常のマニキュアのように塗布し、ライトで硬化させる長持ちするカラーです。ハードジェルはより厚く耐久性のある素材で、長さ出しや自爪の補強に使用します。どちらもダメージを防ぐため、プロによるオフが必要です。",
        },
      },
    ],
  },

  // Location
  location: {
    title: { en: "Our Location", ja: "アクセス" },
    description: {
      en: "",
      ja: "",
    },
    addressLabel: { en: "Address", ja: "Address" },
    address1: { en: "1-2-3 Minami-Aoyama", ja: "〒107-0062  東京都港区南青山1-2-3" },
    address2: { en: "Minato-ku, Tokyo 107-0062", ja: "" },
    contactLabel: { en: "Contact", ja: "Contact" },
    hoursLabel: { en: "Opening Hours", ja: "Opening Hours" },
    weekdays: { en: "Mon. - Fri. 11:00 - 20:00", ja: "Mon.-Fri. 11:00-20:00" },
    saturday: { en: "Saturday: 11:00 - 20:00", ja: "Sat. 11:00-20:00" },
    sunday: { en: "Sun. - Holidays: 11:00 - 17:00", ja: "Sun.-Holidays 11:00-17:00" },
  },

  // Footer
  footer: {
    bookNow: { en: "Online Booking", ja: "オンラインで予約" },
    contact: { en: "CONTACT", ja: "CONTACT" },
    hours: { en: "HOURS", ja: "HOURS" },
    weekdays: { en: "Mon. - Fri. 11:00 - 20:00", ja: "Mon.-Fri. 11:00-20:00" },
    saturday: { en: "Saturday: 11:00 - 20:00", ja: "Sat. 11:00-20:00" },
    sunday: { en: "Sun. - Holidays: 11:00 - 17:00", ja: "Sun.-Holidays 11:00-17:00" },
    copyright: {
      en: "© 2026 NAMI NAILS. All rights reserved.",
      ja: "© 2026 NAMI NAILS. All rights reserved.",
    },
  },
} as const;

export function t(
  entry: Record<Language, string>,
  lang: Language
): string {
  return entry[lang];
}
