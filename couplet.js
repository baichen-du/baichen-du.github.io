(function() {
    // 1. 基礎配置
    const userConfig = window.cyberCoupletConfig || {};
    
    const config = {
        leftText: "鑽研變調規則 扭盡六壬 理論無甩漏",
        rightText: "分析語音信號 睇通三關 數據好靚聲",
        topText: "結果顯著", 
        // 使用具備金屬感的金色
        goldColor: "#ffd700", 
        bg: "#cf2121", 
        // 優先使用繁體書法字體
        font: "'Zhi Mang Xing', 'Kaiti TC', 'STKaiti', 'Microsoft JhengHei', serif"
    };

    // 2. 注入 Google 書法字體 (Zhi Mang Xing)
    if (!document.getElementById('font-zhi-mang-xing')) {
        const link = document.createElement('link');
        link.id = 'font-zhi-mang-xing';
        link.href = "https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    // 3. 注入優化後的樣式
    const style = document.createElement('style');
    style.innerHTML = `
        .cyber-couplet {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            /* 穩定性優化：由文字內容撐開高度，防止背景包不住文字 */
            height: max-content;
            max-height: 85vh;
            padding: 25px 12px;
            background-color: ${config.bg};
            /* 金墨效果：金色文字搭配深色立體陰影 */
            color: ${config.goldColor};
            text-shadow: 1px 1px 0px rgba(0,0,0,0.2), 
                         0 0 8px rgba(255, 215, 0, 0.5);
            
            font-family: ${config.font};
            font-size: 30px; /* 固定字號，確保不隨窗口亂變 */
            font-weight: 500;
            text-align: center;
            line-height: 1.2;
            border: 1px solid #991a1a;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4), 
                        inset 0 0 15px rgba(0,0,0,0.2);
            z-index: 2147483647;
            writing-mode: vertical-rl;
            user-select: none;
            transition: transform 0.3s ease;
            overflow: hidden;
        }

        .cyber-couplet:hover {
            transform: translateY(-50%) scale(1.03);
        }

        .cyber-couplet-left { left: 30px; }
        .cyber-couplet-right { right: 30px; }
        
        .cyber-couplet-top {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 45px;
            background-color: ${config.bg};
            color: ${config.goldColor};
            text-shadow: 1px 1px 0px rgba(0,0,0,0.2), 
                         0 0 8px rgba(255, 215, 0, 0.5);
            font-family: ${config.font};
            font-size: 28px;
            border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 2147483647;
            white-space: nowrap;
        }


        @media (max-height: 700px) {
            .cyber-couplet { font-size: 24px; width: 42px; }
            .cyber-couplet-top { font-size: 22px; top: 15px; }
        }
    `;
    document.head.appendChild(style);

    // 4. 創建對聯元素（移除關閉按鈕邏輯）
    function createCouplet(text, className) {
        if(!text) return;
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = text;
        document.body.appendChild(div);
    }

    const init = () => {
        // 防止重複加載
        if (document.querySelector('.cyber-couplet')) return;
        
        createCouplet(config.leftText, 'cyber-couplet cyber-couplet-left');
        createCouplet(config.rightText, 'cyber-couplet cyber-couplet-right');
        createCouplet(config.topText, 'cyber-couplet-top');
    };

    // 5. 確保在 DOM 加載後運行
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        window.addEventListener('DOMContentLoaded', init);
    }
})();
