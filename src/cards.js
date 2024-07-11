import gallo from "./resources/cards/gallo.mp3";
import diablito from "./resources/cards/diablito.mp3";
import dama from "./resources/cards/dama.mp3";
import catrin from "./resources/cards/catrin.mp3";
import paraguas from "./resources/cards/paraguas.mp3";
import sirena from "./resources/cards/sirena.mp3";
import escalera from "./resources/cards/escalera.mp3";
import botella from "./resources/cards/botella.mp3";
import barril from "./resources/cards/barril.mp3";
import arbol from "./resources/cards/arbol.mp3";
import melon from "./resources/cards/melon.mp3";
import valiente from "./resources/cards/valiente.mp3";
import gorrito from "./resources/cards/gorrito.mp3";
import muerte from "./resources/cards/muerte.mp3";
import pera from "./resources/cards/pera.mp3";


const cards = [
  {
    number: 1,
    title: "El gallo",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiELgCOkFihnfrFhZm8-k8y3VbP-9l6uYDfLFKtZcDpTVDjnY3w5fs7d1Y_t_ymZ9fCibiQmBy49T7FVXx_ChZPQVNTs6Em_WEwM4418dcDjV_PTMXoO870aKsXulxQ5jNdFhHDRlixXUvd/s2048/1+el+gallo-min.jpg",
    audio: gallo,
  },
  {
    number: 2,
    title: "El diablito",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpMd4AmiLjEj5-5wMnq6N3Rq9w62Wd8IW0vixl1cMIx7-wAa12iru-9nhicfo0QOCgSgCdVg-DUdoYix3Kl7rlhRZ-cTjLNwPvtcQ5vgM9lmm_Y0DVqqlGQD7Y8_bbyYluZGVyn7xYfsY_/s2048/2+el+diablito-min.jpg",
    audio: diablito,
  },
  {
    number: 3,
    title: "La dama",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3UTmiA0emppS5ReZoBdkG8DRL9dm7FOtpvixVBH_eRQhufezbS2uOy2SWjmVaG_GD0DrVJlXP68k3n56FBf1BelPsPWcp0tA1SMx49KHEDZobS8YRhWASk9AEZOI8KvZqyqmYdf6rxfJU/s2048/3+la+dama-min.jpg",
    audio: dama,
  },
  {
    number: 4,
    title: "El catrín",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwM3iDoBYnx709GQyODn2FetIoa34VccgT_y4oEnnmEzMPrczFkjg0qjlrMho67tRSwrzPVwwkyIWlaWxWOkO5tNY4TTLPnKrjWgrpVW5KaRvNleoXleR2C0lnWKNFCsO1zVYY4ZSfAAzD/s2048/4+el+catrin-min.jpg",
    audio: catrin,
  },
  {
    number: 5,
    title: "El paraguas",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf6X02vhQ2gztnDOOersNdgeOFk_BXH41z1u8YT-YD54VrE9aUCma3Fzv0ABfDRTLurZm-sbeFhinUh09PsiQPq5k51WEivI15H2GN8zu3JWUvx8MSIbC2GbPJLkP3QNQGmAySe4sALF7P/s2048/5+el+paraguas-min.jpg",
    audio: paraguas,
  },
  {
    number: 6,
    title: "La sirena",
    img: "https://i.pinimg.com/736x/1b/ef/7a/1bef7a9851e216fa406f1082431da080.jpg",
    audio: sirena,
  },
  {
    number: 7,
    title: "La escalera",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxd5WbnjOFp2LvBGYvLPkps1JZUvBCJC4zaY5cC82BfhdNrFfsnjRRJSlv8-E1evifH9urszzc73XtTQBraNjOKfG67-viqAAwVS7m4vctaIjJq60L9Eg-kh_dzyYzDkmuqFCZ7axg6whI/s2048/7+la+escalera-min.jpg",
    audio: escalera,
  },
  {
    number: 8,
    title: "La botella",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjB51FHDv7wRqucPtvIgBl_1fErHJSz60TQ4-bFkJHsEioJ83dmNj6rjpgUy3_z_qEaIqQUe5BgxSfsAxA-1iG1EMhFLoz47g7aiP9v7AoNKdpaGoDbmsml0FaflBnxjn1sO8sD-BkmeDc/s2048/8+la+botella-min.jpg",
    audio: botella,
  },
  {
    number: 9,
    title: "El barril",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghLRMmREBG7UC8IAdqurcy3zdmVIgaTb4O30jLodIdbkv0lzfXfKUppNO-DO87nmW3vv1K1hgzn97xAFhZNuXsmNa9-H1ufv5IOrKisdwormSLhFWoe2n07c89u6syDS9VkTTCKq_0hESp/s2048/9+barril-min.jpg",
    audio: barril,
  },
  {
    number: 10,
    title: "El árbol",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAzOW_ZuznkiJ2VmVFZH5vTzK-9fx7de8F37BejIrKvFRji1GS6iqBQYklSCvwDn1dguyU0vxcnBMIhxG_HZsFxtfMg-6tgCcVdlha31WjTht4eptKwYxeNqsQn13vCaH55hg3FMWY8_EC/s2048/10+arbol-min.jpg",
    audio: arbol,
  },
  {
    number: 11,
    title: "El melón",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOxWPG-bRHmcjPTTnE-Uf7YUbgQ51S2Qil0XqkL0iXRnNGkIJMV-1Qzl7BwfNceoRqwWdRdyKyaTLMtR6dB2EuQPiIPRBRBZD2miFdaEKlUQUkXIAHyCQ9IeeOrVGsaQCZLVPkCRFOT0cT/s2048/11+melon-min.jpg",
    audio: melon,
  },
  {
    number: 12,
    title: "El valiente",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2CRz8N2qxDEui9ILDY9IufJkZIB6puFQ6BmsFrclePaItPwa9ofa2NnnQWB03dhNTH_GraMqoeyVuDjjMCN5clzg8MybBb4f0XYB_8yJ6Ew6S6sWNhg9Vqhdj9VqJEb6MNzSN40vCQzeT/s2048/12+el+valiente-min.jpg",
    audio: valiente,
  },
  {
    number: 13,
    title: "El gorrito",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9nuWPC1gXBR-W6mDM4K0Xqcyed1RfcFIQIBQqro27YCEUVyZ4FXSqFQnW3OLbt9BLWygPgpd7mBMK-FNShE6qe-0nl10LfWclIU1bOEHqxpkw7fEkrmiV27TRsAu3kL31JB8UsHkO0oiT/s2048/13+el+gorrito-min.jpg",
    audio: gorrito,
  },
  {
    number: 14,
    title: "La muerte",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMcD_79SiNSP_lj6e63Zy42Du4q-lGvha-_-W6saAzzwjHdNV-S-lC8d78lt3trfZLr7HlCgOhwvVK_I-TaFiEjIp_7HPHhUQMqaSgGUSEjImXlSIEzcu0-2vLJR9JuktPSMaUQ7-6gChj/s2048/14+la+muerte-min.jpg",
    audio: muerte,
  },
  {
    number: 15,
    title: "La pera",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8DkNIeeFvuZAyUec-TscLnsc5epuYjU_CXsiN7eXv4u45XespkeSenZdlaaB4hW5aIn6ObnqA-dUT2Udkd_EaWr8qgX95HhseJG3tptvd6CwBpZM-R4Ti6d7szivF-k4rqz_v_8Ci_gDt/s2048/15+la+pera-min.jpg",
    audio: pera,
  },
];

export default cards;