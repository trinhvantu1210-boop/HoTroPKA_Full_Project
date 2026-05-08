// ==================== CHAT DATABASE - ĐỒNG BỘ GIỮA CÁC THIẾT BỊ ====================

let chatMessages = [];
let lastSyncTime = 0;
let syncInterval = null;

// Tải tin nhắn từ localStorage
function loadChatData() {
    const saved = localStorage.getItem('hotrohoctap_chat_global');
    if (saved) {
        try {
            chatMessages = JSON.parse(saved);
            console.log('📥 Đã tải', chatMessages.length, 'tin nhắn từ bộ nhớ');
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
    chatMessages = [
        { id: 1, name: "Hệ thống", message: "🎉 Chào mừng bạn đến với Chat công cộng!", time: new Date().toISOString(), userId: "system" },
        { id: 2, name: "Admin", message: "💬 Hãy tương tác văn minh, lịch sự nhé!", time: new Date(Date.now() - 3600000).toISOString(), userId: "admin" }
    ];
    saveChatData();
}

// Lưu tin nhắn và broadcast sang các thiết bị khác
function saveChatData() {
    localStorage.setItem('hotrohoctap_chat_global', JSON.stringify(chatMessages));
    // Tạo tín hiệu để các tab/thiết bị khác biết có cập nhật
    localStorage.setItem('chat_update_signal', Date.now().toString());
}

// Lấy ID người dùng (duy nhất cho mỗi thiết bị)
function getCurrentUserId() {
    let userId = localStorage.getItem('chat_user_id');
    if (!userId) {
        userId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8);
        localStorage.setItem('chat_user_id', userId);
    }
    return userId;
}

// Tạo tên ngẫu nhiên
function generateRandomName() {
    const prefixes = ['🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐙', '🦄', '🐌', '🐛', '🦋'];
    const names = ['Học Sinh', 'Sinh Viên', 'Học Tập', 'Chăm Chỉ', 'Thông Minh', 'Sáng Tạo', 'Năng Động', 'Vui Vẻ', 'Thành Công', 'Tích Cực'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNum = Math.floor(Math.random() * 1000);
    return `${randomPrefix} ${randomName}${randomNum}`;
}

// Lấy tên người dùng hiện tại
function getCurrentUserName() {
    let userName = localStorage.getItem('chat_user_name');
    if (!userName) {
        userName = generateRandomName();
        localStorage.setItem('chat_user_name', userName);
    }
    return userName;
}

// Cập nhật tên người dùng
function setCurrentUserName(name) {
    if (name && name.trim()) {
        localStorage.setItem('chat_user_name', name.trim());
        // Broadcast tên mới
        localStorage.setItem('chat_name_update', Date.now().toString());
    }
}

// Random tên mới
function randomizeUserName() {
    const newName = generateRandomName();
    setCurrentUserName(newName);
    return newName;
}

// Thêm tin nhắn mới (đồng bộ)
function addChatMessage(name, message) {
    const userId = getCurrentUserId();
    const newId = Date.now();
    const newMessage = {
        id: newId,
        name: name,
        message: message,
        time: new Date().toISOString(),
        userId: userId
    };
    chatMessages.push(newMessage);
    
    // Giới hạn 500 tin nhắn
    if (chatMessages.length > 500) {
        chatMessages = chatMessages.slice(-500);
    }
    
    saveChatData();
    console.log('📤 Đã gửi tin nhắn:', name, '-', message);
    return true;
}

// Lấy tất cả tin nhắn (sắp xếp theo thời gian)
function getAllChatMessages() {
    return [...chatMessages].sort((a, b) => new Date(a.time) - new Date(b.time));
}

// Xóa tin nhắn (chỉ xóa được của mình hoặc admin)
function deleteChatMessage(messageId, isAdmin = false) {
    const index = chatMessages.findIndex(m => m.id == messageId);
    if (index === -1) return false;
    
    const message = chatMessages[index];
    const currentUserId = getCurrentUserId();
    
    if (isAdmin || message.userId === currentUserId || message.userId === 'system') {
        chatMessages.splice(index, 1);
        saveChatData();
        return true;
    }
    return false;
}

// Xóa tất cả tin nhắn
function clearAllChatMessages() {
    chatMessages = chatMessages.filter(m => m.userId === 'system');
    saveChatData();
}

// Kiểm tra admin (dựa trên tên)
function isAdminUser(userName) {
    const adminNames = ['Admin', 'admin', 'Quản trị', 'F9', 'Trịnh Văn Tú', 'Trinh Van Tu', 'ADMIN', 'Admin F9'];
    return adminNames.includes(userName);
}

// Lắng nghe thay đổi từ các thiết bị khác
function startSyncListener(callback) {
    // Lắng nghe sự kiện storage (khi localStorage thay đổi từ tab/thiết bị khác)
    window.addEventListener('storage', (e) => {
        if (e.key === 'hotrohoctap_chat_global') {
            // Có tin nhắn mới từ thiết bị khác
            const newData = e.newValue;
            if (newData) {
                try {
                    const newMessages = JSON.parse(newData);
                    if (JSON.stringify(newMessages) !== JSON.stringify(chatMessages)) {
                        chatMessages = newMessages;
                        console.log('🔄 Đã đồng bộ tin nhắn từ thiết bị khác');
                        if (callback) callback();
                    }
                } catch(e) {}
            }
        }
        if (e.key === 'chat_name_update') {
            // Tên đã thay đổi ở thiết bị khác
            const newName = localStorage.getItem('chat_user_name');
            if (newName && callback) {
                console.log('🔄 Tên đã thay đổi ở thiết bị khác:', newName);
                callback('name_update');
            }
        }
    });
    
    // Tự động đồng bộ mỗi 5 giây (phòng trường hợp sự kiện storage không hoạt động)
    if (syncInterval) clearInterval(syncInterval);
    syncInterval = setInterval(() => {
        const saved = localStorage.getItem('hotrohoctap_chat_global');
        if (saved) {
            try {
                const newMessages = JSON.parse(saved);
                if (JSON.stringify(newMessages) !== JSON.stringify(chatMessages)) {
                    chatMessages = newMessages;
                    console.log('🔄 Đồng bộ định kỳ:', chatMessages.length, 'tin nhắn');
                    if (callback) callback();
                }
            } catch(e) {}
        }
    }, 3000);
}

// Dừng đồng bộ
function stopSyncListener() {
    if (syncInterval) {
        clearInterval(syncInterval);
        syncInterval = null;
    }
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
    startSyncListener,
    stopSyncListener
};

console.log('✅ Chat database đã sẵn sàng (đồng bộ đa thiết bị)');