// ==================== CHAT DATABASE DÙNG GOOGLE SHEETS ====================
// ⚠️ THAY URL NÀY BẰNG URL GOOGLE SHEET CỦA BẠN ⚠️
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyVGPN-zbGQ1PdVYsyzjAqTwWdt0fpFGZOMawoE3jKDXbMxQmgcLIUo96MQcFU9dcd1ow/exec";

let chatMessages = [];
let pollingInterval = null;

// Load tin nhắn từ Google Sheet
async function loadChatData() {
    await fetchMessagesFromSheet();
}

async function fetchMessagesFromServer() {
    try {
        const response = await fetch(GOOGLE_SHEET_API_URL);
        const messages = await response.json();
        if (Array.isArray(messages)) {
            // Lọc bỏ tin nhắn rỗng
            chatMessages = messages.filter(msg => msg && msg.message && msg.message.trim() !== '');
            // Lưu vào bộ nhớ tạm
            localStorage.setItem('chat_cache', JSON.stringify(chatMessages));
            console.log('📥 Đã tải', chatMessages.length, 'tin nhắn từ server');
        }
    } catch (error) {
        console.error('Lỗi đọc tin nhắn từ server:', error);
        const cached = localStorage.getItem('chat_cache');
        if (cached) chatMessages = JSON.parse(cached);
    }
    return chatMessages;
}

// Gửi tin nhắn lên Google Sheet
async function sendToSheet(name, message) {
    const newMessage = {
        id: Date.now(),
        name: name,
        message: message,
        time: new Date().toISOString(),
        userId: getCurrentUserId()
    };
    
    try {
        const response = await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMessage)
        });
        console.log('📤 Đã gửi tin nhắn lên Google Sheet');
        
        // Thêm vào mảng local
        chatMessages.push(newMessage);
        if (chatMessages.length > 500) chatMessages = chatMessages.slice(-500);
        localStorage.setItem('chat_cache', JSON.stringify(chatMessages));
        
        return true;
    } catch (error) {
        console.error('Lỗi gửi Google Sheet:', error);
        return false;
    }
}

// Lấy ID người dùng
function getCurrentUserId() {
    let userId = localStorage.getItem('chat_user_id');
    if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        localStorage.setItem('chat_user_id', userId);
    }
    return userId;
}

// Tạo tên ngẫu nhiên
function generateRandomName() {
    const prefixes = ['🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵'];
    const names = ['Học Sinh', 'Sinh Viên', 'Học Tập', 'Chăm Chỉ', 'Thông Minh', 'Sáng Tạo', 'Năng Động', 'Vui Vẻ'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNum = Math.floor(Math.random() * 1000);
    return `${randomPrefix} ${randomName}${randomNum}`;
}

function getCurrentUserName() {
    let userName = localStorage.getItem('chat_user_name');
    if (!userName) {
        userName = generateRandomName();
        localStorage.setItem('chat_user_name', userName);
    }
    return userName;
}

function setCurrentUserName(name) {
    if (name && name.trim()) {
        localStorage.setItem('chat_user_name', name.trim());
    }
}

function randomizeUserName() {
    const newName = generateRandomName();
    setCurrentUserName(newName);
    return newName;
}

// Thêm tin nhắn
async function addChatMessage(name, message) {
    return await sendToSheet(name, message);
}

// Lấy tất cả tin nhắn
function getAllChatMessages() {
    return [...chatMessages].sort((a, b) => new Date(a.time) - new Date(b.time));
}

function deleteChatMessage(messageId, isAdmin = false) {
    if (!isAdmin) return false;
    const index = chatMessages.findIndex(m => m.id == messageId);
    if (index !== -1) {
        chatMessages.splice(index, 1);
        localStorage.setItem('chat_cache', JSON.stringify(chatMessages));
        return true;
    }
    return false;
}

function clearAllChatMessages() {
    chatMessages = [];
    localStorage.setItem('chat_cache', JSON.stringify(chatMessages));
}

function isAdminUser(userName) {
    const adminNames = ['Admin', 'admin', 'Quản trị', 'F9', 'Trịnh Văn Tú', 'Trinh Van Tu', 'ADMIN'];
    return adminNames.includes(userName);
}

// Lắng nghe tin nhắn mới (polling mỗi 2 giây)
function startSyncListener(callback) {
    setInterval(async () => {
        const oldCount = chatMessages.length;
        await fetchMessagesFromServer();
        if (chatMessages.length !== oldCount && callback) {
            callback(); // Gọi hàm làm mới giao diện
        }
    }, 2000);
}

window.chatAPI = {
    loadChatData,
    getCurrentUserId,
    getCurrentUserName,
    setCurrentUserName,
    randomizeUserName,
    generateRandomName,
    addChatMessage,
    deleteChatMessage,
    clearAllChatMessages,
    getAllChatMessages,
    isAdminUser,
    startSyncListener
};

console.log('✅ Chat database đã sẵn sàng (Google Sheets Mode)');