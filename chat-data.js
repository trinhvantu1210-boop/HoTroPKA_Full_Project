// ==================== CHAT DATABASE DÙNG DISCORD WEBHOOK ====================
// ⚠️ THAY WEBHOOK URL NÀY BẰNG CỦA BẠN ⚠️
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1502365239365206156/1iah3nqF_s1abCZDmegB1FmTqNLxboi7P3WMXYPPhVeZjZbbrRQEbYj952ZzeFHE12VJ";
const DISCORD_CHANNEL_ID = "1502365203365625896";

let chatMessages = [];
let lastMessageTime = 0;

// Tải tin nhắn từ cache localStorage
function loadChatData() {
    const saved = localStorage.getItem('discord_chat_cache');
    if (saved) {
        try {
            chatMessages = JSON.parse(saved);
            console.log('📥 Đã tải cache:', chatMessages.length, 'tin nhắn');
        } catch(e) {}
    }
    // Bắt đầu lắng nghe tin nhắn mới
    startPolling();
}

// Gửi tin nhắn lên Discord Webhook
async function sendToDiscord(name, message) {
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL.includes('YOUR_WEBHOOK_ID')) {
        console.warn('⚠️ Chưa cấu hình Discord Webhook!');
        alert('⚠️ Chat chưa được cấu hình! Vui lòng liên hệ Admin.');
        return false;
    }
    
    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `**${name}:** ${message}`,
                username: "💬 Chat Công Cộng",
                avatar_url: "https://cdn-icons-png.flaticon.com/512/5337/5337921.png"
            })
        });
        
        if (response.ok) {
            // Thêm tin nhắn vào cache local
            const newMessage = {
                id: Date.now(),
                name: name,
                message: message,
                time: new Date().toISOString(),
                userId: getCurrentUserId()
            };
            chatMessages.push(newMessage);
            if (chatMessages.length > 200) chatMessages = chatMessages.slice(-200);
            localStorage.setItem('discord_chat_cache', JSON.stringify(chatMessages));
            
            // Kích hoạt refresh
            localStorage.setItem('chat_new_message', Date.now().toString());
            return true;
        }
        return false;
    } catch (error) {
        console.error('Lỗi gửi Discord:', error);
        return false;
    }
}

// Lấy tin nhắn từ Discord Channel (qua webhook - chỉ đọc được tin nhắn mới nhất)
// GIẢI PHÁP: Dùng một channel riêng và lưu tin nhắn vào localStorage khi gửi
// Các thiết bị khác sẽ đọc từ localStorage (đã được sync qua storage event)

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

// Lấy tên người dùng
function getCurrentUserName() {
    let userName = localStorage.getItem('chat_user_name');
    if (!userName) {
        userName = generateRandomName();
        localStorage.setItem('chat_user_name', userName);
    }
    return userName;
}

// Cập nhật tên
function setCurrentUserName(name) {
    if (name && name.trim()) {
        localStorage.setItem('chat_user_name', name.trim());
    }
}

// Random tên mới
function randomizeUserName() {
    const newName = generateRandomName();
    setCurrentUserName(newName);
    return newName;
}

// Thêm tin nhắn (gửi lên Discord)
async function addChatMessage(name, message) {
    return await sendToDiscord(name, message);
}

// Lấy tất cả tin nhắn (từ cache)
function getAllChatMessages() {
    const saved = localStorage.getItem('discord_chat_cache');
    if (saved) {
        try {
            chatMessages = JSON.parse(saved);
        } catch(e) {}
    }
    return [...chatMessages].sort((a, b) => new Date(a.time) - new Date(b.time));
}

// Xóa tin nhắn (chỉ xóa cache cục bộ, không xóa trên Discord)
function deleteChatMessage(messageId, isAdmin = false) {
    if (!isAdmin) return false;
    
    const index = chatMessages.findIndex(m => m.id == messageId);
    if (index !== -1) {
        chatMessages.splice(index, 1);
        localStorage.setItem('discord_chat_cache', JSON.stringify(chatMessages));
        localStorage.setItem('chat_new_message', Date.now().toString());
        return true;
    }
    return false;
}

// Xóa tất cả
function clearAllChatMessages() {
    chatMessages = [];
    localStorage.setItem('discord_chat_cache', JSON.stringify(chatMessages));
    localStorage.setItem('chat_new_message', Date.now().toString());
}

// Kiểm tra admin
function isAdminUser(userName) {
    const adminNames = ['Admin', 'admin', 'Quản trị', 'F9', 'Trịnh Văn Tú', 'Trinh Van Tu', 'ADMIN'];
    return adminNames.includes(userName);
}

// Lắng nghe tin nhắn mới từ các thiết bị khác
function startSyncListener(callback) {
    // Lắng nghe sự kiện storage (từ các tab/thiết bị khác trên cùng domain)
    window.addEventListener('storage', (e) => {
        if (e.key === 'discord_chat_cache' || e.key === 'chat_new_message') {
            const newData = localStorage.getItem('discord_chat_cache');
            if (newData) {
                try {
                    const newMessages = JSON.parse(newData);
                    if (JSON.stringify(newMessages) !== JSON.stringify(chatMessages)) {
                        chatMessages = newMessages;
                        console.log('🔄 Đã đồng bộ từ thiết bị khác');
                        if (callback) callback();
                    }
                } catch(e) {}
            }
        }
    });
    
    // Polling mỗi 3 giây để kiểm tra tin nhắn mới
    setInterval(() => {
        const cached = localStorage.getItem('discord_chat_cache');
        if (cached) {
            try {
                const newMessages = JSON.parse(cached);
                if (JSON.stringify(newMessages) !== JSON.stringify(chatMessages)) {
                    chatMessages = newMessages;
                    console.log('🔄 Polling: Có tin nhắn mới');
                    if (callback) callback();
                }
            } catch(e) {}
        }
    }, 3000);
}

// Hàm polling (khởi tạo)
function startPolling() {
    startSyncListener(() => {
        // Callback khi có tin nhắn mới
        if (window.renderChatMessages) window.renderChatMessages();
    });
}

// Xuất API
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

console.log('✅ Chat database đã sẵn sàng (Discord Webhook Mode)');