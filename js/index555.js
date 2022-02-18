var app = {
    el: "#app",
    data: {
        news: [
            {
                "topic": 0,
                "id": 704207,
                "link": "https://watch.setn.com/Video/704207",
                "preview": "https://attach.setn.com/newsimages/2020/03/09/2446609-XL.jpg",
                "title": "桃花不間斷！女人「這3生肖」越老越迷人！",
                "summary": "有人說，女人就像一杯酒，年份越久，越是香醇！年紀大的女人就該被說成黃臉婆、老女人嗎？其實，很多女人隨著年紀增長，不僅更會打扮，而且變得更有內涵，散發一種智慧美。擁有超過四千萬人觀看的陸媒《生肖乾坤》單元，特別提到，女人「這3生肖」越老越迷人！(記者唐家興)"
            },
            {
                "topic": 0,
                "id": 723225,
                "link": "https://watch.setn.com/Video/723225",
                "preview": "https://attach.setn.com/newsimages/2020/04/10/2497668-XL.jpg",
                "title": "正宮復仇　金喜愛「撩人戰袍」大公開！這件夯到全球都缺貨",
                "summary": "韓劇《夫婦的世界》因為劇情狗血加上節奏緊湊，反映了部分社會病態而受到高度關注，讓大家看了又恨又愛罵，討論度飆升，尤其是女主角金喜愛身著的多款「戰袍」也引起熱搜，讓粉絲們直呼想收！"
            },
            {
                "topic": 0,
                "id": 721864,
                "link": "https://www.setn.com/News.aspx?NewsID=721864",
                "preview": "https://attach.setn.com/newsimages/2020/04/08/2493738-XL.jpg",
                "title": "抗疫也要過好日子！486團購開跑母親節優惠　首推購好買",
                "summary": "就算武漢肺炎（COVID-19、新冠肺炎）疫情持續延燒，但日常生活還是要繼續！一年一度的母親節即將到來，你準備好了嗎？"
            },
            {
                "topic": 0,
                "id": 723999,
                "link": "https://www.setn.com/News.aspx?NewsID=723999",
                "preview": "https://attach.setn.com/newsimages/2020/04/12/2500062-XL.jpg",
                "title": "母親節蛋糕早鳥預購開跑　 85度C推期間限定85折優惠",
                "summary": "再過一個月就是母親節了，不過今年受到疫情影響，可能很多人不想出門慶祝，簡單在家過節，感謝媽媽一年來的辛勞。知名連鎖咖啡店85度C今年推出六款母親節主題蛋糕，除了全台灣有多間門市可以就近購買外，還推出抽獎活動，預計擋期間全台可售出超過六萬個母親節主題蛋糕。（記者：馮珮汶）"
            },
            {
                "topic": 0,
                "id": 725189,
                "link": "https://www.setn.com/News.aspx?NewsID=725189",
                "preview": "https://attach.setn.com/newsimages/2020/04/14/2503351-XL.jpg",
                "title": "4人同行1人免費！澎湃自助餐吃到飽　雙人套餐買一送一",
                "summary": "為歡慶母親節，台北王朝大酒店於5月1日至5月31日集結旗下三大主題餐飲推出超狂優惠，包括無國界自助餐SUNNY BUFFET祭出4人同行1人免費；以中華料理聞名的玉蘭軒端出外帶套餐與桌菜；擁有自家烘焙坊的SUNNY CAFE則推出2款母親節限定蛋糕「榛愛檸檬塔」與「茶香馨意捲」，讓全天下的媽媽溫馨過好節。"
            },
            {
                "topic": 0,
                "id": 727440,
                "link": "https://www.setn.com/News.aspx?NewsID=727440",
                "preview": "https://attach.setn.com/newsimages/2020/04/17/2509969-XL.jpg",
                "title": "愛漂亮／免代購！理膚寶水B5霜才三百、薇姿這裏搶最便宜",
                "summary": "理膚寶水你只知道B5全面修復霜嗎？那就太落伍了！品牌推出新品「瑰蜜霜」全護清透亮顏妝前防曬隔離乳UVA PRO，擁有極高UVA/UVB隔離防護，玫瑰色配方更能襯托亮顏膚色，防曬同時打造出透亮美肌濾鏡，保濕長達8小時，超越素顏霜，即使整日戴著口罩也不脫妝！"
            },
            {
                "topic": 0,
                "id": 720910,
                "link": "https://www.setn.com/News.aspx?NewsID=720910",
                "preview": "https://attach.setn.com/newsimages/2020/04/07/2491447-XL.jpg",
                "title": "母親節吃大餐！福容推「滿萬送萬」　阿基師讚歷年最優惠",
                "summary": "在武漢肺炎（COVID-19、新冠肺炎）疫情不見和緩的情況下，國內飯店業者在做好防疫工作的同時，依舊持續推出好康優惠；針對母親節即將來到，福容大飯店即日起至5月31日推出「滿萬送萬」活動，餐飲消費滿萬元就送價值萬元的聯合住宿券一張，可任選全台連鎖福容大飯店其中一家入住。"
            },
            {
                "topic": 0,
                "id": 637517,
                "link": "https://www.setn.com/News.aspx?NewsID=637517",
                "preview": "https://attach.setn.com/newsimages/2018/02/16/1252799-XL.jpg",
                "title": "孝親費該怎麼給？過來人曝「絕佳辦法」：避免兩方吵架",
                "summary": "年輕族群面臨低薪危機，生活必須要省吃儉用，到了月底還可能淪為「月光族」，因此要不要給所謂的「孝親費」，成了一項兩難的問題。近期就有網友發文，表示自家長輩並沒有硬性要求要付孝親費，讓身邊朋友羨慕不已。這樣的現象也讓他不禁好奇，到底付這筆費用的意義與普遍性如何？貼文引發討論，有人就感慨「這個時代還跟年輕人拿孝親費，唉！」"
            },
            {
                "topic": 0,
                "id": 722588,
                "link": "https://watch.setn.com/Video/722588",
                "preview": "https://attach.setn.com/newsimages/2020/04/09/2496495-XL.jpg",
                "title": "愛漂亮／4月必買香水清單出爐！粉霧漸層、白瓷花點綴美哭",
                "summary": "Jo Malone London 又來燒大家荷包了！每年都推出新品的花香系列，這次將捲土重來，以「秘境花園」為主題的限量系列，不僅推出新味道「睡蓮古龍水」與「柚子古龍水」就連瓶身也是美到發瘋，以夢幻漸層粉嫩色瓶身作為主打，摸起來滑順又不沾指紋，一字排開超級美！"
            },
            {
                "topic": 0,
                "id": 714688,
                "link": "https://www.setn.com/News.aspx?NewsID=714688",
                "preview": "https://attach.setn.com/newsimages/2020/03/26/2474162-XL.jpg",
                "title": "送暖女性醫護人員　在地業者贈逾6千片「衛生棉」",
                "summary": "武漢肺炎（COVID-19、新冠肺炎）持續延燒，隨著世界各國染病人數攀升，新竹縣市也陸續出現確診病例。一家衛生棉業者考量到女性醫護人員穿脫隔離衣、防護衣可能造成不便和悶熱感，遇上生理期尤其不舒服，特別送上超過6000片的涼感衛生棉給新竹各大醫院，替第一線醫護打氣。（記者：陳弋）"
            }
        ]
    },
    mounted: function () {
        $('.newsCarousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay:true,
            navClass: ["newsCarouselNav_prev", "newsCarouselNav_next"],
            navText: [" ", " "],
            navContainerClass: "carouselNav",
            responsive:{
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                700:{
                    items: 2
                },
                1100:{
                    items: 3
                }
            }
        });
    }
};

$(document).ready(function(e) {
    vm = new Vue(app);

 $(document)
        .on('click', '.weekBox', function (e) {
            var youtubeId = $(this).data("youtube-id");
            if(!youtubeId.length) {
                player.pauseVideo();
                $('#player').hide().siblings('.videoPic').show();
                return;
            }

            $('#player').show().siblings('.videoPic').hide();
            player.loadVideoById(youtubeId);
        });

});


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        playerVars: { 'autoplay': 1 },
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    /*event.target.playVideo();*/
}