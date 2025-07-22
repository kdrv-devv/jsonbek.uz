import { type NextRequest, NextResponse } from "next/server";

const comedyTodos = [
  { userId: 1, id: 1, title: "Choynakni gazdan olish", completed: false },
  { userId: 1, id: 2, title: "Qoshnining mushugiga ovqat berish", completed: true },
  { userId: 1, id: 3, title: "Internet tugagani uchun derazadan signal tutish", completed: false },
  { userId: 1, id: 4, title: "Momoga TikTok o‘rgatish", completed: true },
  { userId: 1, id: 5, title: "Non opkelish, lekin uyga kelguncha yeb qo‘ymaslik", completed: false },
  { userId: 1, id: 6, title: "Do‘stingni chaqirib, o‘zi ovqat qiladigan qilib yuborish", completed: true },
  { userId: 1, id: 7, title: "Gazeta o‘qiyotgandek telefonni yashirish", completed: false },
  { userId: 1, id: 8, title: "Uyda shiftga qarab yotish – rejalashtirilgan vaqt", completed: true },
  { userId: 1, id: 9, title: "Xoladan 10 so‘m olish missiyasi", completed: false },
  { userId: 1, id: 10, title: "Nonushtada 4 dona tuxum yeb qo‘yish va hech kimga bildirmaslik", completed: true },
  { userId: 1, id: 11, title: "Uydagilarni TikTok videosi bilan bezovta qilish", completed: false },
  { userId: 1, id: 12, title: "To‘n kiyib, o‘zini superqahramon deb tasavvur qilish", completed: true },
  { userId: 1, id: 13, title: "Oyoq kiyimni yuvib, o‘zini farrosh deb his qilish", completed: false },
  { userId: 1, id: 14, title: "Salfetkani 3D origamiga aylantirish", completed: true },
  { userId: 1, id: 15, title: "Telefonni zaryadsiz holatda ham ushlab yurish", completed: false },
  { userId: 1, id: 16, title: "To‘yda raqs tushgandek pardani tortish", completed: true },
  { userId: 1, id: 17, title: "Bulochkani sovg‘a qadoqlariga o‘rash", completed: false },
  { userId: 1, id: 18, title: "Televizorni yoqib, lekin unga qaramaslik", completed: true },
  { userId: 1, id: 19, title: "Har doim tushlikdan oldin muzqaymoq yeb olish", completed: false },
  { userId: 1, id: 20, title: "Uy yumushlarini rejalashtirish, lekin bajarmaslik", completed: true },
];

const dramaTodos = [
  {
    id: 1,
    name: "Sardor Rahimov",
    username: "sardor_poet",
    email: "sardor@uzbekjson.uz",
    phone: "+998-93-345-67-89",
    website: "sardor-sher.uz",
    bio: "So'zlar orqali qalblarni terib beraman 💫",
    city: "Buxoro",
    profession: "Shoir",
    hobbies: ["she'r yozish", "musiqa tinglash", "tabiat bilan suhbat"],
  },
  {
    id: 2,
    name: "Nilufar Karimova",
    username: "nilufar_writer",
    email: "nilufar@uzbekjson.uz",
    phone: "+998-94-456-78-90",
    website: "nilufar-yozuvchi.uz",
    bio: "Har bir so'z - qalb zarbasidek 💝",
    city: "Farg'ona",
    profession: "Yozuvchi",
    hobbies: ["kitob yozish", "sayohat", "san'at"],
  },
  {
    id: 3,
    name: "Oybek Sodiqov",
    username: "oybek_dramaturg",
    email: "oybek@uzbekjson.uz",
    phone: "+998-95-123-00-11",
    website: "oybek-dramatik.uz",
    bio: "Sahna uchun yashayman, sahnada yig'layman 🎭",
    city: "Andijon",
    profession: "Dramaturg",
    hobbies: ["pyesa yozish", "teatrga borish", "qahva ichish"],
  },
  {
    id: 4,
    name: "Madina Raximova",
    username: "madina_aktrisa",
    email: "madina@uzbekjson.uz",
    phone: "+998-97-765-43-21",
    website: "madina-teatr.uz",
    bio: "Ko'z yoshsiz drama yo‘q 👁️‍🗨️",
    city: "Namangan",
    profession: "Aktrisa",
    hobbies: ["aktyorlik", "qog'ozga tuyg'u to‘kib yozish", "fotografiya"],
  },
  {
    id: 5,
    name: "Jahongir Xudoyberdiyev",
    username: "jahongir_roman",
    email: "jahongir@uzbekjson.uz",
    phone: "+998-93-112-22-33",
    website: "jahongir-roman.uz",
    bio: "Har bob — bir armon 📖",
    city: "Xiva",
    profession: "Romannavis",
    hobbies: ["roman yozish", "kitob o‘qish", "kechqurun yurish"],
  },
  {
    id: 6,
    name: "Dilnoza Ermatova",
    username: "dilnoza_dard",
    email: "dilnoza@uzbekjson.uz",
    phone: "+998-91-876-54-32",
    website: "dilnoza-doston.uz",
    bio: "Har satrimda bir dard yashirin 💔",
    city: "Qarshi",
    profession: "Dostonchi",
    hobbies: ["she'r aytish", "qadimgi dostonlar", "san'at"],
  },
  {
    id: 7,
    name: "Sherzod Mahmudov",
    username: "sherzod_scene",
    email: "sherzod@uzbekjson.uz",
    phone: "+998-90-345-67-89",
    website: "sherzod-teatr.uz",
    bio: "Hayot sahna bo‘lsa, men aktyorman 🎬",
    city: "Navoiy",
    profession: "Aktyor",
    hobbies: ["rol o‘rganish", "film ko‘rish", "ovoz mashqlari"],
  },
  {
    id: 8,
    name: "Gulrux Yuldasheva",
    username: "gulrux_melodrama",
    email: "gulrux@uzbekjson.uz",
    phone: "+998-99-222-33-44",
    website: "gulrux-dramatik.uz",
    bio: "Yuragimni sahifalarga to‘kaman 📜",
    city: "Toshkent",
    profession: "Stsenarist",
    hobbies: ["film yozish", "yozishmalar", "ko‘z yosh yig‘ish"],
  },
  {
    id: 9,
    name: "Rustam Xasanov",
    username: "rustam_roman",
    email: "rustam@uzbekjson.uz",
    phone: "+998-98-556-67-78",
    website: "rustam-adabiyot.uz",
    bio: "Har bir kitobim — bir iztirob 📚",
    city: "Sirdaryo",
    profession: "Yozuvchi",
    hobbies: ["monolog yozish", "qahvaxonada o‘tirish", "adabiyot"],
  },
  {
    id: 10,
    name: "Shahnoza Abdurahmonova",
    username: "shahnoza_doston",
    email: "shahnoza@uzbekjson.uz",
    phone: "+998-97-909-08-07",
    website: "shahnoza-doston.uz",
    bio: "Og‘ir so‘zlarim yurakka borib tegadi 🥀",
    city: "Jizzax",
    profession: "Dostonchi",
    hobbies: ["qo‘shiq aytish", "she’r yozish", "teatr tomosha qilish"],
  },
  {
    id: 11,
    name: "Murod Qodirov",
    username: "murod_script",
    email: "murod@uzbekjson.uz",
    phone: "+998-90-223-45-66",
    website: "murod-script.uz",
    bio: "Film uchun har bir sahna yurakdan chiqadi 💔",
    city: "Toshkent",
    profession: "Ssenariy muallifi",
    hobbies: ["kino yozish", "analiz qilish", "drama ko‘rish"],
  },
  {
    id: 12,
    name: "Ziyoda Mamatqulova",
    username: "ziyoda_dramaqueen",
    email: "ziyoda@uzbekjson.uz",
    phone: "+998-91-665-43-21",
    website: "ziyoda-qirolicha.uz",
    bio: "Hayotda doim sahna bor, siz faqat rolingizni bajaring.",
    city: "Termiz",
    profession: "Aktrisa",
    hobbies: ["sahna san’ati", "musiqa", "nutq ustida ishlash"],
  },
  {
    id: 13,
    name: "Akmal To‘raqulov",
    username: "akmal_rejisyor",
    email: "akmal@uzbekjson.uz",
    phone: "+998-90-334-22-11",
    website: "akmal-film.uz",
    bio: "Kamera ortidan yuraklarni larzaga keltiraman 🎥",
    city: "Qo‘qon",
    profession: "Rejissyor",
    hobbies: ["film suratga olish", "drama sahnalashtirish", "sokin musiqa"],
  },
  {
    id: 14,
    name: "Sitora Norqobilova",
    username: "sitora_eyes",
    email: "sitora@uzbekjson.uz",
    phone: "+998-93-123-45-67",
    website: "sitora-kozyosh.uz",
    bio: "Ko‘zlarim bilan so‘zlayman... 🥲",
    city: "Urganch",
    profession: "Aktrisa",
    hobbies: ["ko‘z yoshi mashqlari", "drama rollar", "ko‘zguga qarash"],
  },
  {
    id: 15,
    name: "Diyorbek Mamatov",
    username: "diyorbek_ruh",
    email: "diyorbek@uzbekjson.uz",
    phone: "+998-92-234-56-78",
    website: "diyorbek-ruh.uz",
    bio: "Tuyg‘ularimni so‘zga aylantiraman ✍️",
    city: "Zarafshon",
    profession: "Yozuvchi",
    hobbies: ["kechalar o‘ylash", "she’r yozish", "yolg‘izlik"],
  },
  {
    id: 16,
    name: "Shaxzoda Jo‘rayeva",
    username: "shaxzoda_dardlar",
    email: "shaxzoda@uzbekjson.uz",
    phone: "+998-91-908-70-60",
    website: "shaxzoda-qoraqalpoq.uz",
    bio: "Yuragimni qo‘lim bilan yozaman.",
    city: "Nukus",
    profession: "Shoira",
    hobbies: ["dard to‘kib yozish", "qo‘shiq matnlari", "monologlar"],
  },
  {
    id: 17,
    name: "Shuhrat Aliyev",
    username: "shuhrat_poet",
    email: "shuhrat@uzbekjson.uz",
    phone: "+998-93-333-22-11",
    website: "shuhrat-satr.uz",
    bio: "She’rda dardimni aytaman, ko‘zda emas.",
    city: "Guliston",
    profession: "Shoir",
    hobbies: ["so‘z o‘yinlari", "kechqurun yozish", "yulduzlarga qarash"],
  },
  {
    id: 18,
    name: "Muslima To‘xtayeva",
    username: "muslima_dramatic",
    email: "muslima@uzbekjson.uz",
    phone: "+998-93-545-67-89",
    website: "muslima-drama.uz",
    bio: "Hayot o‘zi bir spektakl, men faqat rol o‘ynayman.",
    city: "Angren",
    profession: "Aktrisa",
    hobbies: ["sahna mashqlari", "nutq yozish", "yig‘lash san’ati"],
  },
  {
    id: 19,
    name: "Temurbek Rajabov",
    username: "temurbek_stage",
    email: "temurbek@uzbekjson.uz",
    phone: "+998-97-606-70-60",
    website: "temurbek-stage.uz",
    bio: "Teatr — men uchun ibodatxona.",
    city: "Toshkent",
    profession: "Dramaturg",
    hobbies: ["drama tahlili", "kitob yozish", "rol bo‘yicha suhbatlar"],
  },
  {
    id: 20,
    name: "Zarnigor Akbarova",
    username: "zarnigor_qissalar",
    email: "zarnigor@uzbekjson.uz",
    phone: "+998-90-101-02-03",
    website: "zarnigor-doston.uz",
    bio: "Har doston — yuragim parchalari",
    city: "Denov",
    profession: "Shoira",
    hobbies: ["epik dostonlar", "she’rlar yig‘ish", "ko‘z yoshi bilan yozish"],
  },
];

const romanceTodos = [
  { userId: 1, id: 1, title: "Sevgilimga maktub yozish", completed: false },
  { userId: 1, id: 2, title: "Gullar do‘koniga borish", completed: true },
  { userId: 1, id: 3, title: "Tungi yurish rejalashtirish", completed: false },
  { userId: 2, id: 4, title: "Kinoga chiptalar olish", completed: true },
  { userId: 2, id: 5, title: "Romantik kechki ovqat tayyorlash", completed: false },
  { userId: 3, id: 6, title: "Surat albom tayyorlash", completed: true },
  { userId: 3, id: 7, title: "Birgalikda musiqiy kecha tashkil etish", completed: false },
  { userId: 4, id: 8, title: "Surpriz sovg‘a xarid qilish", completed: true },
  { userId: 4, id: 9, title: "Birinchi uchrashuv joyini yana borib ko‘rish", completed: false },
  { userId: 5, id: 10, title: "Yulduzlarni tomosha qilish kechasi", completed: true },
  { userId: 5, id: 11, title: "Sevgi haqida she’r yozish", completed: false },
  { userId: 6, id: 12, title: "Bog‘da birga nonushta qilish", completed: true },
  { userId: 6, id: 13, title: "Fotosessiya uyushtirish", completed: false },
  { userId: 7, id: 14, title: "Birga kitob o‘qish kechasi", completed: true },
  { userId: 7, id: 15, title: "Qadimiy xatlar o‘qib eslash", completed: false },
  { userId: 8, id: 16, title: "Romantik konsertga borish", completed: true },
  { userId: 8, id: 17, title: "Orzular ro‘yxatini tuzish", completed: false },
  { userId: 9, id: 18, title: "Qandolat tayyorlab birga yeyish", completed: true },
  { userId: 9, id: 19, title: "Sevimli joyimizga sayr", completed: false },
  { userId: 10, id: 20, title: "O‘tmish suratlarni ko‘rib kulish", completed: true }
];

const adventureTodos = [
  { userId: 1, id: 1, title: "Cho‘l bo‘ylab yakka yurish", completed: false },
  { userId: 1, id: 2, title: "G'or ichida xazina qidirish", completed: true },
  { userId: 2, id: 3, title: "Toqqa chiqish musobaqasi", completed: false },
  { userId: 2, id: 4, title: "Daryo kechib o‘tish", completed: true },
  { userId: 3, id: 5, title: "Yovvoyi orolni o‘rganish", completed: false },
  { userId: 3, id: 6, title: "Buzilgan kemani ta’mirlash", completed: true },
  { userId: 4, id: 7, title: "Qorli tog‘da omon qolish", completed: false },
  { userId: 4, id: 8, title: "Jangovar lagerda mashg‘ulot", completed: true },
  { userId: 5, id: 9, title: "Sahroda suv topish", completed: false },
  { userId: 5, id: 10, title: "Jasorat sinovi", completed: true },
  { userId: 6, id: 11, title: "Sirli xaritani yechish", completed: false },
  { userId: 6, id: 12, title: "Dengiz osti g‘orini topish", completed: true },
  { userId: 7, id: 13, title: "Yovvoyi hayvonlardan qochish", completed: false },
  { userId: 7, id: 14, title: "O‘rmon ichida yo‘l topish", completed: true },
  { userId: 8, id: 15, title: "Shamol minorasiga chiqish", completed: false },
  { userId: 8, id: 16, title: "Tungi sarguzasht safar", completed: true },
  { userId: 9, id: 17, title: "Orolni kesib o‘tish", completed: false },
  { userId: 9, id: 18, title: "Yashirin qishloqni topish", completed: true },
  { userId: 10, id: 19, title: "Tog‘dan parashyut bilan sakrash", completed: false },
  { userId: 10, id: 20, title: "Dushman lageriga bostirib kirish", completed: true }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const style = searchParams.get("style") || "comedy";
  const id = searchParams.get("id");

  
  let todos;
  switch (style) {
    case "comedy":
      todos = comedyTodos;
      break;
    case "drama":
      todos = dramaTodos;
      break;

    case "romance":
      todos = romanceTodos;
      break;

    case "adventure":
      todos = adventureTodos;
      break;
    default:
      todos = comedyTodos;
  }

  if (id) {
    const user = todos.find((u) => u.id === Number.parseInt(id));
    return NextResponse.json(user || null);
  }

  
  return NextResponse.json(todos);
}
