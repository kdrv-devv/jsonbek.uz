import { type NextRequest, NextResponse } from "next/server";

const comedyProducts = [
  {
    id: 1,
    title: "Kalish",
    price: 50000,
    description:
      "Universal oyoq kiyim – yomg'irda, pechkada, hattoki to'yda ham mos!",
    rate: 9,
    origin: "Qashqadaryo",
    available: true,
    image:"https://jsonbek.uz/products-img/kalish.png"
  },
  {
    id: 2,
    title: "To‘n",
    price: 120000,
    description: "Bu to‘nni kiyganda hatto yomg‘ir ham sizni aylanib o‘tadi",
    rate: 8.5,
    origin: "Andijon",
    available: true,
    image:"https://jsonbek.uz/products-img/chopon.png"
  },
  {
    id: 3,
    title: "Chilopchin",
    price: 30000,
    description: "Yozda oyoqning eng yaqin do‘sti. Hovli uchun ideal.",
    rate: 8,
    origin: "Surxondaryo",
    available: false,
    image:"https://jsonbek.uz/products-img/chilopchin.png"
  },
  {
    id: 4,
    title: "Belbog‘",
    price: 40000,
    description: "Faqat shimni emas, gapni ham ushlab turadi.",
    rate: 9.2,
    origin: "Namangan",
    available: true,
    image:"https://jsonbek.uz/products-img/belbog.png"
  },
  {
    id: 5,
    title: "Do‘ppi",
    price: 25000,
    description: "Boshingizga nafaqat soyabon, balki obro‘ ham qo‘shadi.",
    rate: 8.7,
    origin: "Buxoro",
    available: true,
    image:"https://jsonbek.uz/products-img/doppi.png"
  },
  {
    id: 6,
    title: "Patir non",
    price: 15000,
    description: "Kattalarning so‘kinmasdan tanbeh berish vositasi 🍞",
    rate: 9.5,
    origin: "Xorazm",
    available: true,
    image:"https://jsonbek.uz/products-img/patir.png",
    
  },
  {
    id: 7,
    title: "Choynak",
    price: 22000,
    description: "Bir piyola choy bilan 3 soatlik suhbat kafolatlanadi.",
    rate: 9,
    origin: "Samarqand",
    available: true,
    image:"https://jsonbek.uz/products-img/choynak.png"

  },
  {
    id: 8,
    title: "Kosov",
    price: 35000,
    description: "Oshxonadagi eng obro‘li qurol. Dadasiga ham gap yo‘q!",
    rate: 9.3,
    origin: "Farg‘ona",
    available: true,
    image:"https://jsonbek.uz/products-img/kosov.png"

  },
  {
    id: 9,
    title: "Kuk choy",
    price: 17000,
    description: "Stressni erituvchi va qaynona bilan gap topuvchi ichimlik.",
    rate: 9.8,
    origin: "Qo‘qon",
    available: true,
    image:"https://jsonbek.uz/products-img/kokchoy.png"

  },
  {
    id: 10,
    title: "Sovutkich ustidagi savat",
    price: 0,
    description: "Hech qachon ishlatilmaydi, lekin hech qachon yo‘qotilmaydi.",
    rate: 10,
    origin: "Har bir o‘zbek uyi",
    available: false,
    image:"https://jsonbek.uz/products-img/savat.png"

  },
];

const dramaProducts = [
  {
    id: 1,
    title: "Tog‘ toshi",
    price: 10000,
    description: "Tashlab ketgan sevgilining xotiralari og‘irligidek tosh.",
    rate: 8.3,
    origin: "Tog‘ yonbag‘irlari",
    available: true,
    image:"https://jsonbek.uz/products-img/tosh.png"
  },
  {
    id: 2,
    title: "Eski daftarcha",
    price: 18000,
    description:
      "Yillar o‘tib ochilgan har bir bet — yurakni tilkab-tilka qiladi.",
    rate: 9.1,
    origin: "Andijon",
    available: true,
    image:"https://jsonbek.uz/products-img/daftarcha.png"

  },
  {
    id: 3,
    title: "So‘nmagan sham",
    price: 22000,
    description: "Kutish azobining sukunatdagi timsoli.",
    rate: 8.9,
    origin: "Buxoro",
    available: true,
    image:"https://jsonbek.uz/products-img/sham.png"

  },
  {
    id: 4,
    title: "Yirtilgan maktub",
    price: 7000,
    description: "Jo‘natilmagan his-tuyg‘ularning yirtqich guvohi.",
    rate: 9.5,
    origin: "Namangan",
    available: false,
    image:"https://jsonbek.uz/products-img/maktub.png"

  },
  {
    id: 5,
    title: "Ko‘z yoshi idishi",
    price: 12000,
    description: "Faqat chin yurakdan yig‘laganlar tushunadigan mahsulot.",
    rate: 9.8,
    origin: "Farg‘ona",
    available: true,
    image:"https://jsonbek.uz/products-img/kozyoshidishi.png"

  },
  {
    id: 6,
    title: "Eski radiosi",
    price: 35000,
    description: "Otangiz eshitgan ohangda, siz topmagan tinchlik.",
    rate: 8.6,
    origin: "Samarqand",
    available: true,
    image:"https://jsonbek.uz/products-img/radio.png"

  },
  {
    id: 7,
    title: "Bo‘sh stul",
    price: 0,
    description: "Kimdir qaytib kelmaydi, ammo joyi doim tayyor.",
    rate: 10,
    origin: "Har bir mehrobon uy",
    available: false,
    image:"https://jsonbek.uz/products-img/stul.png"

  },
  {
    id: 8,
    title: "Soch tolasi",
    price: 5000,
    description: "Muhabbat esdaligi. Endi faqat xotira...",
    rate: 8.4,
    origin: "Qorako‘l",
    available: false,
    image:"https://jsonbek.uz/products-img/sochtolasi.png"

  },
  {
    id: 9,
    title: "Sandiq ichidagi surat",
    price: 15000,
    description: "Yuzdagi tabassum – yurakdagi dardni yashirgan pardadir.",
    rate: 9.7,
    origin: "Xiva",
    available: true,
    image:"https://jsonbek.uz/products-img/qutirasm.png"

  },
  {
    id: 10,
    title: "Yarimta non",
    price: 1000,
    description: "Qashshoqlikda ham mehr bor edi – buni unutma.",
    rate: 9.9,
    origin: "Qashqadaryo",
    available: true,
    image:"https://jsonbek.uz/products-img/yarimnon.png"

  },
];

const romanceProducts = [
  {
    id: 1,
    title: "Sevgi Shoyi Ko‘ylak",
    price: 145000,
    description:
      "Ushbu shoyi ko‘ylak nafaqat tanani, balki yurakni ham ohangda o‘rab oladi. Har yurishda muhabbat silkinadi.",
    rate: 9.6,
    origin: "Marg‘ilon",
    available: true,
    image:"https://jsonbek.uz/products-img/shoyikoylak.png"

  },
  {
    id: 2,
    title: "Muhabbat Patir",
    price: 18000,
    description:
      "Issiq patir ichida yashirin muhabbat: har bir luqma – bir ehtirosli so‘z.",
    rate: 9.4,
    origin: "Xiva",
    available: true,
    image:"https://jsonbek.uz/products-img/lovepatir.png"

  },
  {
    id: 3,
    title: "Yurakli Do‘ppi",
    price: 27000,
    description:
      "Bu do‘ppi yuragingizdagi tuyg‘ularni bosh ustida faxr bilan ko‘rsatadi.",
    rate: 8.9,
    origin: "Buxoro",
    available: true,
    image:"https://jsonbek.uz/products-img/doppi.png"

  },
  {
    id: 4,
    title: "Oshiqlar Choynagi",
    price: 55000,
    description:
      "U choy emas, muhabbat damlaydi. Ikki yurakni bir piyola choyda birlashtiradi.",
    rate: 9.7,
    origin: "Samarqand",
    available: true,
    image:"https://jsonbek.uz/products-img/choynak.png"

  },
  {
    id: 5,
    title: "Lola Rangli Kalish",
    price: 60000,
    description:
      "Yumshoq qadamingiz izidan atirgul hidi kelgudek – sevgi bilan to‘la yurishlar uchun.",
    rate: 9.2,
    origin: "Qarshi",
    available: true,
    image:"https://jsonbek.uz/products-img/kalish.png"

  },
  {
    id: 6,
    title: "Ko‘ngil Belbog‘i",
    price: 48000,
    description:
      "Shimni emas, qalbni tutadi. Har bir bog‘lanishda muhabbat uzugi yashirin.",
    rate: 9.5,
    origin: "Namangan",
    available: true,
    image:"https://jsonbek.uz/products-img/belbog.png"

  },
  {
    id: 7,
    title: "Sham Yorug‘ida Kosov",
    price: 39000,
    description:
      "Oshxonadagi har harakat – sevgi bilan. U bilan tayyorlangan ovqat yurakni ham to‘ydiradi.",
    rate: 9.1,
    origin: "Farg‘ona",
    available: true,
    image:"https://jsonbek.uz/products-img/kosov.png"

  },
  {
    id: 8,
    title: "Romantik Chilopchin",
    price: 32000,
    description:
      "Yozgi kechalarda balkon tagida ikki qalbning jim yurishlari uchun mukammal tanlov.",
    rate: 8.8,
    origin: "Termiz",
    available: false,
    image:"https://jsonbek.uz/products-img/chilopchin.png"

  },
  {
    id: 9,
    title: "Yurak Kuk Choy",
    price: 20000,
    description:
      "U sizni ichimlik bilan emas, so‘zsiz tushunish bilan ilitadi. Har piyolada sevgi siqib chiqariladi.",
    rate: 9.9,
    origin: "Qo‘qon",
    available: true,
    image:"https://jsonbek.uz/products-img/kokchoy.png"

  },
  {
    id: 10,
    title: "Sovutkich Ustidagi Xotira Savati",
    price: 0,
    description:
      "Har safar ko‘rsangiz, yuragingizda eski xotiralar uyg‘onadi. Faqat sevgiga tegishli narsalar uchun.",
    rate: 10,
    origin: "O‘zbek uylarining muhabbat burchagi",
    available: false,
    image:"https://jsonbek.uz/products-img/savat.png"

  },
];

const adventureProducts = [
  {
    id: 1,
    title: "Cho‘lboz Kalish",
    price: 55000,
    description:
      "Issiq qumlarda yurish uchun yaratilgan. Har bir qadam – yangi sarguzashtga eltadi.",
    rate: 8.9,
    origin: "Qizilqum",
    available: true,
    image:"https://jsonbek.uz/products-img/kalish.png"

  },
  {
    id: 2,
    title: "Shamolbardor To‘n",
    price: 135000,
    description:
      "Cho‘qqilarni zabt etishda ham, soyada dam olishda ham bardoshli. Har to‘n ichida – bir epik hikoya.",
    rate: 9.4,
    origin: "Pamir tog‘ etaklari",
    available: true,
    image:"https://jsonbek.uz/products-img/chopon.png"

  },
  {
    id: 3,
    title: "Daryo Chilopchini",
    price: 28000,
    description:
      "Soy bo‘yida baliq tutishmi? Shu chilopchin sizga kerak. Suvni his eting, sarguzashtni yuring.",
    rate: 8.7,
    origin: "Zarafshon vodiysi",
    available: true,
    image:"https://jsonbek.uz/products-img/chilopchin.png"

  },
  {
    id: 4,
    title: "Jangchi Belbog‘",
    price: 47000,
    description:
      "Faqat kiyimni emas, iroda va jasoratni ham mahkam tutadi. Har yuruvda kuch beradi.",
    rate: 9.1,
    origin: "Jizzax",
    available: true,
    image:"https://jsonbek.uz/products-img/belbog.png"

  },
  {
    id: 5,
    title: "Qor Tog‘ Do‘ppisi",
    price: 26000,
    description:
      "Sovuq shamollarda ham boshingizni issiqlik bilan qoplaydi. Ekspeditsiya uchun ideal.",
    rate: 9.2,
    origin: "Chimyon",
    available: true,
    image:"https://jsonbek.uz/products-img/doppi.png"

  },
  {
    id: 6,
    title: "Sahro Patir",
    price: 16000,
    description:
      "Yuqori kaloriyali, cho‘l sarguzashtlari uchun energiya manbai. Cho‘lda ham yurakni to‘ydiradi.",
    rate: 8.8,
    origin: "Navoiy",
    available: true,
    image:"https://jsonbek.uz/products-img/patir.png"

  },
  {
    id: 7,
    title: "Ekspeditsiya Choynagi",
    price: 52000,
    description:
      "Ochiq osmon ostida qaynatilgan choy – har yurakni iliqlantiradi. Lagerda ham, yurishda ham kerak.",
    rate: 9.3,
    origin: "Nurata",
    available: true,
    image:"https://jsonbek.uz/products-img/choynak.png"

  },
  {
    id: 8,
    title: "Tog‘ Kosov",
    price: 36000,
    description:
      "O‘tin ustida sho‘rva qaynashiga mos, har bir taomda sarguzashtning ta’mi bor.",
    rate: 9,
    origin: "Hisor tizmasi",
    available: true,
    image:"https://jsonbek.uz/products-img/kosov.png"

  },
  {
    id: 9,
    title: "Kuchli Kuk Choy",
    price: 19000,
    description:
      "Charchoqni yuvib yuboradi. Har yurishdan keyin, bu choy bilan dam olish – marra sovrinidek.",
    rate: 9.6,
    origin: "Boysun",
    available: true,
    image:"https://jsonbek.uz/products-img/kokchoy.png"

  },
  {
    id: 10,
    title: "Sovutkich Ustidagi Sarguzasht Xaltasi",
    price: 0,
    description:
      "Ichida eski xaritalar, chiroq va ehtimol, biror topilma bor. Ochiqsangiz – sarguzasht boshlanadi.",
    rate: 10,
    origin: "Har bir boboning ombori",
    available: false,
    image:"https://jsonbek.uz/products-img/sayohatxaltasi.png"

  },
];


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const style = searchParams.get("style") || "comedy";
  const id = searchParams.get("id");

  let products;
  switch (style) {
    case "drama":
      products = dramaProducts;
      break;
    case "comedy":
      products = comedyProducts;
      break;
    case "romance":
      products = romanceProducts;
      break;
    case "adventure":
      products = adventureProducts;
      break;
    default:
      products = comedyProducts;
  }

  let data;
  let status = 200;

  if (id) {
    const product = products.find((pr) => pr.id === Number.parseInt(id));
    if (!product) {
      data = { error: "Maxsulot topilmadi" };
      status = 404;
    } else {
      data = product;
    }
  } else {
    data = products;
  }

const response = new NextResponse(JSON.stringify(data), {
  status,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});

  return response;
}



// src/app/api/products/route.ts

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
