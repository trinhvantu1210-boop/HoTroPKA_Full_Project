// ==================== DATABASE ĐẠI HỌC VIỆT NAM ====================
// Cấu trúc: mã trường, tên trường, khu vực, các ngành

const universityDatabase = {
    // ========== KHU VỰC MIỀN BẮC ==========
    // Đại học Bách khoa Hà Nội
    "BKU": {
        name: "Đại học Bách khoa Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://hust.edu.vn",
        admissionYear: 2025,
        subjects: {
            "IT1": { name: "Khoa học máy tính (IT1)", code: "7480101", combo: "A00", target: 29.19, type: "THPT" },
            "IT2": { name: "Kỹ thuật máy tính (IT2)", code: "7480201", combo: "A00", target: 28.83, type: "THPT" },
            "IT-E10": { name: "KH dữ liệu và Trí tuệ nhân tạo", code: "7480105", combo: "A00", target: 29.39, type: "THPT" },
            "EE1": { name: "Kỹ thuật điện", code: "7520201", combo: "A00", target: 27.50, type: "THPT" },
            "EE2": { name: "KT Điều khiển - Tự động hóa", code: "7520216", combo: "A00", target: 28.48, type: "THPT" },
            "ME1": { name: "Kỹ thuật cơ khí", code: "7520114", combo: "A00", target: 27.20, type: "THPT" },
            "ME2": { name: "Cơ điện tử", code: "7520114", combo: "A00", target: 26.80, type: "THPT" },
            "CE1": { name: "Kỹ thuật xây dựng", code: "7580201", combo: "A00", target: 25.50, type: "THPT" },
            "MT1": { name: "Kỹ thuật môi trường", code: "7520320", combo: "B00", target: 24.80, type: "THPT" }
        }
    },
    
    // Đại học Kinh tế Quốc dân
    "NEU": {
        name: "Đại học Kinh tế Quốc dân",
        region: "mb",
        location: "Hà Nội",
        website: "https://neu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KTH": { name: "Kinh tế học", code: "7310101", combo: "A01", target: 27.50, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01", target: 28.00, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01", target: 27.20, type: "THPT" },
            "KT": { name: "Kế toán", code: "7340301", combo: "A01", target: 26.50, type: "THPT" },
            "HTTT": { name: "Hệ thống thông tin quản lý", code: "7340405", combo: "A00", target: 26.80, type: "THPT" },
            "KTDN": { name: "Kinh tế đầu tư", code: "7310104", combo: "A01", target: 26.20, type: "THPT" }
        }
    },
    
    // Đại học Ngoại thương
    "FTU": {
        name: "Đại học Ngoại thương",
        region: "mb",
        location: "Hà Nội",
        website: "https://ftu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KDTQT": { name: "Kinh doanh quốc tế", code: "7340121", combo: "A01", target: 28.20, type: "THPT" },
            "KTTV": { name: "Kinh tế đối ngoại", code: "7310106", combo: "D01", target: 27.80, type: "THPT" },
            "TAKT": { name: "Tiếng Anh thương mại", code: "7220201", combo: "D01", target: 27.00, type: "THPT" },
            "TCNHQT": { name: "Tài chính quốc tế", code: "7340210", combo: "A01", target: 27.50, type: "THPT" }
        }
    },
    
    // Đại học Y Hà Nội
    "YHN": {
        name: "Đại học Y Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://hmu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "YK": { name: "Y khoa", code: "7720101", combo: "B00", target: 29.50, type: "THPT" },
            "RHMT": { name: "Răng hàm mặt", code: "7720501", combo: "B00", target: 28.80, type: "THPT" },
            "DH": { name: "Dược học", code: "7720201", combo: "B00", target: 27.50, type: "THPT" },
            "YHCT": { name: "Y học cổ truyền", code: "7720115", combo: "B00", target: 25.80, type: "THPT" }
        }
    },
    
    // Đại học Quốc gia Hà Nội - (các trường thành viên)
    "VNU-UET": {
        name: "Trường ĐH Công nghệ - ĐHQGHN",
        region: "mb",
        location: "Hà Nội",
        website: "https://uet.vnu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KHMT": { name: "Khoa học máy tính", code: "7480101", combo: "A00", target: 28.50, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 27.80, type: "THPT" },
            "KTDT": { name: "Kỹ thuật điện tử", code: "7520207", combo: "A00", target: 26.50, type: "THPT" }
        }
    },
    
    "VNU-UEB": {
        name: "Trường ĐH Kinh tế - ĐHQGHN",
        region: "mb",
        location: "Hà Nội",
        website: "https://ueb.vnu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KTH": { name: "Kinh tế học", code: "7310101", combo: "A01", target: 27.20, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01", target: 27.00, type: "THPT" }
        }
    },
    
    "VNU-HUS": {
        name: "Trường ĐH Khoa học Tự nhiên - ĐHQGHN",
        region: "mb",
        location: "Hà Nội",
        website: "https://hus.vnu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "TOAN": { name: "Toán học", code: "7460101", combo: "A00", target: 26.50, type: "THPT" },
            "HOA": { name: "Hóa học", code: "7440112", combo: "A00", target: 26.00, type: "THPT" },
            "SINH": { name: "Sinh học", code: "7420101", combo: "B00", target: 25.50, type: "THPT" }
        }
    },
    
    // Đại học Sư phạm Hà Nội
    "HNUE": {
        name: "Đại học Sư phạm Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://hnue.edu.vn",
        admissionYear: 2025,
        subjects: {
            "SPTOAN": { name: "Sư phạm Toán", code: "7140209", combo: "A00", target: 27.50, type: "THPT" },
            "SPVAN": { name: "Sư phạm Ngữ văn", code: "7140217", combo: "C00", target: 28.00, type: "THPT" },
            "SPANH": { name: "Sư phạm Tiếng Anh", code: "7140231", combo: "D01", target: 28.50, type: "THPT" }
        }
    },
    
    // Đại học Xây dựng Hà Nội
    "HUCE": {
        name: "Đại học Xây dựng Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://huce.edu.vn",
        admissionYear: 2025,
        subjects: {
            "XD": { name: "Kỹ thuật xây dựng", code: "7580201", combo: "A00", target: 25.00, type: "THPT" },
            "KTXD": { name: "Kinh tế xây dựng", code: "7580101", combo: "A01", target: 24.50, type: "THPT" }
        }
    },
    
    // Đại học Giao thông Vận tải
    "UTC": {
        name: "Đại học Giao thông Vận tải",
        region: "mb",
        location: "Hà Nội",
        website: "https://utc.edu.vn",
        admissionYear: 2025,
        subjects: {
            "XDCD": { name: "Xây dựng cầu đường", code: "7580205", combo: "A00", target: 24.80, type: "THPT" },
            "KTGT": { name: "Kỹ thuật giao thông", code: "7520215", combo: "A00", target: 24.50, type: "THPT" }
        }
    },
    
    // Học viện Tài chính
    "AOF": {
        name: "Học viện Tài chính",
        region: "mb",
        location: "Hà Nội",
        website: "https://hvtc.edu.vn",
        admissionYear: 2025,
        subjects: {
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01", target: 27.00, type: "THPT" },
            "KT": { name: "Kế toán", code: "7340301", combo: "A01", target: 26.50, type: "THPT" }
        }
    },
    
    // ========== KHU VỰC MIỀN TRUNG ==========
    // Đại học Đà Nẵng - Đại học Bách khoa
    "DUT-UD": {
        name: "ĐH Bách khoa - ĐH Đà Nẵng",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://dut.udn.vn",
        admissionYear: 2025,
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 26.80, type: "THPT" },
            "KTDT": { name: "Kỹ thuật điện", code: "7520201", combo: "A00", target: 25.50, type: "THPT" },
            "XD": { name: "Xây dựng", code: "7580201", combo: "A00", target: 24.80, type: "THPT" }
        }
    },
    
    // Đại học Kinh tế - ĐH Đà Nẵng
    "DUE-UD": {
        name: "ĐH Kinh tế - ĐH Đà Nẵng",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://due.udn.vn",
        admissionYear: 2025,
        subjects: {
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01", target: 26.00, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01", target: 26.50, type: "THPT" }
        }
    },
    
    // Đại học Sư phạm - ĐH Đà Nẵng
    "DUE-UD": {
        name: "ĐH Sư phạm - ĐH Đà Nẵng",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://ued.udn.vn",
        admissionYear: 2025,
        subjects: {
            "SPTOAN": { name: "Sư phạm Toán", code: "7140209", combo: "A00", target: 26.00, type: "THPT" },
            "SPVAN": { name: "Sư phạm Văn", code: "7140217", combo: "C00", target: 26.50, type: "THPT" }
        }
    },
    
    // Đại học Huế
    "HUE": {
        name: "Đại học Huế",
        region: "mt",
        location: "Thừa Thiên Huế",
        website: "https://hueuni.edu.vn",
        admissionYear: 2025,
        subjects: {
            "YH": { name: "Y khoa", code: "7720101", combo: "B00", target: 27.00, type: "THPT" },
            "DH": { name: "Dược học", code: "7720201", combo: "B00", target: 25.50, type: "THPT" }
        }
    },
    
    // Đại học Vinh
    "VINH": {
        name: "Đại học Vinh",
        region: "mt",
        location: "Nghệ An",
        website: "https://vinhuni.edu.vn",
        admissionYear: 2025,
        subjects: {
            "SPTOAN": { name: "Sư phạm Toán", code: "7140209", combo: "A00", target: 25.50, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 24.80, type: "THPT" }
        }
    },
    
    // ========== KHU VỰC MIỀN NAM ==========
    // Đại học Bách khoa TP.HCM
    "HCMUT": {
        name: "Đại học Bách khoa TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://hcmut.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KHMT": { name: "Khoa học máy tính", code: "7480101", combo: "A00", target: 28.20, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 27.50, type: "THPT" },
            "KTDT": { name: "Kỹ thuật điện", code: "7520201", combo: "A00", target: 26.80, type: "THPT" },
            "CK": { name: "Cơ khí", code: "7520114", combo: "A00", target: 26.00, type: "THPT" }
        }
    },
    
    // Đại học Kinh tế TP.HCM
    "UEH": {
        name: "Đại học Kinh tế TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://ueh.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KTH": { name: "Kinh tế học", code: "7310101", combo: "A01", target: 27.00, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01", target: 27.50, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01", target: 26.80, type: "THPT" },
            "KT": { name: "Kế toán", code: "7340301", combo: "A01", target: 26.00, type: "THPT" }
        }
    },
    
    // Đại học Quốc gia TP.HCM - Trường ĐH Công nghệ Thông tin
    "UIT": {
        name: "ĐH Công nghệ Thông tin - ĐHQG TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://uit.edu.vn",
        admissionYear: 2025,
        subjects: {
            "KHMT": { name: "Khoa học máy tính", code: "7480101", combo: "A00", target: 28.00, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 27.50, type: "THPT" },
            "KHDL": { name: "Khoa học dữ liệu", code: "7480108", combo: "A00", target: 27.80, type: "THPT" }
        }
    },
    
    // Đại học Y Dược TP.HCM
    "UMP": {
        name: "Đại học Y Dược TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://ump.edu.vn",
        admissionYear: 2025,
        subjects: {
            "YK": { name: "Y khoa", code: "7720101", combo: "B00", target: 29.00, type: "THPT" },
            "RHMT": { name: "Răng hàm mặt", code: "7720501", combo: "B00", target: 28.50, type: "THPT" },
            "DH": { name: "Dược học", code: "7720201", combo: "B00", target: 27.50, type: "THPT" }
        }
    },
    
    // Đại học Tôn Đức Thắng
    "TDTU": {
        name: "Đại học Tôn Đức Thắng",
        region: "mn",
        location: "TP.HCM",
        website: "https://tdtu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 26.50, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01", target: 25.80, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01", target: 26.00, type: "THPT" }
        }
    },
    
    // Đại học Cần Thơ
    "CTU": {
        name: "Đại học Cần Thơ",
        region: "mn",
        location: "Cần Thơ",
        website: "https://ctu.edu.vn",
        admissionYear: 2025,
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 25.50, type: "THPT" },
            "NN": { name: "Nông nghiệp", code: "7620115", combo: "B00", target: 23.00, type: "THPT" },
            "YT": { name: "Y tế công cộng", code: "7720701", combo: "B00", target: 24.50, type: "THPT" }
        }
    },
    
    // Đại học Duy Tân (Đà Nẵng)
    "DTU": {
        name: "Đại học Duy Tân",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://duytan.edu.vn",
        admissionYear: 2025,
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 24.50, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01", target: 23.80, type: "THPT" },
            "YD": { name: "Y dược", code: "7720115", combo: "B00", target: 24.00, type: "THPT" }
        }
    },
    
    // Đại học FPT
    "FPTU": {
        name: "Đại học FPT",
        region: "mn",
        location: "TP.HCM/Hà Nội/Đà Nẵng",
        website: "https://fpt.edu.vn",
        admissionYear: 2025,
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target: 24.00, type: "THPT" },
            "SE": { name: "Kỹ thuật phần mềm", code: "7480103", combo: "A00", target: 24.50, type: "THPT" },
            "AI": { name: "Trí tuệ nhân tạo", code: "7480107", combo: "A00", target: 25.00, type: "THPT" }
        }
    }
};

// Export ra global
window.universityDatabase = universityDatabase;

console.log("✅ Đã tải database", Object.keys(universityDatabase).length, "trường đại học");