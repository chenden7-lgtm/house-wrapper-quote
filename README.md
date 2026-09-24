# 特斯拉配件查詢與車型相容性配置系統 (Tesla Accessories Finder & Visualizer)

專為 Tesla 車主（包含 Model 3 煥新版 Highland、Model Y 煥新版 Juniper、Model S、Model X 與 Cybertruck）打造的高顏值、高規格配件查詢與實車圖解選配系統。

## 🌟 主要功能與特色

1. **車型與版型適配引擎 (Fitment Engine)**：
   - 即時切換 Model 3 Highland 煥新版 / 經典版、Model Y、Model S、Model X、Cybertruck。
   - 自動判別不通用配件並彈出警示提示（如 Highland 扶手箱與腳踏墊版型差異）。
2. **實車位置互動試裝 (Vehicle Visualizer)**：
   - 提供視覺化車輛節點圖解（前備廂、中控鞍座、天窗車頂、車室腳踏、後備廂深槽、輪圈側裙）。
   - 點擊熱點即時鎖定該區域專用配件。
3. **新手提車必備 Top 10 點檢與預算計算機 (New Owner Checklist)**：
   - 精選交車最需要的必備裝備清單。
   - 即時統計採購預算並支援一鍵複製/匯出採購文字清單。
4. **多款配件橫向對比 (Accessory Comparison Matrix)**：
   - 支援選擇至多 3 項配件進行規格、難易度、優缺點橫向評比。
5. **極致視覺美學 (Tesla Sleek Dark & Light Mode)**：
   - 採用 Glassmorphic 玻璃擬態與 Tesla 特色 Crimson Red 霓虹點綴。

## 🚀 如何啟動

本專案採用純前端現代模組化架構 (HTML5, Custom CSS, Modular JavaScript ES6)，無需繁瑣的 Node 編譯過程：

直接使用任何 Web Server（例如 Python, VS Code Live Server, http-server 或瀏覽器）開啟 `index.html` 即可：

```bash
# 例如使用 python 開啟本地伺服器
python3 -m http.server 8080
```
開啟瀏覽器訪問 `http://localhost:8080` 即可體驗！
