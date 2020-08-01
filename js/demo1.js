var canvas = document.querySelector('canvas');
var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var persons = [
    {
        name: "AllKillKevin",
        qq: "6052121"
    },
    {
        name: "AK丶阿特",
        qq: "6177042"
    },
    {
        name: "打王者去了不玩跑跑啦",
        qq: "7772771"
    },
    {
        name: "冥秋",
        qq: "44438937"
    },
    {
        name: "AK丶头哥",
        qq: "55303419"
    },
    {
        name: "AK丶鬼鬼灰灰",
        qq: "80874681"
    },
    {
        name: "tinfanmao",
        qq: "113116399"
    },
    {
        name: "AK 丶神秘人",
        qq: "173397458"
    },
    {
        name: "AK丶葱头",
        qq: "194722196"
    },
    {
        name: "AK丶侬蓝",
        qq: "214033970"
    },
    {
        name: "AK丶红茶o",
        qq: "215761417"
    },
    {
        name: "AK丶战神年代",
        qq: "231060034"
    },
    {
        name: "AK丶龙金妹",
        qq: "247154052"
    },
    {
        name: "AK丶长老",
        qq: "251120702"
    },
    {
        name: "A丶K丨雪碧",
        qq: "301070963"
    },
    {
        name: "AK丶歌声",
        qq: "351549719"
    },
    {
        name: "AK丶小意达",
        qq: "377954295"
    },
    {
        name: "AK丶www",
        qq: "401969744)"
    },
    {
        name: "AK波波",
        qq: "412296613"
    },
    {
        name: "AK丶LaoA",
        qq: "419600260"
    },
    {
        name: "队队",
        qq: "(449174033"
    },
    {
        name: "AK丶LP",
        qq: "457695377"
    },
    {
        name: "AK丶随心",
        qq: "458402529"
    },
    {
        name: "AK丶海克斯",
        qq: "465468682"
    },
    {
        name: "AK丶安晚",
        qq: "469214028"
    },
    {
        name: "AKGAMELIN",
        qq: "470419496"
    },
    {
        name: "{酱油党}无限小鱼",
        qq: "494741138"
    },
    {
        name: "AK常威",
        qq: "502548462"
    },
    {
        name: "AK丶余地",
        qq: "15249014471"
    },
    {
        name: "AK丶狐狸",
        qq: "510456530"
    },
    {
        name: "AKsuckme",
        qq: "514792013"
    },
    {
        name: "嘿小y",
        qq: "535678128"
    },
    {
        name: "AK丶佳哥o",
        qq: "542670423"
    },
    {
        name: "AK丶838",
        qq: "544742666"
    },
    {
        name: "AK丶奶爸",
        qq: "545044994"
    },
    {
        name: "AK丶倒茶小弟泉",
        qq: "597937394"
    },
    {
        name: "AK丶Paker",
        qq: "598721172"
    },
    {
        name: "追",
        qq: "604178404"
    },
    {
        name: "AK丶老铁",
        qq: "609606041"
    },
    {
        name: "AK丶丰顺",
        qq: "616308361"
    },
    {
        name: "每个明天会更好",
        qq: "623445610"
    },
    {
        name: "ㅈㅋㄷㅅ듛",
        qq: "627591247"
    },
    {
        name: "AK丶亚希",
        qq: "635334400"
    },
    {
        name: "AK丶酒精oc",
        qq: "635580833"
    },
    {
        name: "AK丶RE",
        qq: "641394607"
    },
    {
        name: "AK丨企鹅果果",
        qq: "670377047"
    },
    {
        name: "AK丶无心",
        qq: "670907704"
    },
    {
        name: "AK丶帅帅",
        qq: "673247331"
    },
    {
        name: "AK丶有心人",
        qq: "694265634"
    },
    {
        name: "AK丶胖D（阿道）",
        qq: "707804103"
    },
    {
        name: "AK、丫丫",
        qq: "710570380"
    },
    {
        name: "AK丶芙蓉王",
        qq: "719765654"
    },
    {
        name: "AK丶Dxsen",
        qq: "724187807"
    },
    {
        name: "AK丶绿毛",
        qq: "731422295"
    },
    {
        name: "AK丶神殇",
        qq: "740919642"
    },
    {
        name: "AK丶趁早",
        qq: "756993670"
    },
    {
        name: "AK丶Rllo",
        qq: "765977730"
    },
    {
        name: "AK丶大王",
        qq: "767791734"
    },
    {
        name: "ak水晶",
        qq: "771384398"
    },
    {
        name: "ak丶橙子酱",
        qq: "772888203"
    },
    {
        name: "AK、桃明",
        qq: "775350576"
    },
    {
        name: "ALK丶烤牛鞭",
        qq: "776404909"
    },
    {
        name: "AK丶墨辰z",
        qq: "791373421"
    },
    {
        name: "AK丶池鱼",
        qq: "791485665"
    },
    {
        name: "AK丶lanb",
        qq: "793694507"
    },
    {
        name: "AK丶鬼鬼",
        qq: "798101580"
    },
    {
        name: "AK丶CGX",
        qq: "798276484"
    },
    {
        name: "AK丶有为v",
        qq: "825116711"
    },
    {
        name: "AK丶佳宜",
        qq: "837168987"
    },
    {
        name: "AK丶嚷嚷a",
        qq: "839803777"
    },
    {
        name: "AK丶梦汐酱",
        qq: "849290710"
    },
    {
        name: "AllKillJinQu",
        qq: "857665766"
    },
    {
        name: "AK丶流年",
        qq: "861231055"
    },
    {
        name: "Ak丶com",
        qq: "871882435"
    },
    {
        name: "AK丶菜菜",
        qq: "894339382"
    },
    {
        name: "AK。sss",
        qq: "895927446"
    },
    {
        name: "Ak、凌怒",
        qq: "909569058"
    },
    {
        name: "AK丶笔墨",
        qq: "927293539"
    },
    {
        name: "致命打击",
        qq: "954462623"
    },
    {
        name: "ak 浅枫",
        qq: "958519082"
    },
    {
        name: "AK丶少艾",
        qq: "965648457"
    },
    {
        name: "ak胖",
        qq: "980764139"
    },
    {
        name: "AK丶天诺",
        qq: "981917599"
    },
    {
        name: "AK丶西米露a",
        qq: "1013122300"
    },
    {
        name: "一只有趣的灵魂丶",
        qq: "1027401449"
    },
    {
        name: "AK.丶吉米",
        qq: "1037426014"
    },
    {
        name: "AK、大挺",
        qq: "1055617850"
    },
    {
        name: "AK丶霓虹尾灯",
        qq: "1083564101"
    },
    {
        name: "AK丶 十七",
        qq: "1097798178"
    },
    {
        name: "康子丶",
        qq: "1104434677"
    },
    {
        name: "ak喀秋莎",
        qq: "1114545222"
    },
    {
        name: "ak晓铭",
        qq: "1115073597"
    },
    {
        name: "xiaoAKaw",
        qq: "1123327142"
    },
    {
        name: "地球生物。",
        qq: "1142407413"
    },
    {
        name: "AK丶marry",
        qq: "1173523055"
    },
    {
        name: "AK丶鸡腿",
        qq: "1227411370"
    },
    {
        name: "AK丶凉介",
        qq: "1227983850"
    },
    {
        name: "AK   啊笑",
        qq: "1257461455"
    },
    {
        name: "AllKill思思",
        qq: "1260433958"
    },
    {
        name: "AK丶发发",
        qq: "1359185932"
    },
    {
        name: "o媳妇就是党x",
        qq: "1359189396"
    },
    {
        name: "AK丶小诗",
        qq: "1374353251"
    },
    {
        name: "AK丶小豆豆",
        qq: "1419117479"
    },
    {
        name: "AK丶小天",
        qq: "1433671822"
    },
    {
        name: "AK秋言",
        qq: "1443004615"
    },
    {
        name: "AK丶子婴",
        qq: "1458738165"
    },
    {
        name: "AK丶cherry",
        qq: "1574790991"
    },
    {
        name: "AK丶4ever21",
        qq: "1605130293"
    },
    {
        name: "AK丶冷殇",
        qq: "1612949460"
    },
    {
        name: "张晓样",
        qq: "1741804634"
    },
    {
        name: "AK丶蓝宝",
        qq: "1766936608"
    },
    {
        name: "AllKill灿烈",
        qq: "1772309691"
    },
    {
        name: "AK丶杯莫停",
        qq: "1779965748"
    },
    {
        name: "AK丶M",
        qq: "1806781140"
    },
    {
        name: "药水",
        qq: "1845936142"
    },
    {
        name: "AK丶咕咕儿",
        qq: "1950048014"
    },
    {
        name: "AK丶追梦者s",
        qq: "2012561268"
    },
    {
        name: "AK丶木槿",
        qq: "2025503445"
    },
    {
        name: "AK、秋水美",
        qq: "2170343673"
    },
    {
        name: "AK丶Newbee",
        qq: "2211819191"
    },
    {
        name: "AK丶啃啃哒",
        qq: "2215399410"
    },
    {
        name: "斗鱼AK丶点点",
        qq: "2267002478"
    },
    {
        name: "AK、睛天",
        qq: "2275496305"
    },
    {
        name: "Ak丶巴达",
        qq: "2295656885"
    },
    {
        name: "AK-小九",
        qq: "2409685567"
    },
    {
        name: "AK丶恋旧",
        qq: "2414906715"
    },
    {
        name: "AK丶Summer",
        qq: "2584701849"
    },
    {
        name: "Ak、阿海",
        qq: "2590660948"
    },
    {
        name: "AK、阿狗",
        qq: "2815987789"
    },
    {
        name: "AK丶202c",
        qq: "2860673540"
    },
    {
        name: "AK丶逗姜",
        qq: "3163747264"
    },
    {
        name: "AK丶憨憨",
        qq: "3241629008"
    },
    {
        name: "AK丶大婶",
        qq: "3299709710"
    },
    {
        name: "AKAAron",
        qq: "3301080013"
    },
    {
        name: "AK丶666",
        qq: "3308043185"
    },
    {
        name: "AK丶小狼",
        qq: "3340388585"
    },
    {
        name: "AK｀云宝飙车猫猫",
        qq: "3397317471"
    },
    {
        name: "AK丶小豆",
        qq: "3421618202"
    },
    {
        name: "AK｀米米",
        qq: "3424636382"
    }
];

var colors = [
    new THREE.Color(0xac1122),
    new THREE.Color(0x96789f),
    new THREE.Color(0x535353)];

var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0x000000);

var scene = new THREE.Scene();

var raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 6;


var camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
camera.position.set(0, 0, 350);

var galaxy = new THREE.Group();
scene.add(galaxy);

// Create dots
var loader = new THREE.TextureLoader();
loader.crossOrigin = "";
var dotTexture = loader.load("img/dotTexture.png");
var dotsAmount = 3000;
var dotsGeometry = new THREE.Geometry();
var positions = new Float32Array(dotsAmount * 3);

var sizes = new Float32Array(dotsAmount);
var colorsAttribute = new Float32Array(dotsAmount * 3);
for (var i = 0; i < dotsAmount; i++) {
    var vector = new THREE.Vector3();

    vector.color = Math.floor(Math.random() * colors.length);
    vector.theta = Math.random() * Math.PI * 2;
    vector.phi =
        (1 - Math.sqrt(Math.random())) *
        Math.PI /
        2 *
        (Math.random() > 0.5 ? 1 : -1);

    vector.x = Math.cos(vector.theta) * Math.cos(vector.phi);
    vector.y = Math.sin(vector.phi);
    vector.z = Math.sin(vector.theta) * Math.cos(vector.phi);
    vector.multiplyScalar(120 + (Math.random() - 0.5) * 5);
    vector.scaleX = 5;

    if (Math.random() > 0.5) {
        moveDot(vector, i);
    }
    dotsGeometry.vertices.push(vector);
    vector.toArray(positions, i * 3);
    colors[vector.color].toArray(colorsAttribute, i*3);
    sizes[i] = 5;
}

function moveDot(vector, index) {
        var tempVector = vector.clone();
        tempVector.multiplyScalar((Math.random() - 0.5) * 0.2 + 1);
        TweenMax.to(vector, Math.random() * 3 + 3, {
            x: tempVector.x,
            y: tempVector.y,
            z: tempVector.z,
            yoyo: true,
            repeat: -1,
            delay: -Math.random() * 3,
            ease: Power0.easeNone,
            onUpdate: function () {
                attributePositions.array[index*3] = vector.x;
                attributePositions.array[index*3+1] = vector.y;
                attributePositions.array[index*3+2] = vector.z;
            }
        });
}

var bufferWrapGeom = new THREE.BufferGeometry();
var attributePositions = new THREE.BufferAttribute(positions, 3);
bufferWrapGeom.addAttribute('position', attributePositions);
var attributeSizes = new THREE.BufferAttribute(sizes, 1);
bufferWrapGeom.addAttribute('size', attributeSizes);
var attributeColors = new THREE.BufferAttribute(colorsAttribute, 3);
bufferWrapGeom.addAttribute('color', attributeColors);
var shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        texture: {
            value: dotTexture
        }
    },
    vertexShader: document.getElementById("wrapVertexShader").textContent,
    fragmentShader: document.getElementById("wrapFragmentShader").textContent,
    transparent:true
});
var wrap = new THREE.Points(bufferWrapGeom, shaderMaterial);
scene.add(wrap);

// Create white segments
var segmentsGeom = new THREE.Geometry();
var segmentsMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
    vertexColors: THREE.VertexColors
});
for (i = dotsGeometry.vertices.length - 1; i >= 0; i--) {
    vector = dotsGeometry.vertices[i];
    for (var j = dotsGeometry.vertices.length - 1; j >= 0; j--) {
        if (i !== j && vector.distanceTo(dotsGeometry.vertices[j]) < 12) {
            segmentsGeom.vertices.push(vector);
            segmentsGeom.vertices.push(dotsGeometry.vertices[j]);
            segmentsGeom.colors.push(colors[vector.color]);
            segmentsGeom.colors.push(colors[vector.color]);
        }
    }
}
var segments = new THREE.LineSegments(segmentsGeom, segmentsMat);
galaxy.add(segments);

var hovered = [];
var prevHovered = [];
function render(a) {
    var i;
    dotsGeometry.verticesNeedUpdate = true;
    segmentsGeom.verticesNeedUpdate = true;
    
    raycaster.setFromCamera( mouse, camera );
    var intersections = raycaster.intersectObjects([wrap]);
    hovered = [];
    if (intersections.length) {
        for(i = 0; i < intersections.length; i++) {
            var index = intersections[i].index;
            hovered.push(index);
            if (prevHovered.indexOf(index) === -1) {
                onDotHover(index);
            }
         }
    }
    for(i = 0; i < prevHovered.length; i++){
        if(hovered.indexOf(prevHovered[i]) === -1){
            mouseOut(prevHovered[i]);
        }
    }
    prevHovered = hovered.slice(0);
    attributeSizes.needsUpdate = true;
    attributePositions.needsUpdate = true;
    renderer.render(scene, camera);
}
var tag = document.getElementById("tag");
var personName = document.getElementById("personName");
var qqImg = document.getElementById("qqImg");
function onDotHover(index) {
    if (index < 1400) {
        tag.style.visibility = "visible";
        var person = persons[index % persons.length];
        personName.innerText = person.name;
        qqImg.src = "https://q1.qlogo.cn/g?b=qq&nk=" + person.qq + "&s=100";
        tag.style.left = (mouse.x + 1) * width / 2 + canvas.getBoundingClientRect().left + "px";
        tag.style.top = (1 - mouse.y) * height / 2  + canvas.getBoundingClientRect().top + "px";
    }
    dotsGeometry.vertices[index].tl = new TimelineMax();
    dotsGeometry.vertices[index].tl.to(dotsGeometry.vertices[index], 1, {
        scaleX: 10,
        ease: Elastic.easeOut.config(2, 0.2),
        onUpdate: function() {
            attributeSizes.array[index] = dotsGeometry.vertices[index].scaleX;
        }
    });
}

function mouseOut(index) {
    dotsGeometry.vertices[index].tl.to(dotsGeometry.vertices[index], 0.4, {
        scaleX: 5,
        ease: Power2.easeOut,
        onUpdate: function() {
            attributeSizes.array[index] = dotsGeometry.vertices[index].scaleX;
        }
    });
    tag.style.visibility = "hidden";
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

var mouse = new THREE.Vector2(-100,-100);
function onMouseMove(e) {
    var canvasBounding = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - canvasBounding.left) / width) * 2 - 1;
    mouse.y = -((e.clientY - canvasBounding.top) / height) * 2 + 1;
}

TweenMax.ticker.addEventListener("tick", render);
window.addEventListener("mousemove", onMouseMove);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});