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

        // ===== CÔNG NGHỆ SINH HỌC - THỰC PHẨM =====
        "BF-E12": {
            name: "Kỹ thuật Thực phẩm (CT tiên tiến)",
            code: "7540101",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 21.00,
            type: "THPT"
        },

        "BF-E19": {
            name: "Kỹ thuật sinh học (CT tiên tiến)",
            code: "7420201",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 20.00,
            type: "THPT"
        },

        "BF1": {
            name: "Kỹ thuật Sinh học",
            code: "7420201",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 23.02,
            type: "THPT"
        },

        "BF2": {
            name: "Kỹ thuật Thực phẩm",
            code: "7540101",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 23.38,
            type: "THPT"
        },

        // ===== HÓA =====
        "CH-E11": {
            name: "Kỹ thuật Hóa dược (CT tiên tiến)",
            code: "7520301",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 21.38,
            type: "THPT"
        },

        "CH1": {
            name: "Kỹ thuật Hoá học",
            code: "7520301",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 24.05,
            type: "THPT"
        },

        "CH2": {
            name: "Hoá học",
            code: "7440112",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 23.19,
            type: "THPT"
        },

        // ===== GIÁO DỤC =====
        "ED2": {
            name: "Công nghệ giáo dục",
            code: "7140114",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 23.80,
            type: "THPT"
        },

        "ED3": {
            name: "Quản lý giáo dục",
            code: "7140114",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 23.70,
            type: "THPT"
        },

        // ===== ĐIỆN - ĐIỆN TỬ =====
        "EE-E18": {
            name: "Hệ thống điện và năng lượng tái tạo (CT tiên tiến)",
            code: "7520201",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.56,
            type: "THPT"
        },

        "EE-E8": {
            name: "Kỹ thuật Điều khiển - Tự động hoá (CT tiên tiến)",
            code: "7520216",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 28.12,
            type: "THPT"
        },

        "EE-EP": {
            name: "Tin học công nghiệp và Tự động hóa (PFIEV)",
            code: "7520216",
            combo: "A00;A01;D29;B03;C01;C02;X02",
            target: 27.27,
            type: "THPT"
        },

        "EE1": {
            name: "Kỹ thuật Điện",
            code: "7520201",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 27.55,
            type: "THPT"
        },

        "EE2": {
            name: "Kỹ thuật Điều khiển - Tự động hoá",
            code: "7520216",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 28.48,
            type: "THPT"
        },

        // ===== KINH TẾ =====
        "EM-E13": {
            name: "Phân tích kinh doanh (CT tiên tiến)",
            code: "7340122",
            combo: "A01;B03;C01;C02;D07;X02;D01",
            target: 23.56,
            type: "THPT"
        },

        "EM-E14": {
            name: "Logistics và Quản lý chuỗi cung ứng (CT tiên tiến)",
            code: "7510605",
            combo: "D01;A01;B03;C01;C02;D07;X02",
            target: 24.21,
            type: "THPT"
        },

        "EM1": {
            name: "Quản lý năng lượng",
            code: "7510601",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 24.20,
            type: "THPT"
        },

        "EM2": {
            name: "Quản lý công nghiệp",
            code: "7510601",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 24.40,
            type: "THPT"
        },

        "EM3": {
            name: "Quản trị kinh doanh",
            code: "7340101",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 24.80,
            type: "THPT"
        },

        "EM4": {
            name: "Kế toán",
            code: "7340301",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 24.63,
            type: "THPT"
        },

        "EM5": {
            name: "Tài chính - Ngân hàng",
            code: "7340201",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 24.80,
            type: "THPT"
        },

        // ===== ĐIỆN TỬ VIỄN THÔNG =====
        "ET-E16": {
            name: "Truyền thông số và Kỹ thuật đa phương tiện",
            code: "7520207",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.62,
            type: "THPT"
        },

        "ET-E4": {
            name: "Kỹ thuật Điện tử - Viễn thông (CT tiên tiến)",
            code: "7520207",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 27.55,
            type: "THPT"
        },

        "ET-E5": {
            name: "Kỹ thuật Y sinh (CT tiên tiến)",
            code: "7520212",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 25.58,
            type: "THPT"
        },

        "ET-E9": {
            name: "Hệ thống nhúng thông minh và IoT",
            code: "7520207",
            combo: "A00;A01;D28;B03;C01;C02;X02",
            target: 27.85,
            type: "THPT"
        },

        "ET1": {
            name: "Kỹ thuật Điện tử - Viễn thông",
            code: "7520207",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 28.07,
            type: "THPT"
        },

        "ET2": {
            name: "Kỹ thuật Y sinh",
            code: "7520212",
            combo: "A00;A01;B00;B03;C01;C02;X02",
            target: 26.32,
            type: "THPT"
        },

        // ===== CNTT =====
        "IT-E10": {
            name: "Khoa học dữ liệu và Trí tuệ nhân tạo",
            code: "7480108",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 29.39,
            type: "THPT"
        },

        "IT-E15": {
            name: "An toàn không gian số - Cyber Security",
            code: "7480202",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 28.69,
            type: "THPT"
        },

        "IT-E6": {
            name: "CNTT Việt - Nhật",
            code: "7480201",
            combo: "A00;A01;D28;B03;C01;C02;X02",
            target: 27.97,
            type: "THPT"
        },

        "IT-E7": {
            name: "CNTT Global ICT",
            code: "7480201",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 28.66,
            type: "THPT"
        },

        "IT-EP": {
            name: "CNTT Việt - Pháp",
            code: "7480201",
            combo: "A00;A01;D29;B03;C01;C02;X02",
            target: 27.83,
            type: "THPT"
        },

        "IT1": {
            name: "CNTT: Khoa học Máy tính",
            code: "7480101",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 29.19,
            type: "THPT"
        },

        "IT2": {
            name: "CNTT: Kỹ thuật Máy tính",
            code: "7480201",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 28.83,
            type: "THPT"
        },

        // ===== CƠ KHÍ =====
        "ME-E1": {
            name: "Kỹ thuật Cơ điện tử (CT tiên tiến)",
            code: "7520114",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.74,
            type: "THPT"
        },

        "ME1": {
            name: "Kỹ thuật Cơ điện tử",
            code: "7520114",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 27.90,
            type: "THPT"
        },

        "ME2": {
            name: "Kỹ thuật Cơ khí",
            code: "7520103",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.62,
            type: "THPT"
        },

        // ===== TOÁN =====
        "MI1": {
            name: "Toán - Tin",
            code: "7460117",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 27.80,
            type: "THPT"
        },

        "MI2": {
            name: "Hệ thống thông tin quản lý",
            code: "7340405",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 27.72,
            type: "THPT"
        },

        // ===== VẬT LIỆU =====
        "MS1": {
            name: "Kỹ thuật Vật liệu",
            code: "7520309",
            combo: "A00;A01;D07;B03;C01;C02;X02",
            target: 25.39,
            type: "THPT"
        },

        "MS2": {
            name: "Kỹ thuật Vi điện tử và Công nghệ nano",
            code: "7520207",
            combo: "A00;A01;D07;B03;C01;C02;X02",
            target: 28.25,
            type: "THPT"
        },

        // ===== VẬT LÝ =====
        "PH1": {
            name: "Vật lý kỹ thuật",
            code: "7520401",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.41,
            type: "THPT"
        },

        "PH2": {
            name: "Kỹ thuật hạt nhân",
            code: "7520402",
            combo: "A00;A01;A02;B03;C01;C02;X02",
            target: 25.07,
            type: "THPT"
        },

        "PH3": {
            name: "Vật lý Y khoa",
            code: "7520403",
            combo: "A00;A01;A02;B03;C01;C02;X02",
            target: 25.20,
            type: "THPT"
        },

        // ===== Ô TÔ =====
        "TE1": {
            name: "Kỹ thuật Ô tô",
            code: "7520130",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 27.03,
            type: "THPT"
        },

        "TE2": {
            name: "Kỹ thuật Cơ khí động lực",
            code: "7520116",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.25,
            type: "THPT"
        },

        "TE3": {
            name: "Kỹ thuật Hàng không",
            code: "7520120",
            combo: "A00;A01;B03;C01;C02;X02",
            target: 26.60,
            type: "THPT"
        },

        // ===== NGOẠI NGỮ =====
        "FL1": {
            name: "Tiếng Anh KHKT và Công nghệ",
            code: "7220201",
            combo: "D01;B03;C01;C02;X02",
            target: 24.80,
            type: "THPT"
        },

        "FL2": {
            name: "Tiếng Anh chuyên nghiệp quốc tế",
            code: "7220201",
            combo: "D01;B03;C01;C02;X02",
            target: 24.80,
            type: "THPT"
        },

        "FL3": {
            name: "Tiếng Trung KHKT và Công nghệ",
            code: "7220204",
            combo: "D01;D04;B03;C01;C02;X02",
            target: 25.36,
            type: "THPT"
        },

        // ===== MÔI TRƯỜNG =====
        "EV1": {
            name: "Kỹ thuật Môi trường",
            code: "7520320",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 22.22,
            type: "THPT"
        },

        "EV2": {
            name: "Quản lý Tài nguyên và Môi trường",
            code: "7850101",
            combo: "A00;B00;D07;B03;C01;C02;X02",
            target: 21.53,
            type: "THPT"
        },

        // ===== TROY =====
        "TROY-BA": {
            name: "Quản trị kinh doanh - ĐH Troy (Hoa Kỳ)",
            code: "7340101",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 19.50,
            type: "THPT"
        },

        "TROY-IT": {
            name: "Khoa học máy tính - ĐH Troy (Hoa Kỳ)",
            code: "7480101",
            combo: "D01;A00;A01;B03;C01;C02;X02",
            target: 21.80,
            type: "THPT"
        },

        // ===== DỆT MAY =====
        "TX1": {
            name: "Công nghệ Dệt - May",
            code: "7540204",
            combo: "A00;A01;D07;B03;C01;C02;X02",
            target: 22.48,
            type: "THPT"
        }
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