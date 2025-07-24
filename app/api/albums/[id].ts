import { NextRequest, NextResponse } from "next/server";

const comedyAlbums = [
  {
    userId: 1,
    id: 1,
    title: "Qozon tagida tuxum",
  },
  {
    userId: 1,
    id: 2,
    title: "Eshikni yop, qush kirib ketdi",
  },
  {
    userId: 1,
    id: 3,
    title: "Moshinani yuvdim, yomg‘ir yog‘di",
  },
  {
    userId: 1,
    id: 4,
    title: "Qo‘shniming mushugi prezident bo‘ldi",
  },
  {
    userId: 1,
    id: 5,
    title: "Choynakdagi chaqmoq",
  },
  {
    userId: 1,
    id: 6,
    title: "To‘yga kelib, non olib ketgan bola",
  },
  {
    userId: 1,
    id: 7,
    title: "Gaz yo‘q, lekin ovqat tayyor",
  },
  {
    userId: 1,
    id: 8,
    title: "Maktabga ketyapman deb to‘yga borgan bola",
  },
  {
    userId: 1,
    id: 9,
    title: "Rassom bola devorni bo‘yadi",
  },
  {
    userId: 1,
    id: 10,
    title: "Qovoq ustida choy ichgan ayiq",
  },
  {
    userId: 1,
    id: 11,
    title: "Oyga ketgan kampir",
  },
  {
    userId: 1,
    id: 12,
    title: "Tutqunlikdagi tandir non",
  },
  {
    userId: 1,
    id: 13,
    title: "Osh pishguncha multfilm ko‘raylik",
  },
  {
    userId: 1,
    id: 14,
    title: "Bosma kitobda qarsillagan ovoz",
  },
  {
    userId: 1,
    id: 15,
    title: "Choy ichib hayotga qaytgan kompyuter",
  },
  {
    userId: 1,
    id: 16,
    title: "Nonvoy ham bloger bo‘libdi",
  },
  {
    userId: 1,
    id: 17,
    title: "Ko‘cha supurgan robotlar",
  },
  {
    userId: 1,
    id: 18,
    title: "Futbol to‘pi bilan uchgan qush",
  },
  {
    userId: 1,
    id: 19,
    title: "Pishillab gapirgan mushuk",
  },
  {
    userId: 1,
    id: 20,
    title: "Shamollatkichdagi muhabbat",
  },
];



export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const style = searchParams.get("style") || "comedy";
  const id = parseInt(searchParams.get("id") || "");

  if (!id) {
    return NextResponse.json({ error: "ID yuborilmadi" }, { status: 400 });
  }

  const index = comedyAlbums.findIndex((a) => a.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Album topilmadi" }, { status: 404 });
  }

  return NextResponse.json({message:`${id} - Albums o'chirib yuborildi`});
}



