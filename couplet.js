(function() {
    // 读取配置：优先使用用户定义的 window.cyberCoupletConfig，否则使用默认值
    const userConfig = window.cyberCoupletConfig || {};
    
    const config = {
        leftText: "钻研变调规则 扭尽六壬 理论无甩漏",
        rightText: "分析语音信号 睇通三关 数据好靓声",
        topText: "结果显著", 
        color: userConfig.color || "#1a1a1a", // 墨黑色
        bg: userConfig.bg || "#cf2121",    // 中国红
        font: userConfig.font || "'Zhi Mang Xing', 'Ma Shan Zheng', 'Kaiti', 'STKaiti', '华文楷体', serif"
    };

    // 注入適用於繁體的書法字體 (Zhi Mang Xing)
    if (!document.getElementById('font-zhi-mang-xing')) {
        const link = document.createElement('link');
        link.id = 'font-zhi-mang-xing';
        link.href = "https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    // 注入样式
    const style = document.createElement('style');
    style.innerHTML = `
        .cyber-couplet {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            /* 關鍵改動 1：移除 display: flex，垂直排版不需要居中文字 */
            width: 50px;
            /* 關鍵改動 2：使用 max-content 確保背景始終包裹文字 */
            height: max-content;
            /* 關鍵改動 3：設置一個合理的 max-height，防止在極小窗口下頂到邊緣 */
            max-height: 85vh; 
            overflow: hidden;

            padding: 20px 10px;
            background-color: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            /* 關鍵改動 4：稍微調小字號或使用固定像素，36px 對 13 字來說太大了 */
            font-size: 28px; 
            font-weight: 500;
            text-align: center;
            line-height: 1.2;
            border: 1px solid #991a1a;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1);
            z-index: 2147483647;
            writing-mode: vertical-rl;
            user-select: none;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* 針對窄屏窗口的防禦性調整 */
        @media (max-height: 600px) {
            .cyber-couplet {
                font-size: 22px; /* 僅在縱向空間極度不足時微調，保證不溢出 */
                width: 40px;
            }
        }

        .cyber-couplet:hover {
            transform: translateY(-50%) scale(1.02);
        }
        
        .cyber-couplet-left { left: 20px; }
        .cyber-couplet-right { right: 20px; }
        
        .cyber-couplet-top {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 8px 35px;
            background-color: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            font-size: 28px;
            border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 2147483647;
            /* 確保橫批也不會因為窗口窄而換行 */
            white-space: nowrap;
        }
    `;
    document.head.appendChild(style);

    function createCouplet(text, className) {
        if(!text) return;
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = text;
        document.body.appendChild(div);
    }

    const init = () => {
        if (document.querySelector('.cyber-couplet')) return;
        createCouplet(config.leftText, 'cyber-couplet cyber-couplet-left');
        createCouplet(config.rightText, 'cyber-couplet cyber-couplet-right');
        createCouplet(config.topText, 'cyber-couplet-top');
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        window.addEventListener('DOMContentLoaded', init);
    }
})();

