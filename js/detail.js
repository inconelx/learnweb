var post = { imgs:['image/1_0.png','image/1_1.png'],
info_0:'H',info_1:'氢',info_2:'1.008',
info_3:'-259℃',info_4:'-253℃',info_5:'非金属',info_6:'1',
info_7:'ⅠA',info_8_0:'1s',info_8_1:'1',info_8_2:'',
info_8_3:'',info_8_4:'',info_8_5:'',
briefs:['氢是原子序数为1的化学元素，化学符号为H，在元素周期表中位于第一位。其原子质量为1.00794u，是最轻的元素，也是宇宙中含量最多的元素，大约占据宇宙质量的75%。主星序上恒星的主要成分都是等离子态的氢。而在地球上，自然条件形成的游离态的氢单质相对罕见。',
'氢最常见的同位素是氕（piē），含1个质子，不含中子。在离子化合物中，氢原子可以得一个电子成为氢阴离子（以H-表示）构成氢化物，也可以失去一个电子成为氢阳离子（以H+表示，简称氢离子），但氢离子实际上以更为复杂的形式存在。氢与除稀有气体外的几乎所有元素都可形成化合物，存在于水和几乎所有的有机物中。它在酸碱化学中尤为重要，酸碱反应中常存在氢离子的交换。氢作为最简单的原子，在原子物理中有特别的理论价值。对氢原子的能级、成键等的研究在量子力学的发展中起了关键作用。',
'氢气（H2）最早于16世纪初被人工合成，当时用的方法是将金属置于强酸中。1766～81年，亨利·卡文迪许发现氢气是一种与以往所发现气体不同的另一种气体，在燃烧时产生水，这一性质也决定了拉丁语“hydrogenium”这个名字（“生成水的物质”之意）。常温常压下，氢气是一种极易燃烧，无色透明、无臭无味的气体。',
'氢原子则有极强的还原性。在高温下氢非常活泼。除稀有气体元素外，几乎所有的元素都能与氢生成化合物。']};
$.get("../template/detail_info.tpl", function(result){
    var html = ejs.compile(result)(post);
    $("main").html(html);
    $(function() {
        $("#slider").easySlider( {
            slideSpeed: 500,
            paginationSpacing: "15px",
            paginationDiameter: "12px",
            paginationPositionFromBottom: "20px",
            slidesClass: ".slides",
            controlsClass: ".controls",
            paginationClass: ".pagination"					
        });
    });
});
    
