import { prefix } from "./prefix";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "főoldal", label: "Főoldal" },
  {
    href: "/booking-information",
    key: "foglalási-információk",
    label: "Foglalási információk",
  },
  { href: "/#gallery", key: "galéria", label: "Galéria" },
  { href: "/#guide", key: "látnivalók", label: "Látnivalók " },
  { href: "/#features", key: "részletek", label: "Részletek" },
];

export const EXTERNAL_LINKS = {
  direction: "https://maps.app.goo.gl/NTZuCVKRgqDrAXtX7",
};

// GALLERY
export const GALLERY = [
  {
    backgroundImage: "bg-gallery-img-1",
    title: "Udvar",
    subtitle: "Külső nézet",
  },
  {
    backgroundImage: "bg-gallery-img-2",
    title: "Udvar",
    subtitle: "Belső udvar és a tornác",
  },
  {
    backgroundImage: "bg-gallery-img-3",
    title: "Udvar",
    subtitle: "Szalonnasütő, Bográcsozó",
  },
  {
    backgroundImage: "bg-gallery-img-4",
    title: "Udvar",
    subtitle: "Napozás idilli környezetben",
  },
  {
    backgroundImage: "bg-gallery-img-5",
    title: "Tornác",
    subtitle: "Autentikus paraszt tornác",
  },
  {
    backgroundImage: "bg-gallery-img-5_2",
    title: "Tornác",
    subtitle: "Autentikus paraszt tornác",
  },
  {
    backgroundImage: "bg-gallery-img-5_3",
    title: "Tornác",
    subtitle: "Autentikus paraszt tornác",
  },
  {
    backgroundImage: "bg-gallery-img-6",
    title: "Tornác",
    subtitle: "Virágok ölelésében",
  },
  {
    backgroundImage: "bg-gallery-img-7",
    title: "Belső, szoba",
  },
  {
    backgroundImage: "bg-gallery-img-8",
    title: "Belső, szoba",
  },
  {
    backgroundImage: "bg-gallery-img-9",
    title: "Belső, szoba",
  },
  {
    backgroundImage: "bg-gallery-img-11",
    title: "Belső, szoba",
  },
  {
    backgroundImage: "bg-gallery-img-12 ",
    title: "Belső, szoba",
  },
  {
    backgroundImage: "bg-gallery-img-13 ",
    title: "Belső, szoba",
  },
];

//GUIDE SECTION
export const GUIDES = [
  {
    name: "Mofetta",
    distance: "200 m",
    backgroundImage: "bg-guide-img-1",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Siroki vár",
    distance: "15 km",
    backgroundImage: "bg-guide-img-2",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Ilona-völgyi vízesés",
    distance: "18 km",
    backgroundImage: "bg-guide-img-3",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Bükkszékfürdő strand",
    distance: "20 km",
    backgroundImage: "bg-guide-img-4",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Oxygen Adrenalin Kalandpark",
    distance: "27 km",
    backgroundImage: "bg-guide-img-8",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Csörgő szurdok",
    distance: "35 km",
    backgroundImage: "bg-guide-img-5",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Kékes",
    distance: "35 km",
    backgroundImage: "bg-guide-img-6",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
  {
    name: "Ágasvár",
    distance: "40 km",
    backgroundImage: "bg-guide-img-7",
    description:
      "fasfasjlkajlfjaslfkjsalkjlajaskjlsfkjsafklasjaslfjaslkjasklskfalsjkfaslfjkasfksajklasfjaklsfjasfasklfjasfasfasflkjasjjasfjkals",
  },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Parkolás",
    icon: `${prefix}/parking.svg`,
    variant: "green",
    description: "A parkolás több autóval is megoldható, udvaron belül.",
  },
  {
    title: "Szobák felszereltsége",
    icon: `${prefix}/rooms.svg`,
    variant: "green",
    description:
      "Két különálló szobánk van, a nagyobb szobában 3 db ágy található ( ebből 2 franciaágyként összetolva kétszemélyes ágyként használható ) és 1 db külön álló ágy. A másik szobában szintén 2 összetolt ágy található kényelmes matracokkal. Plédek, könyvek, társasjáték, szintén a vendégek rendelkezésére állnak.",
  },
  {
    title: "Konyha felszereltsége",
    icon: `${prefix}/kitchen.svg`,
    variant: "green",
    description:
      "A konyhában megtalálható gáztűzhely, hűtőszekrény mélyhűtő résszel, mikrohullámú sütő, kenyérpirító, szendvicssütő, vízforraló, kávéfőző",
  },
  {
    title: "Kert",
    icon: `${prefix}/garden.svg`,
    variant: "orange",
    description:
      "Lehetőség van bográcsozásra, szalonnasütésre, melyhez minden eszközt biztosítani tudunk. (például: nyárs, fa)",
  },
  {
    title: "Wifi",
    icon: `${prefix}/wifi.png`,
    variant: "green",
    description: "Ingyen wifi használat",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Cím",
    links: [
      {
        address: "3246 Mátraderecske, Almáskút 2.",
        map: "https://maps.app.goo.gl/StJhsn9xbYwenGsR7",
      },
    ],
  },
];

export const CONTACT = {
  email: "farkascsekemercedesz[kukac]gmail.com",
  tel: "06 30 5711859",
};

export const FOOTER_CONTACT_INFO = {
  title: "Elérhetőségek",
  links: [
    { label: "Telefonszám", value: CONTACT.tel },
    { label: "Email cím", value: CONTACT.email },
  ],
};

export const SOCIALS = {
  title: "Egyéb",
  links: [
    {
      image: `${prefix}/facebook.svg`,
      url: "https://www.facebook.com/profile.php?id=61550635649248",
    },
  ],
};
