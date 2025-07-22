import { type NextRequest, NextResponse } from "next/server"

const comedyComments = [
  {
    id: 1,
    postId: 1,
    name: "Aziz Azizov",
    email: "aziz@uzbekjson.uz",
    body: "Hahaha! Mening mushugim ham xuddi shunday! Ular bizni o'z xizmatkorlari deb o'ylashadi 😂",
  },
  {
    id: 2,
    postId: 1,
    name: "Feruza Feruzova",
    email: "feruza@uzbekjson.uz",
    body: "Mushuklar haqiqatan ham boshqa sayyoradan kelgan. Ular bizni o'rganib yurganlar! 🐱👽",
  },
  {
    id: 3,
    postId: 2,
    name: "Otabek Otabekov",
    email: "otabek@uzbekjson.uz",
    body: "Kosmik palov retseptini ulashing! Bizda ham sinab ko'ramiz 🚀🍚",
  },
  {
    id: 4,
    postId: 2,
    name: "Dilnoza Qodirova",
    email: "dilnoza@uzbekjson.uz",
    body: "Menimcha bu palov o'rniga teleportatsiya qiladigan narsaga o'xshaydi 😂",
  },
  {
    id: 5,
    postId: 1,
    name: "Sardor Karimov",
    email: "sardor@uzbekjson.uz",
    body: "Mushugimni bu maqoladan keyin hurmat qiladigan bo'ldim 😹",
  },
  {
    id: 6,
    postId: 1,
    name: "Kamola Nizamova",
    email: "kamola@uzbekjson.uz",
    body: "Qizig'i shundaki, mushukim meni o'zi ishlatadi 😂",
  },
  {
    id: 7,
    postId: 2,
    name: "Bekzod Mamatov",
    email: "bekzod@uzbekjson.uz",
    body: "Bu palovni pishirib ko'rdik... Endi devor orqali gaplashamiz 😂",
  },
  {
    id: 8,
    postId: 1,
    name: "Nilufar Yusupova",
    email: "nilufar@uzbekjson.uz",
    body: "Maqola menga shunchalik yoqdiki, mushukim bilan birga o'qidik 🐾📖",
  },
  {
    id: 9,
    postId: 2,
    name: "Rustam Tursunov",
    email: "rustam@uzbekjson.uz",
    body: "Palov kosmosda qanday pishadi? Og'irlik yo'q-ku 😄",
  },
  {
    id: 10,
    postId: 1,
    name: "Lola G‘ofurova",
    email: "lola@uzbekjson.uz",
    body: "Mushuklar yer yuzining haqiqiy egalari ekan-a! 😼",
  },
  {
    id: 11,
    postId: 1,
    name: "Shahboz Ergashev",
    email: "shahboz@uzbekjson.uz",
    body: "Maqolani o'qib, mushugimni prezidentga nomzod qilib ko'rsatmoqchiman 😹",
  },
  {
    id: 12,
    postId: 2,
    name: "Diyora Murodova",
    email: "diyora@uzbekjson.uz",
    body: "Kosmik osh! Endi faqatgina raketali qozon yetishmayapti 🛰️",
  },
  {
    id: 13,
    postId: 1,
    name: "Qobil Qodirov",
    email: "qobil@uzbekjson.uz",
    body: "Men mushuklarga endi boshqacha qarayman... Ehtiyot bo‘lish kerak! 😹",
  },
  {
    id: 14,
    postId: 2,
    name: "Maftuna Jalilova",
    email: "maftuna@uzbekjson.uz",
    body: "Men palovni pishirib tugatdim, ammo u o‘z-o‘zidan yo‘q bo‘ldi. Ehtimol, kosmik portaldan chiqqan! 😂",
  },
  {
    id: 15,
    postId: 1,
    name: "Abdulaziz Rahimov",
    email: "abdulaziz@uzbekjson.uz",
    body: "Maqola o'qigach, mushugimga boshlig‘imdek munosabatda bo‘ldim 😆",
  },
  {
    id: 16,
    postId: 2,
    name: "Shaxnoza Sodiqova",
    email: "shaxnoza@uzbekjson.uz",
    body: "Kosmik taomlar restorani ochmoqchimiz! Retseptlar qayerda? 😂",
  },
  {
    id: 17,
    postId: 1,
    name: "Jasur Ahmedov",
    email: "jasur@uzbekjson.uz",
    body: "Mushuklar endi dunyoni boshqarayapti. Biz esa faqat xizmatdamiz 🙀",
  },
  {
    id: 18,
    postId: 2,
    name: "Rayhon Xolmatova",
    email: "rayhon@uzbekjson.uz",
    body: "Palovni sinab ko'rdim, endi uch kundan beri yulduzlarni ko‘ryapman 😅",
  },
  {
    id: 19,
    postId: 1,
    name: "Doston Nazarov",
    email: "doston@uzbekjson.uz",
    body: "Bu maqola mushuklar uchun emas, odamlar uchun ogohlantirish edi! 🐈‍⬛⚠️",
  },
  {
    id: 20,
    postId: 2,
    name: "Malika Rasulova",
    email: "malika@uzbekjson.uz",
    body: "Kosmik oshdan keyin oshqozonim kosmonga chiqib ketdi 😂",
  },
];

const dramaComments = [
  {
    id: 1,
    postId: 1,
    name: "Madina Madinova",
    email: "madina@uzbekjson.uz",
    body: "Qanchalik chuqur fikrlar... Vaqt haqiqatan ham eng qimmat ne'mat. Har bir lahzani qadrlashimiz kerak.",
  },
  {
    id: 2,
    postId: 2,
    name: "Jamshid Jamshidov",
    email: "jamshid@uzbekjson.uz",
    body: "Ona tilimiz - bizning ruhiy boyligimiz. Uni asrashimiz va rivojlantirishimiz - burchimiz.",
  },
  {
    id: 3,
    postId: 3,
    name: "Nodira To‘xtayeva",
    email: "nodira@uzbekjson.uz",
    body: "Yurakdagi og‘riqni hech kim tushunmaydi... Ba'zida jimlikning o‘zi eng baland qichqiriq bo‘ladi.",
  },
  {
    id: 4,
    postId: 4,
    name: "Rustam Karimov",
    email: "rustam@uzbekjson.uz",
    body: "Hayot – bu sahna. Har kim o‘z rolini o‘ynaydi, lekin tomoshabin bo‘lish qiyinroq.",
  },
  {
    id: 5,
    postId: 5,
    name: "Dilnoza Dilshodova",
    email: "dilnoza@uzbekjson.uz",
    body: "Ota-onamizning bir qarichi yeri uchun qancha odam qon to‘kgan... Yurt - yurakdagi iz.",
  },
  {
    id: 6,
    postId: 6,
    name: "Shuhrat Beknazarov",
    email: "shuhrat@uzbekjson.uz",
    body: "Meni unutganlar ko‘p bo‘ldi, ammo men hech kimni yodimdan chiqarmadim.",
  },
  {
    id: 7,
    postId: 7,
    name: "Nilufar Qodirova",
    email: "nilufar@uzbekjson.uz",
    body: "Ota mehrini hech narsa bilan qoplab bo‘lmaydi. U yo‘qolsa, dunyo ham rangsiz bo‘lib qoladi.",
  },
  {
    id: 8,
    postId: 8,
    name: "Zafar Xolmatov",
    email: "zafar@uzbekjson.uz",
    body: "Men uchun bu oddiy film emas edi. Bu mening hayotimning aks-sadosi bo‘ldi.",
  },
  {
    id: 9,
    postId: 9,
    name: "Gulbahor Raximova",
    email: "gulbahor@uzbekjson.uz",
    body: "Ayollar jim bo‘lsa, bu zaiflik emas – bu kuchini yig‘ayotgan ondir.",
  },
  {
    id: 10,
    postId: 10,
    name: "Sirojiddin Tursunov",
    email: "siroj@uzbekjson.uz",
    body: "Ba'zida taqdir seni sinaydi, lekin sabr qilgan odam oxir-oqibat yutadi.",
  },
  {
    id: 11,
    postId: 11,
    name: "Dilorom Akromova",
    email: "dilorom@uzbekjson.uz",
    body: "Yolg‘izlikda o‘sgan yurak hech kimga o‘xshamaydi. U boshqacha sevadi.",
  },
  {
    id: 12,
    postId: 12,
    name: "Xurshid Qayumov",
    email: "xurshid@uzbekjson.uz",
    body: "Farzand yig‘layotganida – bu oddiy. Ammo ota-onaning yuragi yig‘lasa – uni hech kim ko‘rmaydi.",
  },
  {
    id: 13,
    postId: 13,
    name: "Malika Shermatova",
    email: "malika@uzbekjson.uz",
    body: "Ko‘zdagi yosh – qalbdagi og‘riqning tarjimoni. Hech qachon yolg‘on gapirmaydi.",
  },
  {
    id: 14,
    postId: 14,
    name: "Sanjar Xudoyberdiyev",
    email: "sanjar@uzbekjson.uz",
    body: "Qahramonlik faqat jangda emas, har kuni o‘z nafsing bilan kurashda ham namoyon bo‘ladi.",
  },
  {
    id: 15,
    postId: 15,
    name: "Munisa Raufova",
    email: "munisa@uzbekjson.uz",
    body: "Tushunmagan yurak uchun izoh kerak emas. Faqat sukut – yagona javob.",
  },
  {
    id: 16,
    postId: 16,
    name: "Bahodir Madrahimov",
    email: "bahodir@uzbekjson.uz",
    body: "Bu film menga otamni eslatdi... Endi har safar ko‘rganimda yuragim eziladi.",
  },
  {
    id: 17,
    postId: 17,
    name: "Aziza Abdurahmonova",
    email: "aziza@uzbekjson.uz",
    body: "Boshqalarning kulgusi ortida ko‘pincha yig‘i yashirinadi.",
  },
  {
    id: 18,
    postId: 18,
    name: "Erkin Soliyev",
    email: "erkin@uzbekjson.uz",
    body: "Hayotdan saboq olish – maktabda o‘rganilmaydi. Bu faqat boshdan kechiriladi.",
  },
  {
    id: 19,
    postId: 19,
    name: "Mohira Qo‘chqarova",
    email: "mohira@uzbekjson.uz",
    body: "Bir kun kelib, baxt emas, sokinlikni qadrlay boshlaysan.",
  },
  {
    id: 20,
    postId: 20,
    name: "Asilbek Ro‘zimatov",
    email: "asilbek@uzbekjson.uz",
    body: "Yaxshi niyat hech qachon zoye ketmaydi. Hayot bir kun o‘sha niyatlarni eslaydi.",
  }
];

const romanceComments = [
  {
    id: 1,
    postId: 1,
    name: "Dilnoza Dilshodova",
    email: "dilnoza@uzbekjson.uz",
    body: "Muhabbat — yurakni jimjimador qilib qo‘yadigan yagona sehrdir 💕",
  },
  {
    id: 2,
    postId: 1,
    name: "Ulug‘bek Shodmonov",
    email: "ulugbek@uzbekjson.uz",
    body: "Uni birinchi ko‘rgan kunimdan yuragim boshqa urayotganini sezdim... ❤️",
  },
  {
    id: 3,
    postId: 2,
    name: "Zulfiya Karimova",
    email: "zulfiya@uzbekjson.uz",
    body: "Ko‘zlaringdagi sokinlik meni har safar qayta sevdiradi.",
  },
  {
    id: 4,
    postId: 2,
    name: "Bekzod Qodirov",
    email: "bekzod@uzbekjson.uz",
    body: "Muhabbat — bu birga jim o‘tirib, bir-biringni so‘zsiz tushunishdir.",
  },
  {
    id: 5,
    postId: 3,
    name: "Laylo Rustamova",
    email: "laylo@uzbekjson.uz",
    body: "Yuragim faqat seni eslab uradi, boshqa hech kimga joy yo‘q.",
  },
  {
    id: 6,
    postId: 3,
    name: "Kamron Toirov",
    email: "kamron@uzbekjson.uz",
    body: "Uning jilmayishi — har tongimning quyoshi ☀️",
  },
  {
    id: 7,
    postId: 4,
    name: "Nilufar Sobirova",
    email: "nilufar@uzbekjson.uz",
    body: "Sevgi — bu sabab emas, natijadir. Uni tushuntirib bo‘lmaydi, faqat his qilish mumkin.",
  },
  {
    id: 8,
    postId: 4,
    name: "Javohir Azizov",
    email: "javohir@uzbekjson.uz",
    body: "Men seni yuragim bilan tanidim, aqlim bilan emas.",
  },
  {
    id: 9,
    postId: 5,
    name: "Surayyo Normurodova",
    email: "surayyo@uzbekjson.uz",
    body: "Seni har kecha yodga olaman, hatto yulduzlar guvoh bo‘lishadi.",
  },
  {
    id: 10,
    postId: 5,
    name: "Sardor Usmonov",
    email: "sardor@uzbekjson.uz",
    body: "Sevgi — bu faqat bir lahzada boshlangan, lekin umr bo‘yi davom etadigan voqea.",
  },
  {
    id: 11,
    postId: 6,
    name: "Zarina Alimova",
    email: "zarina@uzbekjson.uz",
    body: "Har bir yurishimda seni eslayman, yuragimni qoldirgan joyimsan sen.",
  },
  {
    id: 12,
    postId: 6,
    name: "Baxtiyor Raxmatov",
    email: "baxtiyor@uzbekjson.uz",
    body: "Sen bilan kechgan daqiqa ham go‘zal, ham abadiy tuyuladi.",
  },
  {
    id: 13,
    postId: 7,
    name: "Gulrux Mo‘minova",
    email: "gulrux@uzbekjson.uz",
    body: "Muhabbat — bu sen bo‘lmagan paytda ham seni sog‘inishdir.",
  },
  {
    id: 14,
    postId: 7,
    name: "Jasur Tursunov",
    email: "jasur@uzbekjson.uz",
    body: "Men seni so‘zlar bilan emas, yurakdagi sukunat bilan sevaman.",
  },
  {
    id: 15,
    postId: 8,
    name: "Lola G‘ulomova",
    email: "lola@uzbekjson.uz",
    body: "Uning ovozida menga tinchlik bor. Go‘yo yuragimga musiqa eshitiladi.",
  },
  {
    id: 16,
    postId: 8,
    name: "Erkin Shermatov",
    email: "erkin@uzbekjson.uz",
    body: "Sen bilan vaqt o‘tmaydi, u uchadi... va men har safar quvonaman.",
  },
  {
    id: 17,
    postId: 9,
    name: "Mavluda Ergasheva",
    email: "mavluda@uzbekjson.uz",
    body: "Yuragimning eng jim joyida sening noming yonsin.",
  },
  {
    id: 18,
    postId: 9,
    name: "Ilhom Vohidov",
    email: "ilhom@uzbekjson.uz",
    body: "Muhabbat — bu o‘zi hech narsa so‘ramay, hamma narsani bera olishdir.",
  },
  {
    id: 19,
    postId: 10,
    name: "Sevara Bozorova",
    email: "sevara@uzbekjson.uz",
    body: "Seni ko‘rganimda yuragim ohangini topadi, go‘yo musiqa boshlangandek.",
  },
  {
    id: 20,
    postId: 10,
    name: "Rustam Xo‘jayev",
    email: "rustam@uzbekjson.uz",
    body: "Sen — mening topilgan ilohiy yo‘qotishimsan.",
  },
]

const adventureComments = [
  {
    id: 1,
    postId: 1,
    name: "Anvar Anvarov",
    email: "anvar@uzbekjson.uz",
    body: "Bu sarguzasht meni bolaligimga olib ketdi. Haqiqiy nostalgiya!",
  },
  {
    id: 2,
    postId: 1,
    name: "Dilnoza Dilshodova",
    email: "dilnoza@uzbekjson.uz",
    body: "Shu hikoyani o‘qib, sayohatga chiqgim kelib ketdi. Samolyot biletlar qani?! 🧳✈️",
  },
  {
    id: 3,
    postId: 2,
    name: "Bahrom Bekmurodov",
    email: "bahrom@uzbekjson.uz",
    body: "Cho‘l bo‘yicha yurish - bu jasorat! Qumlar orasida yo‘l topish san’at darajasida edi.",
  },
  {
    id: 4,
    postId: 2,
    name: "Shahnoza Shakarova",
    email: "shahnoza@uzbekjson.uz",
    body: "Daryo ustidagi ko‘prik sahnasi aqlni olib qo‘ydi. Tana bir qaltirab ketdi.",
  },
  {
    id: 5,
    postId: 3,
    name: "Ulug‘bek Uralov",
    email: "ulugbek@uzbekjson.uz",
    body: "Xarita ortidan quvish - bu haqiqiy Indiana Jones darajasida edi! 👑🗺️",
  },
  {
    id: 6,
    postId: 3,
    name: "Laylo Latipova",
    email: "laylo@uzbekjson.uz",
    body: "Yovvoyi o‘rmonlar va sirli g‘orlarga kirgan sahnalar juda hayajonli bo‘ldi!",
  },
  {
    id: 7,
    postId: 4,
    name: "Rustam Rajabov",
    email: "rustam@uzbekjson.uz",
    body: "Eng yaxshi sarguzasht hikoyalaridan biri! O‘qib, yuragim tez ura boshladi!",
  },
  {
    id: 8,
    postId: 4,
    name: "Zilola Zakirova",
    email: "zilola@uzbekjson.uz",
    body: "Bu hikoya Netflix’ga serial bo‘lib chiqsa, birinchi bo‘lib ko‘raman! 📺🔥",
  },
  {
    id: 9,
    postId: 5,
    name: "Shuhrat Shermatov",
    email: "shuhrat@uzbekjson.uz",
    body: "Suv ostidagi g‘orlar haqidagi sahna juda qo‘rqinchli va hayajonli edi!",
  },
  {
    id: 10,
    postId: 5,
    name: "Mavluda Mamarajabova",
    email: "mavluda@uzbekjson.uz",
    body: "Shuncha sarguzashtlardan keyin kofe ichib dam olish kerak ☕🌴",
  },
  {
    id: 11,
    postId: 6,
    name: "Habibulloh Hakimov",
    email: "habibulloh@uzbekjson.uz",
    body: "Nayza bilan jang qilgan sahna - zo‘r kinoga loyiq!",
  },
  {
    id: 12,
    postId: 6,
    name: "Shirin Shavkatova",
    email: "shirin@uzbekjson.uz",
    body: "Har bir burilishda nima bo‘lishini oldindan bilib bo‘lmaydi. Juda ajoyib yozilgan!",
  },
  {
    id: 13,
    postId: 7,
    name: "Tohir Tolibov",
    email: "tohir@uzbekjson.uz",
    body: "Men bu sarguzashtni o‘qib, jismonan ham ruhiyam sayohat qildim. Rahmat!",
  },
  {
    id: 14,
    postId: 7,
    name: "Lobar Lutfullayeva",
    email: "lobar@uzbekjson.uz",
    body: "Qahramonning do‘stlariga bo‘lgan sadoqati ko‘z yoshimni chiqarib yubordi 😢",
  },
  {
    id: 15,
    postId: 8,
    name: "Xurshid Xudoyberdiyev",
    email: "xurshid@uzbekjson.uz",
    body: "Toqqa chiqqan sahna adrenalin to‘la edi. Shaxsan men qo‘rqib ketdim!",
  },
  {
    id: 16,
    postId: 8,
    name: "Dildora Dilshodova",
    email: "dildora@uzbekjson.uz",
    body: "Shu hikoyani o‘qib, safarxalta yig‘ib, tog‘larga ketgim keldi.",
  },
  {
    id: 17,
    postId: 9,
    name: "Erkin Ergashev",
    email: "erkin@uzbekjson.uz",
    body: "Sahrodagi omon qolish kurashi ajoyib tarzda tasvirlangan edi.",
  },
  {
    id: 18,
    postId: 9,
    name: "Nilufar Nodirova",
    email: "nilufar@uzbekjson.uz",
    body: "Har bir sahna – hayajon, har bir sarguzasht – saboq! 👏",
  },
  {
    id: 19,
    postId: 10,
    name: "Kamron Karimov",
    email: "kamron@uzbekjson.uz",
    body: "Yana shunday sarguzasht hikoyalarini kutaman. Davomini yozinglar!",
  },
  {
    id: 20,
    postId: 10,
    name: "Saodat Sodiqova",
    email: "saodat@uzbekjson.uz",
    body: "Sarguzashtli hikoyalar har doim yurakka yaqin. O‘qiganimdan xursandman!",
  },
];



export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const style = searchParams.get("style") || "comedy"
  const postId = searchParams.get("postId")

  let comments
  switch (style) {
    case "drama":
      comments = dramaComments
      break
    case "romance":
      comments = romanceComments
    case "adventure":
      comments = adventureComments
    case "comedy":
      comments = comedyComments
      break
    default:
      comments = comedyComments
  }

  if (postId) {
    const filteredComments = comments.filter((c) => c.postId === Number.parseInt(postId))
    return NextResponse.json(filteredComments)
  }

  return NextResponse.json(comments)
}
