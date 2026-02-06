(function() {
    // 1. 配置：恢復你偏好的墨黑配色
    const userConfig = window.cyberCoupletConfig || {};
    
    const config = {
        leftText: "Features checked Agree valued derivation is complete",
        rightText: "Formants tracked noise reduced the spectrogram is sweet",
        topText: "[+SUCCESS]", 
        color: userConfig.color || "#1a1a1a", // 墨黑色
        bg: userConfig.bg || "#cf2121",    // 中国红
        font: userConfig.font || "'Zhi Mang Xing', 'Ma Shan Zheng', 'Kaiti', 'STKaiti', '华文楷体', serif"
    };

    // 2. 注入字體
    if (!document.getElementById('font-zhi-mang-xing')) {
        const link = document.createElement('link');
        link.id = 'font-zhi-mang-xing';
        link.href = "https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    // 3. 注入樣式
    const style = document.createElement('style');
    style.innerHTML = `
        .cyber-couplet {
            position: fixed;
            top: 50%;
            /* 使用 translate3d 確保在 Retina 屏幕下的渲染精度，防止偏移 */
            transform: translateY(-50%) translate3d(0,0,0);
            
            /* 居中核心修正：使用 flex 確保文字在 50px 寬度內絕對水平居中 */
            display: flex;
            align-items: center; 
            justify-content: center;

            width: 50px;
            height: max-content;
            max-height: 85vh; 
            overflow: hidden;

            /* 確保內邊距不影響寬度計算 */
            box-sizing: border-box;
            padding: 25px 5px; 

            background-color: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            font-size: 28px; 
            font-weight: 500;
            text-align: center;
            line-height: 1.15;
            border: 1px solid #991a1a;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1);
            z-index: 2147483647;
            writing-mode: vertical-rl;
            user-select: none;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cyber-couplet:hover {
            transform: translateY(-50%) scale(1.02);
        }
        
        .cyber-couplet-left { left: 25px; }
        .cyber-couplet-right { right: 25px; }
        
        .cyber-couplet-top {
            position: fixed;
            top: 25px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 40px;
            background-color: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            font-size: 28px;
            border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 2147483647;
            white-space: nowrap;
        }

        /* 小屏幕防禦 */
        @media (max-height: 700px) {
            .cyber-couplet {
                font-size: 22px;
                width: 40px;
                padding: 15px 5px;
            }
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
