// ==================== CHAT DATABASE ====================

let chatDatabase = {
    messages: [],
    lastId: 0
};

// Tải dữ liệu từ localStorage
function loadChatData() {
    const saved = localStorage.getItem('hotrohoctap_chat_db');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            chatDatabase.messages = data.messages || [];
            chatDatabase.lastId = data.lastId || 0;
        } catch(e) {
            console.error('Lỗi đọc chat:', e);
            initSampleMessages();
        }
    } else {
        initSampleMessages();
    }
}

// Khởi tạo tin nhắn mẫu
function initSampleMessages() {
    chatDatabase.messages = [
        { id: 1, name: "Hệ thống", message: "🎉 Chào mừng bạn đến với Chat công cộng!", time: new Date().toISOString(), userId: "system" },
        { id: 2, name: "Admin", message: "💬 Xin Chào Mình Là Trịnh Văn Tú Admin Của Trang Web Hãy Trò Truyện Vui Vẻ Và Văn Minh Lịch Sự Nhé!", time: new Date(Date.now() - 3600000).toISOString(), userId: "admin" }
    ];
    chatDatabase.lastId = 2;
    saveChatData();
}

// Lưu dữ liệu
function saveChatData() {
    localStorage.setItem('hotrohoctap_chat_db', JSON.stringify({
        messages: chatDatabase.messages,
        lastId: chatDatabase.lastId
    }));
}

// Lấy ID người dùng hiện tại
function getCurrentUserId() {
    let userId = sessionStorage.getItem('chat_user_id');
    if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        sessionStorage.setItem('chat_user_id', userId);
    }
    return userId;
}

// Tạo tên ngẫu nhiên
function generateRandomName() {
    const prefixes = ['🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐴', '🦄', '🐌', '🐛', '🐝', '🐞'];
    const names = ['Học Sinh', 'Sinh Viên', 'Học Tập', 'Chăm Chỉ', 'Thông Minh', 'Sáng Tạo', 'Năng Động', 'Vui Vẻ', 'Yêu Đời', 'Thành Công'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNum = Math.floor(Math.random() * 1000);
    return `${randomPrefix} ${randomName}${randomNum}`;
}

// Lấy tên người dùng hiện tại (tạo random nếu chưa có)
function getCurrentUserName() {
    let userName = sessionStorage.getItem('chat_user_name');
    if (!userName) {
        userName = generateRandomName();
        sessionStorage.setItem('chat_user_name', userName);
    }
    return userName;
}

// Cập nhật tên người dùng
function setCurrentUserName(name) {
    if (name && name.trim()) {
        sessionStorage.setItem('chat_user_name', name.trim());
    }
}

// Đổi tên ngẫu nhiên
function randomizeUserName() {
    const newName = generateRandomName();
    setCurrentUserName(newName);
    return newName;
}

// Thêm tin nhắn mới
function addChatMessage(name, message) {
    const userId = getCurrentUserId();
    chatDatabase.lastId++;
    const newMessage = {
        id: chatDatabase.lastId,
        name: name,
        message: message,
        time: new Date().toISOString(),
        userId: userId
    };
    chatDatabase.messages.push(newMessage);
    
    // Giới hạn 200 tin nhắn
    if (chatDatabase.messages.length > 200) {
        chatDatabase.messages = chatDatabase.messages.slice(-200);
    }
    
    saveChatData();
    return newMessage;
}

// Xóa tin nhắn
function deleteChatMessage(messageId, isAdmin = false) {
    const messageIndex = chatDatabase.messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) return false;
    
    const message = chatDatabase.messages[messageIndex];
    const currentUserId = getCurrentUserId();
    
    // Nếu là admin HOẶC chủ nhân tin nhắn
    if (isAdmin || message.userId === currentUserId || message.userId === 'system') {
        chatDatabase.messages.splice(messageIndex, 1);
        saveChatData();
        return true;
    }
    return false;
}

// Xóa tất cả tin nhắn
function clearAllChatMessages() {
    chatDatabase.messages = chatDatabase.messages.filter(m => m.userId === 'system');
    saveChatData();
}

// Lấy tất cả tin nhắn
function getAllChatMessages() {
    return chatDatabase.messages;
}

// Kiểm tra admin
function isAdminUser(userName) {
    const adminNames = ['Admin', 'admin', 'Quản trị', 'Trịnh Văn Tú', 'Trinh Van Tu', 'ADMIN'];
    return adminNames.includes(userName);
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
    isAdminUser
};

console.log('✅ Chat database đã sẵn sàng');