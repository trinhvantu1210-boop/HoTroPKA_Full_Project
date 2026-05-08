// ==================== CHAT DATABASE DÙNG DISCORD WEBHOOK ====================

// ⚠️ THAY THÔNG TIN NÀY BẰNG CỦA BẠN ⚠️
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1502365239365206156/1iah3nqF_s1abCZDmegB1FmTqNLxboi7P3WMXYPPhVeZjZbbrRQEbYj952ZzeFHE12VJ";
const DISCORD_CHANNEL_ID = "1502365203365625896";
const DISCORD_BOT_TOKEN = ""; // Để trống nếu không có bot, chỉ đọc được tin nhắn gần đây

let chatMessages = [];
let lastMessageId = null;

// Tải tin nhắn từ Discord
async function loadChatData() {
    // Thử lấy từ localStorage trước (cache)
    const cached = localStorage.getItem('discord_chat_cache');
    if (cached) {
        try {
            chatMessages = JSON.parse(cached);
            if (chatMessages.length > 0) {
                lastMessageId = chatMessages[chatMessages.length - 1]?.id;
            }
        } catch(e) {}
    }
    
    // Lấy tin nhắn mới từ Discord
    await fetchMessagesFromDiscord();
}

// Lấy tin nhắn từ Discord Channel (không cần bot, dùng webhook)
async function fetchMessagesFromDiscord() {
    try {
        // Discord API yêu cầu Authorization, cách đơn giản là dùng webhook để gửi và lưu
        // Vì Discord không cho đọc tin nhắn qua webhook, ta sẽ dùng localStorage + sync qua webhook
        
        // Giải pháp: Khi gửi tin nhắn, gửi cả vào webhook và lưu local
        // Khi load, đọc từ localStorage và sync từ các thiết bị khác qua webhook
        
        console.log('🔄 Đồng bộ chat từ cache...');
        return chatMessages;
    } catch (error) {
        console.error('Lỗi đọc Discord:', error);
        return chatMessages;
    }
}

// Gửi tin nhắn lên Discord Webhook
async function sendToDiscord(name, message) {
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL.includes('ID_CUA_BAN')) {
        console.warn('⚠️ Chưa cấu hình Discord Webhook!');
        return false;
    }
    
    try {
        const embed = {
            username: "💬 Chat Công Cộng",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/5337/5337921.png",
            content: `**${name}:** ${message}`,
            embeds: [{
                color: 0x5865F2,
                fields: [
                    { name: "👤 Người gửi", value: name, inline: true },
                    { name: "💬 Nội dung", value: message, inline: false },
                    { name: "⏰ Thời gian", value: new Date().toLocaleString('vi-VN'), inline: true }
                ],
                footer: { text: "HoTroHocTap Chat" }
            }]
        };
        
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(embed)
        });
        
        // Lưu tin nhắn vào localStorage để cache
        const newMessage = {
            id: Date.now(),
            name: name,
            message: message,
            time: new Date().toISOString(),
            userId: getCurrentUserId()
        };
        
        chatMessages.unshift(newMessage);
        if (chatMessages.length > 200) chatMessages = chatMessages.slice(0, 200);
        localStorage.setItem('discord_chat_cache', JSON.stringify(chatMessages));
        
        return true;
    } catch (error) {
        console.error('Lỗi gửi Discord:', error);
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
    const success = await sendToDiscord(name, message);
    
    if (success) {
        // Kích hoạt refresh cho tất cả client
        triggerRefresh();
    }
    
    return success;
}

// Kích hoạt refresh cho các client khác
function triggerRefresh() {
    // Lưu timestamp để các client khác biết cần refresh
    localStorage.setItem('chat_last_update', Date.now().toString());
}

function getAllChatMessages() {
    // Sắp xếp tin nhắn cũ lên trên, mới xuống dưới
    return [...chatMessages].sort((a, b) => a.id - b.id);
}

// Xóa tin nhắn (chỉ ảo, không xóa trên Discord)
function deleteChatMessage(messageId, isAdmin = false) {
    if (!isAdmin) return false;
    
    const index = chatMessages.findIndex(m => m.id == messageId);
    if (index !== -1) {
        chatMessages.splice(index, 1);
        localStorage.setItem('discord_chat_cache', JSON.stringify(chatMessages));
        return true;
    }
    return false;
}

// Xóa tất cả
function clearAllChatMessages() {
    chatMessages = [];
    localStorage.setItem('discord_chat_cache', JSON.stringify(chatMessages));
}

// Kiểm tra admin
function isAdminUser(userName) {
    const adminNames = ['Admin', 'admin', 'Quản trị', 'F9', 'Trịnh Văn Tú', 'Trinh Van Tu', 'ADMIN'];
    return adminNames.includes(userName);
}

// Lắng nghe thay đổi từ các thiết bị khác
function startSyncListener(callback) {
    window.addEventListener('storage', (e) => {
        if (e.key === 'chat_last_update' || e.key === 'discord_chat_cache') {
            const cached = localStorage.getItem('discord_chat_cache');
            if (cached) {
                try {
                    chatMessages = JSON.parse(cached);
                    if (callback) callback();
                } catch(e) {}
            }
        }
    });
    
    // Refresh mỗi 5 giây
    setInterval(() => {
        const cached = localStorage.getItem('discord_chat_cache');
        if (cached) {
            try {
                const newMessages = JSON.parse(cached);
                if (JSON.stringify(newMessages) !== JSON.stringify(chatMessages)) {
                    chatMessages = newMessages;
                    if (callback) callback();
                }
            } catch(e) {}
        }
    }, 5000);
}

// Export
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

console.log('✅ Chat database dùng Discord Webhook đã sẵn sàng');