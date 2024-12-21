// 玩具数据
const toysData = [
    {
        name: "智能积木套装",
        ageRange: "3-12岁",
        pieces: "200块",
        material: "环保ABS材质",
        size: "40×30×10cm",
        features: "STEM教育、逻辑思维训练",
        price: "¥299"
    },
    {
        name: "音乐电子琴",
        ageRange: "4-10岁",
        keys: "49键",
        material: "高级塑料",
        size: "60×20×5cm",
        features: "多种音色、节奏教学功能",
        price: "¥199"
    },
    {
        name: "遥控赛车",
        ageRange: "6-14岁",
        speed: "最高20km/h",
        material: "合金车身",
        size: "25×12×8cm",
        features: "四轮驱动、防撞设计",
        price: "¥259"
    },
    {
        name: "益智拼图",
        ageRange: "3-8岁",
        pieces: "100片",
        material: "优质木材",
        size: "30×30cm",
        features: "动物主题、边缘防护",
        price: "¥89"
    },
    {
        name: "科学实验套装",
        ageRange: "8-15岁",
        experiments: "30+种",
        material: "安全无毒材料",
        size: "35×25×15cm",
        features: "含说明书、安全认证",
        price: "¥399"
    },
    {
        name: "毛绒玩具熊",
        ageRange: "0-12岁",
        height: "80cm",
        material: "优质毛绒",
        features: "柔软舒适、可机洗",
        price: "¥159"
    },
    {
        name: "磁力片积木",
        ageRange: "3-12岁",
        pieces: "108片",
        material: "磁性材料",
        size: "标准片3×3cm",
        features: "磁性连接、多色可选",
        price: "¥229"
    },
    {
        name: "儿童画板",
        ageRange: "2-10岁",
        size: "45×35cm",
        material: "环保材质",
        features: "可擦写、支架可调",
        price: "¥139"
    },
    {
        name: "手工DIY套装",
        ageRange: "6-12岁",
        contents: "50+配件",
        material: "环保材料",
        size: "30×20×10cm",
        features: "创意手工、附教程",
        price: "¥169"
    },
    {
        name: "儿童厨房套装",
        ageRange: "3-8岁",
        pieces: "30+件",
        material: "食品级塑料",
        size: "50×30×70cm",
        features: "仿真设计、声光效果",
        price: "¥329"
    }
];

// 生成玩具卡片的函数
function createToyCard(toy) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let cardContent = `
        <h3>${toy.name}</h3>
        <div class="product-info">
            <p>适合年龄：${toy.ageRange}</p>
            ${toy.pieces ? `<p>包含配件：${toy.pieces}</p>` : ''}
            <p>材质：${toy.material}</p>
            ${toy.size ? `<p>尺寸：${toy.size}</p>` : ''}
            <p>特点：${toy.features}</p>
            <p>价格：${toy.price}</p>
        </div>
    `;
    
    card.innerHTML = cardContent;
    return card;
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    
    // 生成所有玩具卡片
    toysData.forEach(toy => {
        const card = createToyCard(toy);
        productGrid.appendChild(card);
    });
});
