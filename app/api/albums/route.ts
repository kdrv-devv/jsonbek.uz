import { type NextRequest, NextResponse } from "next/server";

const comedyAlbums = [
  { userId: 1, id: 1, title: "Qozon tagida tuxum" },
  { userId: 1, id: 2, title: "Eshikni yop, qush kirib ketdi" },
  { userId: 1, id: 3, title: "Moshinani yuvdim, yomg‘ir yog‘di" },
  { userId: 1, id: 4, title: "Qo‘shniming mushugi prezident bo‘ldi" },
  { userId: 1, id: 5, title: "Choynakdagi chaqmoq" },
  { userId: 1, id: 6, title: "To‘yga kelib, non olib ketgan bola" },
  { userId: 1, id: 7, title: "Gaz yo‘q, lekin ovqat tayyor" },
  { userId: 1, id: 8, title: "Maktabga ketyapman deb to‘yga borgan bola" },
  { userId: 1, id: 9, title: "Rassom bola devorni bo‘yadi" },
  { userId: 1, id: 10, title: "Qovoq ustida choy ichgan ayiq" },
  { userId: 1, id: 11, title: "Oyga ketgan kampir" },
  { userId: 1, id: 12, title: "Tutqunlikdagi tandir non" },
  { userId: 1, id: 13, title: "Osh pishguncha multfilm ko‘raylik" },
  { userId: 1, id: 14, title: "Bosma kitobda qarsillagan ovoz" },
  { userId: 1, id: 15, title: "Choy ichib hayotga qaytgan kompyuter" },
  { userId: 1, id: 16, title: "Nonvoy ham bloger bo‘libdi" },
  { userId: 1, id: 17, title: "Ko‘cha supurgan robotlar" },
  { userId: 1, id: 18, title: "Futbol to‘pi bilan uchgan qush" },
  { userId: 1, id: 19, title: "Pishillab gapirgan mushuk" },
  { userId: 1, id: 20, title: "Shamollatkichdagi muhabbat" },
];

const dramaAlbums = [
  { userId: 1, id: 1, title: "Yarimta xat" },
  { userId: 1, id: 2, title: "Ko‘z yoshlari ortidagi haqiqat" },
  { userId: 1, id: 3, title: "Kechikkan kechirim" },
  { userId: 1, id: 4, title: "Orzular parchalari" },
  { userId: 1, id: 5, title: "Yolg‘onlar orasida" },
  { userId: 1, id: 6, title: "So‘nmas iztirob" },
  { userId: 1, id: 7, title: "Ayol taqdiri" },
  { userId: 1, id: 8, title: "Ota izini topmay" },
  { userId: 1, id: 9, title: "Sukutli yig‘i" },
  { userId: 1, id: 10, title: "Onamning oxirgi maktubi" },
  { userId: 1, id: 11, title: "Sog‘inch yo‘llarida" },
  { userId: 1, id: 12, title: "Ko‘ngil ko‘chalari" },
  { userId: 1, id: 13, title: "Qaytmagan sevgilim" },
  { userId: 1, id: 14, title: "O‘tgan umr armoni" },
  { userId: 1, id: 15, title: "Yolg‘izlik sadolari" },
  { userId: 1, id: 16, title: "Taqdir hazillari" },
  { userId: 1, id: 17, title: "Nigoh ortidagi sir" },
  { userId: 1, id: 18, title: "Tugamagan masofa" },
  { userId: 1, id: 19, title: "Javobsiz maktub" },
  { userId: 1, id: 20, title: "Shamollatkichdagi muhabbat" },
];

const romanceAlbums = [
  { userId: 1, id: 1, title: "Muhabbat iztirobi" },
  { userId: 1, id: 2, title: "Ko‘zlar jozibasi" },
  { userId: 1, id: 3, title: "Yurakdagi izlar" },
  { userId: 1, id: 4, title: "Sen bilan har tong" },
  { userId: 1, id: 5, title: "Ko‘ngil sadosi" },
  { userId: 1, id: 6, title: "Seni kutgan tunlar" },
  { userId: 1, id: 7, title: "Yuragim armoni" },
  { userId: 1, id: 8, title: "Ishq sharobidan" },
  { userId: 1, id: 9, title: "Muhabbat jilg‘asi" },
  { userId: 1, id: 10, title: "Sen mening ilhomimsan" },
  { userId: 1, id: 11, title: "Hayolimda sen" },
  { userId: 1, id: 12, title: "Kutilmagan sevgi" },
  { userId: 1, id: 13, title: "Ko‘ngil daftarim" },
  { userId: 1, id: 14, title: "Sen uchun yashayman" },
  { userId: 1, id: 15, title: "Muhabbat maktubi" },
  { userId: 1, id: 16, title: "Yurak birligi" },
  { userId: 1, id: 17, title: "Ko‘nglim seni izlaydi" },
  { userId: 1, id: 18, title: "Ishq soyasida" },
  { userId: 1, id: 19, title: "Sen ketgan tonglar" },
  { userId: 1, id: 20, title: "Oshiqlar qo‘shig‘i" },
];

const adventureAlbums = [
  { userId: 1, id: 1, title: "Sahro sirlari" },
  { userId: 1, id: 2, title: "Tog‘lar ortidagi izlanish" },
  { userId: 1, id: 3, title: "Yo‘qolgan xazina" },
  { userId: 1, id: 4, title: "O‘rmon labirinti" },
  { userId: 1, id: 5, title: "Dengiz yuragi" },
  { userId: 1, id: 6, title: "Maxfiy ekspeditsiya" },
  { userId: 1, id: 7, title: "So‘nggi yo‘l xaritasi" },
  { userId: 1, id: 8, title: "Qadimiy g‘or ichida" },
  { userId: 1, id: 9, title: "Jangchi merosi" },
  { userId: 1, id: 10, title: "Cho‘lda tirik qolganlar" },
  { userId: 1, id: 11, title: "Zaharlangan orol" },
  { userId: 1, id: 12, title: "G‘aroyib eshik ortida" },
  { userId: 1, id: 13, title: "Xarita topilgan tun" },
  { userId: 1, id: 14, title: "Tungi qum bo‘roni" },
  { userId: 1, id: 15, title: "To‘xtovsiz quvlov" },
  { userId: 1, id: 16, title: "Qorli cho‘qqilar sari" },
  { userId: 1, id: 17, title: "Sehrlangan ekspeditsiya" },
  { userId: 1, id: 18, title: "Yo‘lbars izidan" },
  { userId: 1, id: 19, title: "O‘tmish sirlarini izlab" },
  { userId: 1, id: 20, title: "Kutilmagan burilish" },
];

// GET handler
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const style = searchParams.get("style") || "comedy";
  const limit = Number.parseInt(searchParams.get("_limit") || "10");
  const page = Number.parseInt(searchParams.get("_page") || "1");

  let albums: any;
  switch (style) {
    case "drama":
      albums = dramaAlbums;
      break;
    case "romance":
      albums = romanceAlbums;
      break;
    case "adventure":
      albums = adventureAlbums;
      break;
    case "comedy":
      albums = comedyAlbums;
      break;
    default:
      albums = comedyAlbums;
  }

  // pagination ishlatmoqchi bo‘lsangiz
  // const startIndex = (page - 1) * limit;
  // const endIndex = startIndex + limit;
  // const paginatedAlbums = albums.slice(startIndex, endIndex);

  return NextResponse.json(albums, {
    headers: {
      "Access-Control-Allow-Origin": "*", // Hamma domenlarga ruxsat
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// OPTIONS request (CORS preflight) uchun ham yozish kerak
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
