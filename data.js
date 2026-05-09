// ==================== DATABASE ĐẠI HỌC VIỆT NAM ====================
// Cấu trúc: mã trường, tên trường, khu vực, các ngành với điểm chuẩn 2023,2024,2025

const universityDatabase = {
    // ========== KHU VỰC MIỀN BẮC ==========
    // Đại học Bách khoa Hà Nội
    "BKU": {
        name: "Đại học Bách khoa Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://hust.edu.vn",
        subjects: {
            // ===== CNTT =====
            "IT1": { name: "CNTT: Khoa học Máy tính", code: "7480101", combo: "A00;A01", target2025: 29.19, target2024: 28.95, target2023: 28.50, type: "THPT" },
            "IT2": { name: "CNTT: Kỹ thuật Máy tính", code: "7480201", combo: "A00;A01", target2025: 28.83, target2024: 28.60, target2023: 28.20, type: "THPT" },
            "IT-E10": { name: "Khoa học dữ liệu và Trí tuệ nhân tạo", code: "7480108", combo: "A00;A01", target2025: 29.39, target2024: 29.10, target2023: 28.80, type: "THPT" },
            "IT-E15": { name: "An toàn không gian số - Cyber Security", code: "7480202", combo: "A00;A01", target2025: 28.69, target2024: 28.40, target2023: 28.00, type: "THPT" },
            "IT-E7": { name: "CNTT Global ICT", code: "7480201", combo: "A00;A01", target2025: 28.66, target2024: 28.35, target2023: 27.90, type: "THPT" },
            
            // ===== ĐIỆN - ĐIỆN TỬ =====
            "EE2": { name: "Kỹ thuật Điều khiển - Tự động hoá", code: "7520216", combo: "A00;A01", target2025: 28.48, target2024: 28.20, target2023: 27.80, type: "THPT" },
            "EE1": { name: "Kỹ thuật Điện", code: "7520201", combo: "A00;A01", target2025: 27.55, target2024: 27.30, target2023: 26.90, type: "THPT" },
            "ET1": { name: "Kỹ thuật Điện tử - Viễn thông", code: "7520207", combo: "A00;A01", target2025: 28.07, target2024: 27.80, target2023: 27.40, type: "THPT" },
            
            // ===== CƠ KHÍ =====
            "ME1": { name: "Kỹ thuật Cơ điện tử", code: "7520114", combo: "A00;A01", target2025: 27.90, target2024: 27.60, target2023: 27.20, type: "THPT" },
            "ME2": { name: "Kỹ thuật Cơ khí", code: "7520103", combo: "A00;A01", target2025: 26.62, target2024: 26.40, target2023: 26.00, type: "THPT" },
            "TE1": { name: "Kỹ thuật Ô tô", code: "7520130", combo: "A00;A01", target2025: 27.03, target2024: 26.80, target2023: 26.40, type: "THPT" },
            
            // ===== TOÁN - TIN =====
            "MI1": { name: "Toán - Tin", code: "7460117", combo: "A00;A01", target2025: 27.80, target2024: 27.50, target2023: 27.10, type: "THPT" },
            "MI2": { name: "Hệ thống thông tin quản lý", code: "7340405", combo: "A00;A01", target2025: 27.72, target2024: 27.40, target2023: 27.00, type: "THPT" },
            
            // ===== VẬT LÝ =====
            "PH1": { name: "Vật lý kỹ thuật", code: "7520401", combo: "A00;A01", target2025: 26.41, target2024: 26.20, target2023: 25.80, type: "THPT" },
            "MS2": { name: "Kỹ thuật Vi điện tử và Công nghệ nano", code: "7520207", combo: "A00;A01", target2025: 28.25, target2024: 28.00, target2023: 27.60, type: "THPT" },
            
            // ===== HÓA =====
            "CH1": { name: "Kỹ thuật Hoá học", code: "7520301", combo: "A00;B00", target2025: 24.05, target2024: 23.80, target2023: 23.40, type: "THPT" },
            
            // ===== KINH TẾ =====
            "EM3": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 24.80, target2024: 24.50, target2023: 24.10, type: "THPT" },
            "EM5": { name: "Tài chính - Ngân hàng", code: "7340201", combo: "A01;D01", target2025: 24.80, target2024: 24.50, target2023: 24.10, type: "THPT" },
            
            // ===== NGOẠI NGỮ =====
            "FL1": { name: "Tiếng Anh KHKT và Công nghệ", code: "7220201", combo: "D01", target2025: 24.80, target2024: 24.50, target2023: 24.10, type: "THPT" },
            
            // ===== MÔI TRƯỜNG =====
            "EV1": { name: "Kỹ thuật Môi trường", code: "7520320", combo: "A00;B00", target2025: 22.22, target2024: 22.00, target2023: 21.60, type: "THPT" }
        }
    },
    
    // Đại học Kinh tế Quốc dân
    "NEU": {
        name: "Đại học Kinh tế Quốc dân",
        region: "mb",
        location: "Hà Nội",
        website: "https://neu.edu.vn",
        subjects: {
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01;D01", target2025: 28.00, target2024: 27.80, target2023: 27.50, type: "THPT" },
            "KTH": { name: "Kinh tế học", code: "7310101", combo: "A01;D01", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 27.20, target2024: 27.00, target2023: 26.70, type: "THPT" },
            "KT": { name: "Kế toán", code: "7340301", combo: "A01;D01", target2025: 26.50, target2024: 26.30, target2023: 26.00, type: "THPT" },
            "HTTT": { name: "Hệ thống thông tin quản lý", code: "7340405", combo: "A00;A01", target2025: 26.80, target2024: 26.60, target2023: 26.30, type: "THPT" },
            "KTDN": { name: "Kinh tế đầu tư", code: "7310104", combo: "A01;D01", target2025: 26.20, target2024: 26.00, target2023: 25.70, type: "THPT" }
        }
    },
    
    // Đại học Ngoại thương
    "FTU": {
        name: "Đại học Ngoại thương",
        region: "mb",
        location: "Hà Nội",
        website: "https://ftu.edu.vn",
        subjects: {
            "KDTQT": { name: "Kinh doanh quốc tế", code: "7340121", combo: "A01;D01", target2025: 28.20, target2024: 28.00, target2023: 27.70, type: "THPT" },
            "KTTV": { name: "Kinh tế đối ngoại", code: "7310106", combo: "D01", target2025: 27.80, target2024: 27.60, target2023: 27.30, type: "THPT" },
            "TAKT": { name: "Tiếng Anh thương mại", code: "7220201", combo: "D01", target2025: 27.00, target2024: 26.80, target2023: 26.50, type: "THPT" },
            "TCNHQT": { name: "Tài chính quốc tế", code: "7340210", combo: "A01;D01", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" }
        }
    },
    
    // Đại học Y Hà Nội
    "YHN": {
        name: "Đại học Y Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://hmu.edu.vn",
        subjects: {
            "YK": { name: "Y khoa", code: "7720101", combo: "B00", target2025: 29.50, target2024: 29.30, target2023: 29.00, type: "THPT" },
            "RHMT": { name: "Răng hàm mặt", code: "7720501", combo: "B00", target2025: 28.80, target2024: 28.60, target2023: 28.30, type: "THPT" },
            "DH": { name: "Dược học", code: "7720201", combo: "B00", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" }
        }
    },
    
    // Đại học Quốc gia Hà Nội - Công nghệ
    "VNU-UET": {
        name: "Trường ĐH Công nghệ - ĐHQGHN",
        region: "mb",
        location: "Hà Nội",
        website: "https://uet.vnu.edu.vn",
        subjects: {
            "KHMT": { name: "Khoa học máy tính", code: "7480101", combo: "A00;A01", target2025: 28.50, target2024: 28.30, target2023: 28.00, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00;A01", target2025: 27.80, target2024: 27.60, target2023: 27.30, type: "THPT" },
            "KTDT": { name: "Kỹ thuật điện tử", code: "7520207", combo: "A00;A01", target2025: 26.50, target2024: 26.30, target2023: 26.00, type: "THPT" }
        }
    },
    
    // Đại học Quốc gia Hà Nội - Kinh tế
    "VNU-UEB": {
        name: "Trường ĐH Kinh tế - ĐHQGHN",
        region: "mb",
        location: "Hà Nội",
        website: "https://ueb.vnu.edu.vn",
        subjects: {
            "KTH": { name: "Kinh tế học", code: "7310101", combo: "A01;D01", target2025: 27.20, target2024: 27.00, target2023: 26.70, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 27.00, target2024: 26.80, target2023: 26.50, type: "THPT" }
        }
    },
    
    // Đại học Sư phạm Hà Nội
    "HNUE": {
        name: "Đại học Sư phạm Hà Nội",
        region: "mb",
        location: "Hà Nội",
        website: "https://hnue.edu.vn",
        subjects: {
            "SPTOAN": { name: "Sư phạm Toán", code: "7140209", combo: "A00", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" },
            "SPVAN": { name: "Sư phạm Ngữ văn", code: "7140217", combo: "C00", target2025: 28.00, target2024: 27.80, target2023: 27.50, type: "THPT" },
            "SPANH": { name: "Sư phạm Tiếng Anh", code: "7140231", combo: "D01", target2025: 28.50, target2024: 28.30, target2023: 28.00, type: "THPT" }
        }
    },
        // Đại học Phenikaa
    "PKA": {
        name: "Đại học Phenikaa",
        region: "mb",
        location: "Hà Nội",
        website: "https://phenikaa-uni.edu.vn",
        subjects: {
            // ===== KHỐI NGÀNH CÔNG NGHỆ - KỸ THUẬT =====
            "IT1": { name: "Công nghệ thông tin", code: "7480201", combo: "A00;A01;D01", target2025: 24.50, target2024: 24.00, target2023: 23.50, type: "THPT" },
            "IT2": { name: "Khoa học máy tính", code: "7480101", combo: "A00;A01;D01", target2025: 25.00, target2024: 24.50, target2023: 24.00, type: "THPT" },
            "AI": { name: "Trí tuệ nhân tạo", code: "7480107", combo: "A00;A01;D01", target2025: 26.00, target2024: 25.50, target2023: 25.00, type: "THPT" },
            "DS": { name: "Khoa học dữ liệu", code: "7480108", combo: "A00;A01;D01", target2025: 25.50, target2024: 25.00, target2023: 24.50, type: "THPT" },
            "CE": { name: "Kỹ thuật phần mềm", code: "7480103", combo: "A00;A01;D01", target2025: 24.80, target2024: 24.30, target2023: 23.80, type: "THPT" },
            "IS": { name: "Hệ thống thông tin", code: "7480204", combo: "A00;A01;D01", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            "NET": { name: "An toàn thông tin", code: "7480202", combo: "A00;A01;D01", target2025: 24.50, target2024: 24.00, target2023: 23.50, type: "THPT" },
            
            // ===== KHỐI NGÀNH KINH TẾ - QUẢN TRỊ =====
            "BA": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            "IB": { name: "Kinh doanh quốc tế", code: "7340121", combo: "A01;D01", target2025: 24.50, target2024: 24.00, target2023: 23.50, type: "THPT" },
            "FIN": { name: "Tài chính - Ngân hàng", code: "7340201", combo: "A01;D01", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            "ACC": { name: "Kế toán", code: "7340301", combo: "A01;D01", target2025: 23.80, target2024: 23.30, target2023: 22.80, type: "THPT" },
            "MKT": { name: "Marketing", code: "7340115", combo: "A01;D01", target2025: 24.20, target2024: 23.70, target2023: 23.20, type: "THPT" },
            "HRM": { name: "Quản trị nhân lực", code: "7340404", combo: "A01;D01", target2025: 23.50, target2024: 23.00, target2023: 22.50, type: "THPT" },
            "LOG": { name: "Logistics và Quản lý chuỗi cung ứng", code: "7510605", combo: "A01;D01", target2025: 24.50, target2024: 24.00, target2023: 23.50, type: "THPT" },
            "EIB": { name: "Kinh tế đầu tư", code: "7310104", combo: "A01;D01", target2025: 23.80, target2024: 23.30, target2023: 22.80, type: "THPT" },
            
            // ===== KHỐI NGÀNH DU LỊCH - KHÁCH SẠN =====
            "HT": { name: "Quản trị khách sạn", code: "7810201", combo: "D01;A01", target2025: 22.50, target2024: 22.00, target2023: 21.50, type: "THPT" },
            "TM": { name: "Quản trị dịch vụ du lịch và lữ hành", code: "7810103", combo: "D01;A01", target2025: 22.50, target2024: 22.00, target2023: 21.50, type: "THPT" },
            "RE": { name: "Quản trị nhà hàng và dịch vụ ăn uống", code: "7810202", combo: "D01;A01", target2025: 22.00, target2024: 21.50, target2023: 21.00, type: "THPT" },
            
            // ===== KHỐI NGÀNH SỨC KHỎE =====
            "NUR": { name: "Điều dưỡng", code: "7720301", combo: "B00;A00;D07", target2025: 22.00, target2024: 21.50, target2023: 21.00, type: "THPT" },
            "LAB": { name: "Kỹ thuật xét nghiệm y học", code: "7720601", combo: "B00;A00;D07", target2025: 23.00, target2024: 22.50, target2023: 22.00, type: "THPT" },
            "MRT": { name: "Kỹ thuật hình ảnh y học", code: "7720504", combo: "B00;A00;D07", target2025: 23.00, target2024: 22.50, target2023: 22.00, type: "THPT" },
            "PMR": { name: "Phục hồi chức năng", code: "7720602", combo: "B00;A00;D07", target2025: 22.00, target2024: 21.50, target2023: 21.00, type: "THPT" },
            "PH": { name: "Y tế công cộng", code: "7720701", combo: "B00;A00;D07", target2025: 21.50, target2024: 21.00, target2023: 20.50, type: "THPT" },
            
            // ===== KHỐI NGÀNH KHOA HỌC CƠ BẢN =====
            "MATH": { name: "Toán ứng dụng", code: "7460112", combo: "A00;A01", target2025: 22.00, target2024: 21.50, target2023: 21.00, type: "THPT" },
            "PHY": { name: "Vật lý kỹ thuật", code: "7520401", combo: "A00;A01", target2025: 22.50, target2024: 22.00, target2023: 21.50, type: "THPT" },
            "CHE": { name: "Hóa học", code: "7440112", combo: "A00;B00", target2025: 22.00, target2024: 21.50, target2023: 21.00, type: "THPT" },
            "BIO": { name: "Công nghệ sinh học", code: "7420201", combo: "B00;A00", target2025: 23.00, target2024: 22.50, target2023: 22.00, type: "THPT" },
            "ENV": { name: "Khoa học môi trường", code: "7440322", combo: "A00;B00", target2025: 21.50, target2024: 21.00, target2023: 20.50, type: "THPT" },
            "FST": { name: "Công nghệ thực phẩm", code: "7540101", combo: "A00;B00", target2025: 22.50, target2024: 22.00, target2023: 21.50, type: "THPT" },
            
            // ===== KHỐI NGÀNH NGÔN NGỮ =====
            "ENG": { name: "Ngôn ngữ Anh", code: "7220201", combo: "D01", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            "CHI": { name: "Ngôn ngữ Trung Quốc", code: "7220204", combo: "D01;D04", target2025: 23.00, target2024: 22.50, target2023: 22.00, type: "THPT" },
            "KOR": { name: "Ngôn ngữ Hàn Quốc", code: "7220207", combo: "D01", target2025: 23.50, target2024: 23.00, target2023: 22.50, type: "THPT" },
            "JAP": { name: "Ngôn ngữ Nhật", code: "7220209", combo: "D01", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            
            // ===== KHỐI NGÀNH KIẾN TRÚC - XÂY DỰNG =====
            "ARC": { name: "Kiến trúc", code: "7580101", combo: "A00;V00", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            "CE": { name: "Kỹ thuật xây dựng", code: "7580201", combo: "A00", target2025: 22.50, target2024: 22.00, target2023: 21.50, type: "THPT" },
            "IE": { name: "Kỹ thuật công trình", code: "7580202", combo: "A00", target2025: 22.00, target2024: 21.50, target2023: 21.00, type: "THPT" },
            
            // ===== KHỐI NGÀNH LUẬT =====
            "LAW": { name: "Luật kinh tế", code: "7380107", combo: "A01;D01;C00", target2025: 23.50, target2024: 23.00, target2023: 22.50, type: "THPT" },
            "BUSLAW": { name: "Luật thương mại quốc tế", code: "7380108", combo: "A01;D01;C00", target2025: 23.50, target2024: 23.00, target2023: 22.50, type: "THPT" },
            
            // ===== KHỐI NGÀNH TRUYỀN THÔNG - DESIGN =====
            "COMM": { name: "Truyền thông đa phương tiện", code: "7320104", combo: "D01", target2025: 23.00, target2024: 22.50, target2023: 22.00, type: "THPT" },
            "GD": { name: "Thiết kế đồ họa", code: "7210104", combo: "D01;H00", target2025: 24.00, target2024: 23.50, target2023: 23.00, type: "THPT" },
            "ID": { name: "Thiết kế công nghiệp", code: "7210105", combo: "A00;D01", target2025: 23.50, target2024: 23.00, target2023: 22.50, type: "THPT" }
        }
    },
    // Học viện Tài chính
    "AOF": {
        name: "Học viện Tài chính",
        region: "mb",
        location: "Hà Nội",
        website: "https://hvtc.edu.vn",
        subjects: {
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01;D01", target2025: 27.00, target2024: 26.80, target2023: 26.50, type: "THPT" },
            "KT": { name: "Kế toán", code: "7340301", combo: "A01;D01", target2025: 26.50, target2024: 26.30, target2023: 26.00, type: "THPT" }
        }
    },
    
    // ========== KHU VỰC MIỀN TRUNG ==========
    // Đại học Bách khoa Đà Nẵng
    "DUT-UD": {
        name: "ĐH Bách khoa - ĐH Đà Nẵng",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://dut.udn.vn",
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 26.80, target2024: 26.50, target2023: 26.20, type: "THPT" },
            "KTDT": { name: "Kỹ thuật điện", code: "7520201", combo: "A00", target2025: 25.50, target2024: 25.30, target2023: 25.00, type: "THPT" },
            "XD": { name: "Xây dựng", code: "7580201", combo: "A00", target2025: 24.80, target2024: 24.50, target2023: 24.20, type: "THPT" }
        }
    },
    
    // Đại học Kinh tế Đà Nẵng
    "DUE-UD": {
        name: "ĐH Kinh tế - ĐH Đà Nẵng",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://due.udn.vn",
        subjects: {
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 26.00, target2024: 25.80, target2023: 25.50, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01;D01", target2025: 26.50, target2024: 26.30, target2023: 26.00, type: "THPT" }
        }
    },
    
    // Đại học Huế
    "HUE": {
        name: "Đại học Huế",
        region: "mt",
        location: "Thừa Thiên Huế",
        website: "https://hueuni.edu.vn",
        subjects: {
            "YH": { name: "Y khoa", code: "7720101", combo: "B00", target2025: 27.00, target2024: 26.80, target2023: 26.50, type: "THPT" },
            "DH": { name: "Dược học", code: "7720201", combo: "B00", target2025: 25.50, target2024: 25.30, target2023: 25.00, type: "THPT" }
        }
    },
    
    // Đại học Vinh
    "VINH": {
        name: "Đại học Vinh",
        region: "mt",
        location: "Nghệ An",
        website: "https://vinhuni.edu.vn",
        subjects: {
            "SPTOAN": { name: "Sư phạm Toán", code: "7140209", combo: "A00", target2025: 25.50, target2024: 25.30, target2023: 25.00, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 24.80, target2024: 24.50, target2023: 24.20, type: "THPT" }
        }
    },
    
    // ========== KHU VỰC MIỀN NAM ==========
    // Đại học Bách khoa TP.HCM
    "HCMUT": {
        name: "Đại học Bách khoa TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://hcmut.edu.vn",
        subjects: {
            "KHMT": { name: "Khoa học máy tính", code: "7480101", combo: "A00", target2025: 28.20, target2024: 28.00, target2023: 27.70, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" },
            "KTDT": { name: "Kỹ thuật điện", code: "7520201", combo: "A00", target2025: 26.80, target2024: 26.60, target2023: 26.30, type: "THPT" },
            "CK": { name: "Cơ khí", code: "7520114", combo: "A00", target2025: 26.00, target2024: 25.80, target2023: 25.50, type: "THPT" }
        }
    },
    
    // Đại học Kinh tế TP.HCM
    "UEH": {
        name: "Đại học Kinh tế TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://ueh.edu.vn",
        subjects: {
            "KTH": { name: "Kinh tế học", code: "7310101", combo: "A01;D01", target2025: 27.00, target2024: 26.80, target2023: 26.50, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01;D01", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 26.80, target2024: 26.60, target2023: 26.30, type: "THPT" },
            "KT": { name: "Kế toán", code: "7340301", combo: "A01;D01", target2025: 26.00, target2024: 25.80, target2023: 25.50, type: "THPT" }
        }
    },
    
    // Đại học Công nghệ Thông tin TP.HCM
    "UIT": {
        name: "ĐH Công nghệ Thông tin - ĐHQG TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://uit.edu.vn",
        subjects: {
            "KHMT": { name: "Khoa học máy tính", code: "7480101", combo: "A00", target2025: 28.00, target2024: 27.80, target2023: 27.50, type: "THPT" },
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" },
            "KHDL": { name: "Khoa học dữ liệu", code: "7480108", combo: "A00", target2025: 27.80, target2024: 27.60, target2023: 27.30, type: "THPT" }
        }
    },
    
    // Đại học Y Dược TP.HCM
    "UMP": {
        name: "Đại học Y Dược TP.HCM",
        region: "mn",
        location: "TP.HCM",
        website: "https://ump.edu.vn",
        subjects: {
            "YK": { name: "Y khoa", code: "7720101", combo: "B00", target2025: 29.00, target2024: 28.80, target2023: 28.50, type: "THPT" },
            "RHMT": { name: "Răng hàm mặt", code: "7720501", combo: "B00", target2025: 28.50, target2024: 28.30, target2023: 28.00, type: "THPT" },
            "DH": { name: "Dược học", code: "7720201", combo: "B00", target2025: 27.50, target2024: 27.30, target2023: 27.00, type: "THPT" }
        }
    },
    
    // Đại học Tôn Đức Thắng
    "TDTU": {
        name: "Đại học Tôn Đức Thắng",
        region: "mn",
        location: "TP.HCM",
        website: "https://tdtu.edu.vn",
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 26.50, target2024: 26.30, target2023: 26.00, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 25.80, target2024: 25.60, target2023: 25.30, type: "THPT" },
            "TCNH": { name: "Tài chính ngân hàng", code: "7340201", combo: "A01;D01", target2025: 26.00, target2024: 25.80, target2023: 25.50, type: "THPT" }
        }
    },
    
    // Đại học Cần Thơ
    "CTU": {
        name: "Đại học Cần Thơ",
        region: "mn",
        location: "Cần Thơ",
        website: "https://ctu.edu.vn",
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 25.50, target2024: 25.30, target2023: 25.00, type: "THPT" },
            "NN": { name: "Nông nghiệp", code: "7620115", combo: "B00", target2025: 23.00, target2024: 22.80, target2023: 22.50, type: "THPT" },
            "YT": { name: "Y tế công cộng", code: "7720701", combo: "B00", target2025: 24.50, target2024: 24.30, target2023: 24.00, type: "THPT" }
        }
    },
    
    // Đại học Duy Tân
    "DTU": {
        name: "Đại học Duy Tân",
        region: "mt",
        location: "Đà Nẵng",
        website: "https://duytan.edu.vn",
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 24.50, target2024: 24.30, target2023: 24.00, type: "THPT" },
            "QTKD": { name: "Quản trị kinh doanh", code: "7340101", combo: "A01;D01", target2025: 23.80, target2024: 23.60, target2023: 23.30, type: "THPT" },
            "YD": { name: "Y dược", code: "7720115", combo: "B00", target2025: 24.00, target2024: 23.80, target2023: 23.50, type: "THPT" }
        }
    },
    
    // Đại học FPT
    "FPTU": {
        name: "Đại học FPT",
        region: "mn",
        location: "TP.HCM/Hà Nội/Đà Nẵng",
        website: "https://fpt.edu.vn",
        subjects: {
            "CNTT": { name: "Công nghệ thông tin", code: "7480201", combo: "A00", target2025: 24.00, target2024: 23.80, target2023: 23.50, type: "THPT" },
            "SE": { name: "Kỹ thuật phần mềm", code: "7480103", combo: "A00", target2025: 24.50, target2024: 24.30, target2023: 24.00, type: "THPT" },
            "AI": { name: "Trí tuệ nhân tạo", code: "7480107", combo: "A00", target2025: 25.00, target2024: 24.80, target2023: 24.50, type: "THPT" }
        }
    }
};

// Export ra global
window.universityDatabase = universityDatabase;

console.log("✅ Đã tải database", Object.keys(universityDatabase).length, "trường đại học");