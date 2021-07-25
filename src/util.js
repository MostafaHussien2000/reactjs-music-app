import { v4 as uuidv4 } from "uuid";

function songsData() {
  return [
    {
      name: "Viatecture",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20119",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      artist: "Leavv, Makzo",
      colors: ["#EFC3B5", "#9B81B0"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "LuvnYou",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21784",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
      artist: "Chillhop Music, Ian Ewing",
      colors: ["#BD6304", "#03969C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Travelbag",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19058",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
      artist: "Mommy, Sleepy fish",
      colors: ["#5D8DCF", "#81A5E1"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "By Chance",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15224",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      artist: "SwuM",
      colors: ["#8F4F2D", "#283233"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Blue Moon",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14991",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      colors: ["#8DC8FA", "#4B3363"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ambleside",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12999",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aarigod",
      colors: ["#ACD142", "#414E30"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Habitat",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10265",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope, Kendall Miles",
      colors: ["#874E31", "#CD4F41"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Canary Forest",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      colors: ["#FDA94D", "#38645B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lost Love",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7837",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      artist: "Tom Doolie",
      colors: ["#8BE1FB", "#6158AB"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songsData;
