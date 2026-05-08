if (window.location.pathname.toLowerCase().includes('/admin')) {
    // Chuyển hướng về trang 404 lỗi (không tìm thấy)
    window.location.href = '/404.html';
    // Hoặc chuyển về trang chủ: window.location.href = '/';
}
// ==================== DỮ LIỆU THANG ĐIỂM ====================
const gradeScale9Data = [
    {min: 9.0, max: 10, letter: "A+", grade4: 4.0},
    {min: 8.5, max: 8.9, letter: "A", grade4: 3.7},
    {min: 8.0, max: 8.4, letter: "B+", grade4: 3.5},
    {min: 7.0, max: 7.9, letter: "B", grade4: 3.0},
    {min: 6.5, max: 6.9, letter: "C+", grade4: 2.5},
    {min: 5.5, max: 6.4, letter: "C", grade4: 2.0},
    {min: 4.0, max: 4.9, letter: "D", grade4: 1.0},
    {min: 0, max: 3.99, letter: "F", grade4: 0}
];

const gradeScale5Data = [
    {min: 9.0, max: 10, letter: "A", grade4: 4.0},
    {min: 8.0, max: 8.9, letter: "B+", grade4: 3.5},
    {min: 7.0, max: 7.9, letter: "B", grade4: 3.0},
    {min: 6.0, max: 6.9, letter: "C+", grade4: 2.5},
    {min: 5.0, max: 5.9, letter: "C", grade4: 2.0},
    {min: 4.0, max: 4.9, letter: "D", grade4: 1.0},
    {min: 0, max: 3.99, letter: "F", grade4: 0}
];

const gradeScale3Data = [
    {min: 8.0, max: 10, letter: "A", grade4: 3.6},
    {min: 6.5, max: 7.9, letter: "B", grade4: 3.0},
    {min: 5.0, max: 6.4, letter: "C", grade4: 2.0},
    {min: 0, max: 4.9, letter: "F", grade4: 0}
];

// ==================== DỮ LIỆU NGÀNH HỌC ====================
const nganhDuDoan = [
    {truong: "BKU", ma: "IT1", ten: "Khoa học máy tính", toHop: "A00", diemTHPT: 29.19, diemXTTN: 90.61},
    {truong: "BKU", ma: "IT2", ten: "Kỹ thuật máy tính", toHop: "A00", diemTHPT: 28.83, diemXTTN: 84.64},
    {truong: "NEU", ma: "TCNH", ten: "Tài chính ngân hàng", toHop: "A01", diemTHPT: 28.00, diemXTTN: 87.00},
    {truong: "NEU", ma: "KTH", ten: "Kinh tế học", toHop: "A01", diemTHPT: 27.50, diemXTTN: 85.00},
    {truong: "FTU", ma: "KDTQT", ten: "Kinh doanh quốc tế", toHop: "A01", diemTHPT: 28.20, diemXTTN: 88.50},
    {truong: "YHN", ma: "YK", ten: "Y khoa", toHop: "B00", diemTHPT: 29.50, diemXTTN: 95.00},
    {truong: "HCMUT", ma: "IT1", ten: "Khoa học máy tính", toHop: "A00", diemTHPT: 28.20, diemXTTN: 89.00},
    {truong: "UEH", ma: "TCNH", ten: "Tài chính ngân hàng", toHop: "A01", diemTHPT: 27.50, diemXTTN: 86.00}
];

// ==================== DỮ LIỆU TRƯỜNG ĐẠI HỌC ====================
const universityList = [
    {id: 1, code: "BKU", name: "Đại học Bách khoa Hà Nội", location: "Hà Nội", region: "mb"},
    {id: 2, code: "NEU", name: "Đại học Kinh tế Quốc dân", location: "Hà Nội", region: "mb"},
    {id: 3, code: "FTU", name: "Đại học Ngoại thương", location: "Hà Nội", region: "mb"},
    {id: 4, code: "YHN", name: "Đại học Y Hà Nội", location: "Hà Nội", region: "mb"},
    {id: 5, code: "HCMUT", name: "Đại học Bách khoa TP.HCM", location: "TP.HCM", region: "mn"},
    {id: 6, code: "UEH", name: "Đại học Kinh tế TP.HCM", location: "TP.HCM", region: "mn"},
    {id: 7, code: "CTU", name: "Đại học Cần Thơ", location: "Cần Thơ", region: "mn"},
    {id: 8, code: "DTU", name: "Đại học Duy Tân", location: "Đà Nẵng", region: "mt"}
];

// ==================== DỮ LIỆU QR ====================
const qrDataTab = {
    bank: {
        image: 'https://cdn.phototourl.com/free/2026-05-07-249ccad0-03ef-41f8-89d3-d4a1c8dbb1c5.jpg',
        info: '🏦 Quét mã ngân hàng MBBANK để ủng hộ'
    }
};

// ==================== HÀM KHỞI TẠO TABS ====================
function initTabs() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            if(!tabId) return;
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
            const targetTab = document.getElementById(tabId);
            if(targetTab) targetTab.classList.add('active');
            window.scrollTo({top: 0, behavior: 'smooth'});
            if(window.innerWidth <= 768) closeMobileMenu();
        });
    });
}

// ==================== TÍNH ĐIỂM HỌC PHẦN ====================
function initHocPhan() {
    let scores = [null, null, null, null];
    const weights = [5, 5, 30, 60];
    const inputs = document.querySelectorAll('#tab-hocphan .score-input-hp');
    const contribs = document.querySelectorAll('#tab-hocphan .contribution-cell-hp');
    const finalEl = document.getElementById('hocphanFinalScore');
    const letterEl = document.getElementById('hocphanGradeLetter');
    const grade4El = document.getElementById('hocphanGrade4');
    const scaleSelect = document.getElementById('hocphanGradeScale');
    const gradeTableBody = document.getElementById('hocphanGradeTableBody');
    const warningMsg = document.getElementById('hpWarningMsg');
    
    function getScale() { 
        let val = scaleSelect?.value || '9'; 
        if(val === '9') return gradeScale9Data; 
        if(val === '5') return gradeScale5Data; 
        return gradeScale3Data; 
    }
    
    function updateTable() { 
        if(gradeTableBody) {
            gradeTableBody.innerHTML = getScale().map(g => 
                `<tr><td>${g.min} - ${g.max === 10 ? '10' : g.max}</td><td>${g.letter}</td><td>${g.grade4}</td></tr>`
            ).join(''); 
        }
    }
    
    function calculate() {
        let total = 0, filled = 0;
        scores.forEach((s, i) => {
            if(s !== null && !isNaN(s) && s >= 0 && s <= 10) { 
                filled++; 
                total += s * weights[i] / 100; 
                if(contribs[i]) contribs[i].textContent = (s * weights[i] / 100).toFixed(2); 
            } else if(contribs[i]) {
                contribs[i].textContent = '-';
            }
        });
        
        if(filled === 4) {
            finalEl.textContent = total.toFixed(2);
            let grade = getScale().find(g => total >= g.min && total <= g.max);
            if(grade) { 
                letterEl.textContent = grade.letter; 
                grade4El.textContent = grade.grade4; 
            }
            if(warningMsg) { 
                warningMsg.innerHTML = '✅ Đã nhập đầy đủ điểm!'; 
                warningMsg.style.background = '#d4edda'; 
                warningMsg.style.color = '#155724'; 
                setTimeout(() => { if(warningMsg) warningMsg.style.display = 'none'; }, 2000); 
            }
        } else {
            finalEl.textContent = '--'; 
            letterEl.textContent = '--'; 
            grade4El.textContent = '--';
            if(warningMsg) { 
                warningMsg.style.display = 'block'; 
                if(filled === 0) warningMsg.innerHTML = '⚠️ Chưa nhập điểm nào. Vui lòng nhập điểm!'; 
                else warningMsg.innerHTML = `⚠️ Đã nhập ${filled}/4 điểm. Nhập đầy đủ để có kết quả!`; 
            }
        }
    }
    
    inputs.forEach((input, idx) => { 
        input.addEventListener('input', (e) => { 
            let v = parseFloat(e.target.value); 
            scores[idx] = (!isNaN(v) && v >= 0 && v <= 10) ? v : null; 
            calculate(); 
        }); 
    });
    
    document.getElementById('resetHocPhanBtn')?.addEventListener('click', () => { 
        scores = [null, null, null, null]; 
        inputs.forEach(i => i.value = ''); 
        contribs.forEach(c => c.textContent = '-'); 
        calculate(); 
        if(warningMsg) warningMsg.style.display = 'block'; 
    });
    
    scaleSelect?.addEventListener('change', () => { 
        calculate(); 
        updateTable(); 
    });
    
    updateTable(); 
    calculate();
}

// ==================== TÍNH ĐIỂM QUA MÔN ====================
function initQuaMon() {
    let scores = [null, null, null, null];
    let weights = [5, 5, 30, 60];
    const inputs = document.querySelectorAll('#tab-quamon .score-input');
    const contribs = document.querySelectorAll('#tab-quamon .contribution-cell');
    const finalEl = document.getElementById('finalScore');
    const letterEl = document.getElementById('gradeLetter');
    const grade4El = document.getElementById('grade4');
    const weightSelect = document.getElementById('weightStructure');
    const gradeTableBody = document.getElementById('gradeTableBody');
    
    function updateWeights() { 
        if(weightSelect) { 
            weights = weightSelect.value.split(',').map(Number); 
            document.querySelectorAll('#tab-quamon .weight-cell').forEach((c, i) => { 
                if(i < weights.length) c.textContent = weights[i] + '%'; 
            }); 
            calculate(); 
        } 
    }
    
    function calculate() {
        let total = 0, filled = 0;
        scores.forEach((s, i) => { 
            if(s !== null && !isNaN(s) && s >= 0 && s <= 10) { 
                filled++; 
                total += s * weights[i] / 100; 
                if(contribs[i]) contribs[i].textContent = (s * weights[i] / 100).toFixed(2); 
            } else if(contribs[i]) {
                contribs[i].textContent = '-'; 
            }
        });
        
        if(filled === 4) { 
            finalEl.textContent = total.toFixed(2); 
            let grade = gradeScale9Data.find(g => total >= g.min && total <= g.max); 
            if(grade) { 
                letterEl.textContent = grade.letter; 
                grade4El.textContent = grade.grade4; 
            } 
        } else { 
            finalEl.textContent = '--'; 
            letterEl.textContent = '--'; 
            grade4El.textContent = '--'; 
        }
    }
    
    inputs.forEach((input, idx) => { 
        input.addEventListener('input', (e) => { 
            let v = parseFloat(e.target.value); 
            scores[idx] = (!isNaN(v) && v >= 0 && v <= 10) ? v : null; 
            calculate(); 
        }); 
    });
    
    document.getElementById('resetBtn')?.addEventListener('click', () => { 
        scores = [null, null, null, null]; 
        inputs.forEach(i => i.value = ''); 
        contribs.forEach(c => c.textContent = '-'); 
        calculate(); 
    });
    
    weightSelect?.addEventListener('change', updateWeights);
    
    if(gradeTableBody) {
        gradeTableBody.innerHTML = gradeScale9Data.map(g => 
            `<tr><td>${g.min} - ${g.max === 10 ? '10' : g.max}</td><td>${g.letter}</td><td>${g.grade4}</td></tr>`
        ).join('');
    }
    
    updateWeights();
}

// ==================== TÍNH ĐIỂM TỐT NGHIỆP ====================
function initTotNghiep() {
    document.getElementById('calcGraduationBtn')?.addEventListener('click', () => {
        let accCred = parseFloat(document.getElementById('accumulatedCredits')?.value) || 0;
        let accGPA = parseFloat(document.getElementById('accumulatedGPA')?.value) || 0;
        let remCred = parseFloat(document.getElementById('remainingCredits')?.value) || 0;
        let expScore = parseFloat(document.getElementById('expectedScore')?.value) || 0;
        let totalCred = accCred + remCred;
        
        if(totalCred === 0) { 
            document.getElementById('graduationScore').innerHTML = '--'; 
            document.getElementById('graduationRank').innerHTML = '--'; 
            return; 
        }
        
        let gradScore = ((accGPA * accCred) + (expScore * remCred)) / totalCred;
        document.getElementById('graduationScore').innerHTML = gradScore.toFixed(2);
        
        let rank = ''; 
        if(gradScore >= 9) rank = 'Xuất sắc 🏆'; 
        else if(gradScore >= 8) rank = 'Giỏi ⭐'; 
        else if(gradScore >= 7) rank = 'Khá 👍'; 
        else if(gradScore >= 5) rank = 'Trung bình 📖'; 
        else rank = 'Yếu ⚠️';
        
        document.getElementById('graduationRank').innerHTML = rank;
    });
}

// ==================== QUY ĐỔI CHỨNG CHỈ ====================
function initQuyDoi() {
    document.getElementById('convertBtn')?.addEventListener('click', () => {
        let score = parseFloat(document.getElementById('certScore')?.value);
        let resultDiv = document.getElementById('convertResult');
        
        if(isNaN(score)) { 
            resultDiv.innerHTML = '<span style="color:red;">❌ Vui lòng nhập điểm số</span>'; 
            return; 
        }
        
        let toeic = Math.round(score * 100); 
        let ielts = (score / 100).toFixed(1); 
        let cefr = ''; 
        if(score >= 900) cefr = 'C2'; 
        else if(score >= 785) cefr = 'C1'; 
        else if(score >= 550) cefr = 'B2'; 
        else if(score >= 450) cefr = 'B1'; 
        else cefr = 'A2';
        
        resultDiv.innerHTML = `
            <div style="background:linear-gradient(135deg,#667eea15,#764ba215);padding:20px;border-radius:16px;">
                <strong>📊 Kết quả quy đổi:</strong><br>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px;">
                    <div>🎯 TOEIC:</div><div><strong>~${toeic} điểm</strong></div>
                    <div>🌍 IELTS:</div><div><strong>~${ielts}</strong></div>
                    <div>📖 CEFR:</div><div><strong>${cefr}</strong></div>
                </div>
            </div>
        `;
    });
}

// ==================== NỘI DUNG ÔN TẬP ====================
function initOnTap() {
    const modal = document.getElementById('syllabusModal');
    const closeModal = document.querySelector('.close-modal');
    const contents = { 
        math: '<h3>📐 Toán cao cấp</h3><ul><li>Giới hạn và liên tục</li><li>Đạo hàm và ứng dụng</li><li>Tích phân</li><li>Ma trận và định thức</li></ul><div class="tip-box">📝 Đề thi mẫu: 60% lý thuyết + 40% bài tập</div>', 
        python: '<h3>💻 Lập trình Python</h3><ul><li>Cú pháp cơ bản</li><li>Cấu trúc điều khiển</li><li>Hàm và module</li><li>Lập trình hướng đối tượng</li></ul><div class="tip-box">🎯 10 bài tập có lời giải chi tiết</div>', 
        network: '<h3>🌐 Mạng máy tính</h3><ul><li>Mô hình OSI và TCP/IP</li><li>Địa chỉ IP và Subnetting</li><li>Các giao thức mạng</li><li>Bảo mật mạng</li></ul><div class="tip-box">🔧 Thực hành cấu hình router và switch</div>' 
    };
    
    closeModal?.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });
    
    document.querySelectorAll('.btn-view').forEach(btn => { 
        btn.addEventListener('click', () => { 
            let type = btn.getAttribute('data-syllabus') || 'math'; 
            document.getElementById('modalContent').innerHTML = contents[type] || contents.math; 
            modal.style.display = 'flex'; 
        }); 
    });
}

// ==================== ĐIỀU KIỆN HỌC BỔNG ====================
function initHocBong() {
    document.getElementById('checkScholarshipBtn')?.addEventListener('click', () => {
        let gpa = parseFloat(document.getElementById('gpaFilter')?.value);
        let resultDiv = document.getElementById('scholarshipResult');
        
        if(isNaN(gpa)) { 
            resultDiv.innerHTML = '<span style="color:red;">⚠️ Vui lòng nhập GPA</span>'; 
            return; 
        }
        
        let eligible = []; 
        if(gpa >= 3.8) eligible.push('🏆 Học bổng Xuất sắc (5.000.000đ/kỳ)'); 
        if(gpa >= 3.5) eligible.push('⭐ Học bổng Tài năng trẻ (3.000.000đ/kỳ)'); 
        if(gpa >= 3.2) eligible.push('📚 Học bổng Khuyến khích (1.000.000đ/kỳ)');
        
        if(eligible.length > 0) {
            resultDiv.innerHTML = `<div style="background:#d4edda;padding:18px;border-radius:16px;"><strong>✅ Với GPA ${gpa}, bạn có thể đăng ký:</strong><br>${eligible.join('<br>')}</div>`;
        } else {
            resultDiv.innerHTML = `<div style="background:#fff3cd;padding:18px;border-radius:16px;">⚠️ Với GPA ${gpa}, bạn chưa đủ điều kiện học bổng. Cố gắng kỳ sau nhé! 💪</div>`;
        }
    });
}

// ==================== DỰ ĐOÁN ĐẠI HỌC - TỰ ĐỘNG TÍNH TỈ LỆ ====================
function initDuDoan() {
    const regionSelect = document.getElementById('filterRegion');
    const uniSelect = document.getElementById('filterUniversity');
    const scoreInput = document.getElementById('userScore');
    const yearSelect = document.getElementById('admissionYear');
    const typeSelect = document.getElementById('admissionType');
    const sensitivitySelect = document.getElementById('sensitivity');
    const predictionList = document.getElementById('predictionList');
    const scoreDisplayHeader = document.getElementById('scoreDisplayHeader');
    
    const db = window.universityDatabase || {};
    
    // Chuyển đổi điểm
    function convertScore(score, fromType, toType = 'THPT') {
        if (fromType === 'THPT') return score;
        if (fromType === 'HSA') return (score / 150) * 30;
        if (fromType === 'TSA') return (score / 100) * 30;
        return score;
    }
    
    // Tính tỉ lệ phần trăm đỗ dựa trên chênh lệch điểm và độ nhạy
    function calculateRate(diff, sensitivity) {
        // Công thức tính tỉ lệ dựa trên chênh lệch
        // diff = điểm của bạn - điểm chuẩn
        let rate = 50; // mặc định 50%
        
        if (sensitivity === 'strict') {
            if (diff >= 2) rate = 95;
            else if (diff >= 1.5) rate = 85;
            else if (diff >= 1) rate = 75;
            else if (diff >= 0.5) rate = 60;
            else if (diff >= 0) rate = 45;
            else if (diff >= -0.5) rate = 30;
            else if (diff >= -1) rate = 20;
            else rate = 10;
        } else if (sensitivity === 'normal') {
            if (diff >= 1.5) rate = 95;
            else if (diff >= 1) rate = 85;
            else if (diff >= 0.5) rate = 70;
            else if (diff >= 0) rate = 55;
            else if (diff >= -0.5) rate = 40;
            else if (diff >= -1) rate = 25;
            else if (diff >= -1.5) rate = 15;
            else rate = 8;
        } else { // loose
            if (diff >= 1) rate = 95;
            else if (diff >= 0.5) rate = 85;
            else if (diff >= 0) rate = 70;
            else if (diff >= -0.5) rate = 55;
            else if (diff >= -1) rate = 40;
            else if (diff >= -1.5) rate = 25;
            else if (diff >= -2) rate = 15;
            else rate = 8;
        }
        
        // Giới hạn trong khoảng 0-100
        return Math.min(100, Math.max(0, rate));
    }
    
    // Lấy class và message theo tỉ lệ
    function getRateInfo(rate) {
        if (rate >= 85) return { class: 'very-high', status: '🎉 Cơ hội rất cao!', message: 'Chúc mừng! Với điểm số này, bạn gần như chắc chắn đỗ. Hãy tự tin đăng ký nguyện vọng 1 nhé!' };
        if (rate >= 70) return { class: 'high', status: '✅ Cơ hội cao', message: 'Cơ hội đỗ rất khả quan. Bạn nên đặt nguyện vọng này ở vị trí ưu tiên.' };
        if (rate >= 50) return { class: 'medium', status: '⚠️ Cơ hội trung bình', message: 'Cơ hội 50-50. Nên có thêm phương án dự phòng và cân nhắc kỹ khi đặt nguyện vọng.' };
        if (rate >= 30) return { class: 'low', status: '😟 Cơ hội thấp', message: 'Khả năng đỗ không cao. Bạn có thể thử nhưng nên có nguyện vọng an toàn khác.' };
        return { class: 'very-low', status: '❌ Cơ hội rất thấp', message: 'Rất khó để đỗ ngành này với điểm số hiện tại. Hãy chọn ngành có điểm chuẩn thấp hơn hoặc cố gắng cải thiện điểm số.' };
    }
    
    // Dự đoán chính
    function predict() {
        const rawScore = parseFloat(scoreInput.value);
        const uniCode = uniSelect.value;
        const year = yearSelect.value;
        const admissionType = typeSelect.value;
        const sensitivity = sensitivitySelect.value;
        
        // Hiển thị điểm trên header
        if (!isNaN(rawScore) && rawScore > 0) {
            const convertedScore = convertScore(rawScore, admissionType);
            scoreDisplayHeader.innerHTML = `<i class="fas fa-star"></i> Điểm của bạn: <strong>${rawScore}</strong> (${admissionType === 'THPT' ? 'thang 30' : admissionType === 'HSA' ? 'thang 150' : 'thang 100'}) → Quy đổi: <strong>${convertedScore.toFixed(2)}</strong>/30`;
        } else {
            scoreDisplayHeader.innerHTML = `<i class="fas fa-star"></i> Chưa nhập điểm`;
        }
        
        // Kiểm tra điều kiện
        if (uniCode === 'all' || uniCode === null) {
            predictionList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #94a3b8;">
                    <i class="fas fa-university" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
                    Vui lòng chọn một trường đại học để xem dự đoán chi tiết
                </div>`;
            return;
        }
        
        if (isNaN(rawScore) || rawScore <= 0) {
            predictionList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #94a3b8;">
                    <i class="fas fa-chart-line" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
                    Vui lòng nhập điểm thi của bạn để xem tỉ lệ đỗ
                </div>`;
            return;
        }
        
        const userScore = convertScore(rawScore, admissionType);
        const university = db[uniCode];
        
        if (!university) {
            predictionList.innerHTML = `<div style="text-align: center; padding: 40px;">Không tìm thấy thông tin trường</div>`;
            return;
        }
        
        // Lấy tất cả ngành của trường
        const subjects = Object.entries(university.subjects);
        
        if (subjects.length === 0) {
            predictionList.innerHTML = `<div style="text-align: center; padding: 40px;">Trường này chưa có dữ liệu ngành học</div>`;
            return;
        }
        
        // Tính toán cho từng ngành
        let results = subjects.map(([code, subject]) => {
            const standardScore = subject.target;
            const diff = userScore - standardScore;
            const rate = calculateRate(diff, sensitivity);
            const rateInfo = getRateInfo(rate);
            
            return {
                code: code,
                name: subject.name,
                combo: subject.combo,
                standardScore: standardScore,
                userScore: userScore,
                diff: diff,
                rate: rate,
                rateClass: rateInfo.class,
                rateStatus: rateInfo.status,
                message: rateInfo.message,
                year: year
            };
        });
        
        // Sắp xếp theo tỉ lệ đỗ giảm dần
        results.sort((a, b) => b.rate - a.rate);
        
        // Hiển thị kết quả
        predictionList.innerHTML = results.map(r => {
            // Màu cho biểu đồ tròn
            const color = r.rate >= 85 ? '#10b981' : r.rate >= 70 ? '#3b82f6' : r.rate >= 50 ? '#f59e0b' : r.rate >= 30 ? '#ef4444' : '#6b7280';
            
            return `
                <div class="prediction-item ${r.rateClass}">
                    <div class="prediction-header">
                        <div class="prediction-subject-name">
                            📚 ${r.name}
                            <span class="prediction-combo">${r.combo}</span>
                        </div>
                        <div class="prediction-rate">
                            <div class="rate-circle" style="--percent: ${r.rate * 3.6}deg; --color: ${color}">
                                <div class="rate-value">${Math.round(r.rate)}%</div>
                            </div>
                            <div class="rate-label">Tỉ lệ đỗ</div>
                        </div>
                    </div>
                    
                    <div class="prediction-scores">
                        <div class="score-item">
                            <div class="score-label">Điểm của bạn</div>
                            <div class="score-value your">${r.userScore.toFixed(2)}</div>
                        </div>
                        <div class="score-item">
                            <div class="score-label">Điểm chuẩn ${r.year}</div>
                            <div class="score-value standard">${r.standardScore.toFixed(2)}</div>
                        </div>
                        <div class="score-item">
                            <div class="score-label">Chênh lệch</div>
                            <div class="diff-value ${r.diff >= 0 ? 'diff-positive' : 'diff-negative'}">
                                ${r.diff >= 0 ? '+' : ''}${r.diff.toFixed(2)}
                            </div>
                        </div>
                        <div class="score-item">
                            <div class="score-label">Đánh giá</div>
                            <div class="diff-value" style="color: ${r.rate >= 70 ? '#10b981' : r.rate >= 50 ? '#f59e0b' : '#ef4444'}">
                                ${r.rateStatus}
                            </div>
                        </div>
                    </div>
                    
                    <div class="prediction-message">
                        💬 ${r.message}
                    </div>
                    
                    <div class="prediction-note">
                        <i class="fas fa-chart-line"></i> Dựa trên điểm chuẩn năm ${r.year} | Độ tin cậy: ${Math.round(r.rate)}%
                    </div>
                </div>
            `;
        }).join('');
        
        // Cuộn đến kết quả
        document.getElementById('predictionResult').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Đổ danh sách trường
    function loadUniversities() {
        const region = regionSelect.value;
        let universities = {};
        
        for (const [code, data] of Object.entries(db)) {
            if (region === 'all' || data.region === region) {
                universities[code] = data;
            }
        }
        
        uniSelect.innerHTML = '<option value="all">-- Chọn trường --</option>';
        for (const [code, data] of Object.entries(universities)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = `${data.name} (${data.location}) - ${Object.keys(data.subjects).length} ngành`;
            uniSelect.appendChild(option);
        }
        
        // Reset kết quả
        predictionList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
                <i class="fas fa-university" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
                Vui lòng chọn trường và nhập điểm để xem dự đoán
            </div>`;
    }
    
    // Gán sự kiện - TỰ ĐỘNG TÍNH KHI THAY ĐỔI BẤT KỲ
    regionSelect?.addEventListener('change', () => {
        loadUniversities();
        predict();
    });
    uniSelect?.addEventListener('change', predict);
    scoreInput?.addEventListener('input', predict);
    yearSelect?.addEventListener('change', predict);
    typeSelect?.addEventListener('change', predict);
    sensitivitySelect?.addEventListener('change', predict);
    
    // Khởi tạo
    loadUniversities();
}

// ==================== THAM KHẢO ĐẠI HỌC ====================
function initUniversities() {
    const container = document.getElementById('schoolList');
    const searchInput = document.getElementById('searchTruong');
    const khuVucSelect = document.getElementById('filterKhuVuc');
    
    function renderList() {
        let searchTerm = searchInput?.value?.toLowerCase() || '';
        let region = khuVucSelect?.value || 'all';
        let filtered = universityList.filter(u => u.name.toLowerCase().includes(searchTerm) && (region === 'all' || u.region === region));
        
        if(container) { 
            if(filtered.length === 0) {
                container.innerHTML = '<div style="text-align:center;padding:40px;color:#64748b;">Không tìm thấy trường nào</div>';
            } else {
                container.innerHTML = filtered.map(u => `
                    <div class="school-card" onclick="showSchoolDetail(${u.id})">
                        <div class="badge">${u.code}</div>
                        <h3>${u.name}</h3>
                        <div class="school-location"><i class="fas fa-map-marker-alt"></i> ${u.location}</div>
                        <div class="school-score">Xem chi tiết →</div>
                    </div>
                `).join('');
            }
        }
    }
    
    searchInput?.addEventListener('input', renderList);
    khuVucSelect?.addEventListener('change', renderList);
    renderList();
}

window.showSchoolDetail = function(id) {
    let school = universityList.find(u => u.id === id);
    if(!school) return;
    document.getElementById('schoolList').style.display = 'none';
    let detailDiv = document.getElementById('schoolDetail');
    detailDiv.style.display = 'block';
    document.getElementById('detailSchoolName').innerHTML = school.name;
    document.getElementById('detailContent').innerHTML = `
        <div style="padding:20px;">
            <div style="background:#f8fafc;padding:20px;border-radius:18px;margin-bottom:20px;">
                <p><strong>📌 Mã trường:</strong> ${school.code}</p>
                <p><strong>📍 Khu vực:</strong> ${school.location}</p>
                <p><strong>🏛️ Loại trường:</strong> Đại học công lập</p>
            </div>
            <button class="btn-back" onclick="backToList()" style="margin-top:10px;">
                <i class="fas fa-arrow-left"></i> Quay lại danh sách
            </button>
        </div>
    `;
};

window.backToList = function() { 
    document.getElementById('schoolList').style.display = 'grid'; 
    document.getElementById('schoolDetail').style.display = 'none'; 
    initUniversities(); 
};

// ==================== GÓP Ý ====================
// ==================== GÓP Ý - GỬI VỀ WEBHOOK ====================
function initFeedback() {
    const sendBtn = document.getElementById('sendFeedbackBtn');
    
    // ⚠️ THAY WEBHOOK URL NÀY BẰNG CỦA BẠN ⚠️
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1500181202085220493/NV9iQdkmIzE11XVQ8cd7ksiNDpODT4TI_zU1SKNi6fvbVhaNvGnsjlf31SiIOZQ6LDWG";
    
    if (!sendBtn) return;
    
    sendBtn.addEventListener('click', async () => {
        const nameInput = document.getElementById('fbName');
        const emailInput = document.getElementById('fbEmail');
        const typeSelect = document.getElementById('fbType');
        const contentTextarea = document.getElementById('fbContent');
        
        const name = nameInput?.value || 'Không có tên';
        const email = emailInput?.value || '';
        const type = typeSelect?.value || 'Góp ý';
        const content = contentTextarea?.value || '';
        
        // Kiểm tra dữ liệu bắt buộc
        if (!email || !content) {
            alert('⚠️ Vui lòng nhập đầy đủ email và nội dung!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('⚠️ Vui lòng nhập email hợp lệ!');
            return;
        }
        
        // Hiệu ứng nút
        const originalText = sendBtn.textContent;
        sendBtn.textContent = '⏳ Đang gửi...';
        sendBtn.disabled = true;
        
        // Thời gian hiện tại
        const now = new Date();
        const timestamp = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        
        // Màu sắc theo loại phản hồi
        let color = 0x00ff00; // xanh - góp ý
        if (type === 'Báo lỗi hệ thống') color = 0xff0000; // đỏ - báo lỗi
        if (type === 'Đề xuất tính năng') color = 0xffa500; // cam - đề xuất
        
        // Tạo embed data
        const embedData = {
            username: "Hỗ Trợ Học Tập - Góp ý",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
            embeds: [{
                title: `📢 ${type}`,
                color: color,
                fields: [
                    { name: "👤 Người gửi", value: name, inline: true },
                    { name: "📧 Email", value: email, inline: true },
                    { name: "⏰ Thời gian", value: timestamp, inline: true },
                    { name: "📝 Nội dung", value: content.length > 1000 ? content.substring(0, 1000) + "..." : content, inline: false }
                ],
                footer: { text: "Hỗ Trợ Học Tập - Hệ thống tính điểm thông minh" },
                timestamp: new Date().toISOString()
            }]
        };
        
        try {
            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(embedData)
            });
            
            if (response.ok) {
                alert(`✅ Gửi ${type} thành công!\n\nCảm ơn bạn đã đóng góp.`);
                // Reset form
                if (nameInput) nameInput.value = '';
                if (emailInput) emailInput.value = '';
                if (contentTextarea) contentTextarea.value = '';
                if (typeSelect) typeSelect.selectedIndex = 0;
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.error('Lỗi gửi webhook:', error);
            alert(`❌ Gửi thất bại! Vui lòng thử lại sau.`);
        } finally {
            sendBtn.textContent = originalText;
            sendBtn.disabled = false;
        }
    });
}

// ==================== DARK MODE ====================
function initDarkMode() {
    const btn = document.getElementById('darkModeToggle');
    const moon = btn?.querySelector('.fa-moon'); 
    const sun = btn?.querySelector('.fa-sun');
    let dark = localStorage.getItem('darkMode') === 'true';
    
    if(dark) { 
        document.body.classList.add('dark-mode'); 
        if(moon) moon.style.display = 'none'; 
        if(sun) sun.style.display = 'block'; 
    }
    
    btn?.addEventListener('click', () => { 
        document.body.classList.toggle('dark-mode'); 
        let isDark = document.body.classList.contains('dark-mode'); 
        localStorage.setItem('darkMode', isDark); 
        if(moon && sun) { 
            if(isDark) { 
                moon.style.display = 'none'; 
                sun.style.display = 'block'; 
            } else { 
                moon.style.display = 'block'; 
                sun.style.display = 'none'; 
            } 
        } 
    });
}

// ==================== QR CODE TRONG TAB ====================
function showQRCodeInTab(type) {
    const qrDisplay = document.getElementById('qrDisplayArea');
    const qrImage = document.getElementById('qrCodeImageTab');
    const qrInfo = document.getElementById('qrInfoTab');
    
    const data = qrDataTab[type];
    qrImage.src = data.image;
    qrInfo.innerHTML = data.info;
    qrDisplay.style.display = 'block';
    qrDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
// ==================== MẬT KHẨU QUẢN TRỊ ====================
const ADMIN_PASSWORD = "Trami3101@";
let isAdminMode = false;

function verifyAdmin() {
    const passwordInput = document.getElementById('adminPassword');
    const authMessage = document.getElementById('authMessage');
    const enteredPassword = passwordInput?.value || '';
    
    if (enteredPassword === ADMIN_PASSWORD) {
        isAdminMode = true;
        authMessage.innerHTML = '<div style="color:#10b981; padding:10px; background:#d4edda; border-radius:12px;">✅ Xác nhận thành công!</div>';
        document.getElementById('adminAuthArea').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        sessionStorage.setItem('admin_logged', 'true');
        renderDocumentList();
        renderDocumentsToHome();
    } else {
        authMessage.innerHTML = '<div style="color:#ef4444; padding:10px; background:#fee2e2; border-radius:12px;">❌ Mật khẩu không đúng!</div>';
    }
}

function logoutAdmin() {
    isAdminMode = false;
    sessionStorage.removeItem('admin_logged');
    document.getElementById('adminAuthArea').style.display = 'block';
    document.getElementById('adminContent').style.display = 'none';
    document.getElementById('adminPassword').value = '';
    document.getElementById('authMessage').innerHTML = '';
    renderDocumentList();
    renderDocumentsToHome();
}

function checkAdminSession() {
    if (sessionStorage.getItem('admin_logged') === 'true') {
        isAdminMode = true;
        document.getElementById('adminAuthArea').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
    }
}

let documents = [];

function loadDocuments() {
    const saved = localStorage.getItem('hotrohoctap_documents');
    if (saved) {
        documents = JSON.parse(saved);
    } else {
        documents = [
            { id: Date.now(), subject: "Toán cao cấp", category: "toan", desc: "Đạo hàm, tích phân, ma trận", link: "#", createdAt: new Date().toISOString() },
            { id: Date.now() + 1, subject: "Lập trình Python", category: "python", desc: "Cú pháp, OOP, thư viện", link: "#", createdAt: new Date().toISOString() },
            { id: Date.now() + 2, subject: "Mạng máy tính", category: "network", desc: "Mô hình OSI, TCP/IP", link: "#", createdAt: new Date().toISOString() }
        ];
        saveDocuments();
    }
    renderDocumentList();
    renderDocumentsToHome();
}

function saveDocuments() {
    localStorage.setItem('hotrohoctap_documents', JSON.stringify(documents));
}

function renderDocumentList() {
    const container = document.getElementById('docListDisplay');
    if (!container) return;
    if (documents.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;">📭 Chưa có tài liệu nào</div>';
        return;
    }
    container.innerHTML = documents.map(doc => `
        <div class="doc-item">
            ${isAdminMode ? `<button class="delete-doc" onclick="deleteDocument(${doc.id})">✕</button>` : ''}
            <div class="doc-category">${getCategoryName(doc.category)}</div>
            <div class="doc-title">📚 ${doc.subject}</div>
            <div class="doc-desc">${doc.desc}</div>
            <a href="${doc.link}" target="_blank" class="doc-link"><i class="fas fa-download"></i> Tải tài liệu</a>
        </div>
    `).join('');
}

function renderDocumentsToHome() {
    const container = document.querySelector('#tab-ontap .subject-grid');
    if (!container) return;
    container.innerHTML = documents.map(doc => `
        <div class="subject-item">
            <div class="subject-icon"><i class="fas fa-book-open"></i></div>
            <h3>${doc.subject}</h3>
            <p>${doc.desc}</p>
            <a href="${doc.link}" target="_blank" class="btn-view">Xem tài liệu</a>
        </div>
    `).join('');
}

function getCategoryName(cat) {
    const cats = { toan: "📐 Toán", python: "🐍 Python", network: "🌐 Mạng", other: "📁 Khác" };
    return cats[cat] || "📁 Tài liệu";
}

function addDocument(subject, category, desc, link) {
    if (!isAdminMode) { alert('🔒 Chỉ quản trị viên!'); return false; }
    documents.unshift({ id: Date.now(), subject, category, desc, link, createdAt: new Date().toISOString() });
    saveDocuments();
    renderDocumentList();
    renderDocumentsToHome();
    return true;
}

function deleteDocument(id) {
    if (!isAdminMode) { alert('🔒 Chỉ quản trị viên!'); return; }
    if (confirm('Xóa tài liệu này?')) {
        documents = documents.filter(doc => doc.id !== id);
        saveDocuments();
        renderDocumentList();
        renderDocumentsToHome();
    }
}

function clearAllDocuments() {
    if (!isAdminMode) { alert('🔒 Chỉ quản trị viên!'); return; }
    if (confirm('Xóa TẤT CẢ tài liệu?')) {
        documents = [];
        saveDocuments();
        renderDocumentList();
        renderDocumentsToHome();
    }
}

function initDocManager() {
    document.getElementById('verifyAdminBtn')?.addEventListener('click', verifyAdmin);
    document.getElementById('logoutAdminBtn')?.addEventListener('click', logoutAdmin);
    document.getElementById('pushToDiscordBtn')?.addEventListener('click', () => {
        const subject = document.getElementById('docSubject')?.value;
        const category = document.getElementById('docCategory')?.value;
        const desc = document.getElementById('docDesc')?.value;
        const link = document.getElementById('docLink')?.value;
        if (!subject || !link) { alert('⚠️ Nhập đủ thông tin!'); return; }
        addDocument(subject, category, desc, link);
        document.getElementById('docSubject').value = '';
        document.getElementById('docDesc').value = '';
        document.getElementById('docLink').value = '';
        alert('✅ Đã thêm tài liệu!');
    });
    document.getElementById('clearDocsBtn')?.addEventListener('click', clearAllDocuments);
}
// ==================== MOBILE MENU ====================
function closeMobileMenu() { 
    document.querySelector('.sidebar')?.classList.remove('active'); 
    document.querySelector('.hamburger')?.classList.remove('active'); 
    document.getElementById('mobileOverlay')?.classList.remove('active'); 
    document.body.style.overflow = ''; 
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn'); 
    const sidebar = document.querySelector('.sidebar'); 
    const closeBtn = document.getElementById('closeSidebar'); 
    const overlay = document.getElementById('mobileOverlay');
    
    if(hamburger) { 
        hamburger.addEventListener('click', () => { 
            sidebar?.classList.toggle('active'); 
            hamburger.classList.toggle('active'); 
            overlay?.classList.toggle('active'); 
            document.body.style.overflow = sidebar?.classList.contains('active') ? 'hidden' : ''; 
        }); 
    }
    closeBtn?.addEventListener('click', closeMobileMenu); 
    overlay?.addEventListener('click', closeMobileMenu);
}

// ==================== HOME TAB LINKS ====================
function initHomeTabLinks() {
    document.querySelectorAll('[data-tab-link]').forEach(el => { 
        el.addEventListener('click', () => { 
            let tabId = el.getAttribute('data-tab-link'); 
            if(tabId) { 
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active')); 
                document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active')); 
                let targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`); 
                if(targetNav) targetNav.classList.add('active'); 
                let targetTab = document.getElementById(tabId); 
                if(targetTab) targetTab.classList.add('active'); 
                window.scrollTo({top: 0}); 
                if(window.innerWidth <= 768) closeMobileMenu(); 
            } 
        }); 
    });
}
// Chống click chuột phải
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('⚠️ Nội dung được bảo vệ bởi Trịnh Văn Tú!');
});

// Chống F12, Ctrl+Shift+I, Ctrl+U
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J')) {
        e.preventDefault();
        alert('⚠️ Công cụ dành cho nhà phát triển đã bị vô hiệu hóa!');
    }
});

// Chống chọn văn bản
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
// Cảnh báo khi rời trang nếu có dữ liệu chưa lưu
window.addEventListener('beforeunload', function(e) {
    const hasInput = document.querySelectorAll('.score-input, .score-input-hp, .form-input').some(input => input.value !== '');
    if (hasInput) {
        e.preventDefault();
        e.returnValue = '⚠️ Bạn có dữ liệu chưa lưu. Bạn có chắc muốn rời khỏi trang?';
        return e.returnValue;
    }
});
// ==================== FALLING ANIMATION ====================

// 1. Hiệu ứng rơi khi scroll vào viewport
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.feature-card, .team-card, .contributor-card, .section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
}

// 2. Tạo hiệu ứng hạt rơi (particles)
function createFallingParticle() {
    const particle = document.createElement('div');
    particle.className = 'falling-particle';
    
    // Random kích thước
    const size = Math.random() * 8 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random màu sắc
    const colors = ['#667eea', '#764ba2', '#10b981', '#f59e0b', '#ef4444'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    
    // Random vị trí xuất phát
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-20px';
    
    // Random thời gian rơi
    const duration = Math.random() * 3 + 2;
    particle.style.animation = `particleFall ${duration}s linear forwards`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.body.appendChild(particle);
    
    // Xóa particle sau khi rơi xong
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// 3. Bật/tắt hiệu ứng hạt rơi
let particleInterval = null;

function startFallingParticles() {
    if (particleInterval) clearInterval(particleInterval);
    particleInterval = setInterval(() => {
        // Chỉ tạo particle khi trang đang được xem (không phải tab khác)
        if (!document.hidden) {
            createFallingParticle();
        }
    }, 500);
}

function stopFallingParticles() {
    if (particleInterval) {
        clearInterval(particleInterval);
        particleInterval = null;
    }
}

// 4. Hiệu ứng rơi khi load trang
function pageFallEffect() {
    // Ẩn toàn bộ nội dung chính ban đầu
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.5s ease';
            mainContent.style.opacity = '1';
        }, 100);
    }
}

// 5. Thêm hiệu ứng cho các nút khi click
function addButtonRippleEffect() {
    const buttons = document.querySelectorAll('.btn-reset, .btn-calculate, .btn-convert, .btn-submit, .btn-donate-qr');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.top = e.clientY - this.getBoundingClientRect().top + 'px';
            ripple.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.5)';
            ripple.style.transform = 'scale(1)';
            ripple.style.transition = 'all 0.5s ease';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.style.width = '200px';
                ripple.style.height = '200px';
                ripple.style.transform = 'scale(1)';
                ripple.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                ripple.remove();
            }, 500);
        });
    });
}

// ==================== KHỞI TẠO ====================
// Gọi các hàm khi trang load
setTimeout(() => {
    initScrollReveal();
    addButtonRippleEffect();
}, 100);

// Chỉ bật particle khi ở tab home
let isHomeActive = true;

// Theo dõi khi chuyển tab
const originalInitTabs = initTabs;
initTabs = function() {
    originalInitTabs();
    
    // Kiểm tra tab đang active
    const checkActiveTab = setInterval(() => {
        const homeTab = document.getElementById('tab-home');
        if (homeTab && homeTab.classList.contains('active')) {
            if (!isHomeActive) {
                isHomeActive = true;
                startFallingParticles();
            }
        } else {
            if (isHomeActive) {
                isHomeActive = false;
                stopFallingParticles();
            }
        }
    }, 500);
    
    // Dọn dẹp interval khi cần
    window.addEventListener('beforeunload', () => {
        clearInterval(checkActiveTab);
        stopFallingParticles();
    });
};

// Bắt đầu hiệu ứng hạt rơi
startFallingParticles();
pageFallEffect();

// Chat 
// ==================== CHAT CÔNG CỘNG ====================
let currentUserName = '';
let currentUserId = '';
let isNameLocked = false;
let lockExpiryTime = null;

// Khởi tạo chat
function initChat() {
    if (!window.chatAPI) {
        console.error('❌ Chat API chưa được tải!');
        setTimeout(() => initChat(), 500);
        return;
    }
    
    window.chatAPI.loadChatData();
    currentUserId = window.chatAPI.getCurrentUserId();
    
    // Kiểm tra trạng thái khóa từ localStorage
    const savedLock = localStorage.getItem('chat_name_locked');
    const savedExpiry = localStorage.getItem('chat_lock_expiry');
    
    if (savedLock === 'true' && savedExpiry) {
        lockExpiryTime = parseInt(savedExpiry);
        if (Date.now() >= lockExpiryTime) {
            isNameLocked = false;
            localStorage.removeItem('chat_name_locked');
            localStorage.removeItem('chat_lock_expiry');
        } else {
            isNameLocked = true;
        }
    } else {
        isNameLocked = false;
    }
    
    currentUserName = window.chatAPI.getCurrentUserName();
    
    const nameInput = document.getElementById('chatName');
    if (nameInput) {
        nameInput.value = currentUserName;
        nameInput.readOnly = isNameLocked;
        
        nameInput.addEventListener('change', function() {
            if (isNameLocked) {
                const remaining = getRemainingTime();
                alert(`🔒 Tên đã bị khóa! Còn ${remaining} nữa mới được đổi tên.`);
                this.value = currentUserName;
                return;
            }
            const newName = this.value.trim();
            if (newName && newName !== currentUserName) {
                updateUserName(newName);
            }
        });
    }
    
    // Nút random tên
    const randomBtn = document.getElementById('randomNameBtn');
    if (randomBtn) {
        randomBtn.onclick = function() {
            if (isNameLocked) {
                const remaining = getRemainingTime();
                alert(`🔒 Tên đã bị khóa! Còn ${remaining} nữa mới được đổi tên.`);
                return;
            }
            const newName = window.chatAPI.randomizeUserName();
            document.getElementById('chatName').value = newName;
            updateUserName(newName);
        };
    }
    
    // Cập nhật UI banner
    updateLockUI();
    
    // Hiển thị tin nhắn
    renderChatMessages();
    if (window.chatAPI) {
        window.chatAPI.startSyncListener(() => {
            renderChatMessages(); // Tự động cập nhật
            updateLockUI();
        });
    }
    // Tự động cập nhật mỗi 3 giây
    if (window.chatRefreshInterval) clearInterval(window.chatRefreshInterval);
    window.chatRefreshInterval = setInterval(() => {
        renderChatMessages();
        updateLockUI(); // Cập nhật lại banner khi có thay đổi
    }, 3000);
}

// Cập nhật UI banner khóa tên (CHỈ CÓ NÚT KHÓA, KHÔNG CÓ MỞ)
function updateLockUI() {
    const lockBanner = document.getElementById('nameLockBanner');
    if (!lockBanner) return;
    
    if (isNameLocked) {
        // ĐÃ KHÓA - KHÔNG CÓ NÚT MỞ, CHỈ HIỂN THỊ THÔNG BÁO
        const remaining = getRemainingTime();
        lockBanner.innerHTML = `
            <div style="background: #fee2e2; border-radius: 16px; padding: 12px 16px;">
                <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <i class="fas fa-lock" style="color: #ef4444;"></i>
                    <strong style="color: #ef4444;">🔒 TÊN ĐÃ BỊ KHÓA</strong>
                    <span style="color: #64748b;">Còn ${remaining} nữa mới được đổi tên</span>
                </div>
            </div>
        `;
    } else {
        // CHƯA KHÓA - HIỂN THỊ NÚT KHÓA
        lockBanner.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; background: #d4edda; border-radius: 16px; padding: 12px 16px;">
                <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <i class="fas fa-unlock" style="color: #10b981;"></i>
                    <strong style="color: #10b981;">🔓 TÊN ĐANG MỞ</strong>
                    <span style="color: #64748b;">Mọi người có thể đổi tên</span>
                </div>
                <button id="toggleLockBtn" style="background: #ef4444; color: white; border: none; padding: 8px 20px; border-radius: 30px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-lock"></i> Khóa tên (7 ngày)
                </button>
            </div>
        `;
        
        // Gắn sự kiện cho nút khóa
        const toggleBtn = document.getElementById('toggleLockBtn');
        if (toggleBtn) {
            toggleBtn.onclick = showLockConfirmPopup;
        }
    }
}

// Popup xác nhận khóa (CHỈ KHÓA, KHÔNG CÓ MỞ)
function showLockConfirmPopup() {
    if (isNameLocked) {
        alert('🔒 Tên đã bị khóa! Không thể mở lại cho đến khi hết 7 ngày.');
        return;
    }
    
    const popup = document.createElement('div');
    popup.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);backdrop-filter:blur(5px);display:flex;justify-content:center;align-items:center;z-index:10001;';
    popup.innerHTML = `
        <div style="background:white;border-radius:24px;padding:25px;max-width:350px;width:90%;text-align:center;">
            <h3 style="font-size:22px;margin-bottom:15px;color:#1e293b;">🔒 Khóa tên</h3>
            <p style="color:#64748b;margin-bottom:25px;line-height:1.5;">
                ⚠️ Bạn có chắc muốn KHÓA tên?<br>
                <strong>Sau khi khóa, 7 NGÀY sau mới có thể đổi tên!</strong><br>
                Không thể mở khóa sớm bằng tay.
            </p>
            <div style="display:flex;gap:15px;justify-content:center;">
                <button id="popupCancel" style="background:#e2e8f0;color:#475569;padding:10px 25px;border-radius:40px;font-weight:600;border:none;cursor:pointer;">Hủy</button>
                <button id="popupConfirm" style="background:#ef4444;color:white;padding:10px 25px;border-radius:40px;font-weight:600;border:none;cursor:pointer;">Xác nhận khóa</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    document.getElementById('popupCancel')?.addEventListener('click', () => popup.remove());
    document.getElementById('popupConfirm')?.addEventListener('click', () => {
        // Khóa 7 ngày
        isNameLocked = true;
        lockExpiryTime = Date.now() + (7 * 24 * 60 * 60 * 1000);
        localStorage.setItem('chat_name_locked', 'true');
        localStorage.setItem('chat_lock_expiry', lockExpiryTime.toString());
        
        const nameInput = document.getElementById('chatName');
        if (nameInput) nameInput.readOnly = true;
        
        const expiryDate = new Date(lockExpiryTime);
        alert(`🔒 Đã khóa tên! Sẽ tự động mở khóa vào:\n${expiryDate.toLocaleString('vi-VN')}\n\nKhông thể mở khóa sớm!`);
        
        updateLockUI();
        popup.remove();
    });
}

// Lấy thời gian còn lại
function getRemainingTime() {
    if (!lockExpiryTime) return 'không xác định';
    const remaining = lockExpiryTime - Date.now();
    if (remaining <= 0) return '0 ngày';
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (86400000)) / (1000 * 60 * 60));
    if (days > 0) return `${days} ngày ${hours} giờ`;
    if (hours > 0) return `${hours} giờ`;
    return `dưới 1 giờ`;
}

// Cập nhật tên người dùng
function updateUserName(newName) {
    if (newName.length > 30) newName = newName.substring(0, 30);
    currentUserName = newName;
    window.chatAPI.setCurrentUserName(newName);
    renderChatMessages();
}

// Gửi tin nhắn
function sendChatMessage() {
    if (!window.chatAPI) {
        alert('❌ Chat chưa sẵn sàng!');
        return;
    }
    
    const nameInput = document.getElementById('chatName');
    const messageInput = document.getElementById('chatMessage');
    
    let name = nameInput?.value.trim();
    const message = messageInput?.value.trim();
    
    if (!name) {
        name = currentUserName;
        if (nameInput) nameInput.value = name;
    }
    
    if (!message) {
        alert('⚠️ Vui lòng nhập tin nhắn!');
        return;
    }
    
    if (isNameLocked && name !== currentUserName) {
        const remaining = getRemainingTime();
        alert(`🔒 Tên đã khóa! Còn ${remaining} nữa mới được đổi tên.`);
        if (nameInput) nameInput.value = currentUserName;
        return;
    }
    
    if (name.length > 30) name = name.substring(0, 30);
    if (message.length > 500) {
        alert('⚠️ Tin nhắn quá dài!');
        return;
    }
    
    if (name !== currentUserName) {
        currentUserName = name;
        window.chatAPI.setCurrentUserName(name);
    }
    
    window.chatAPI.addChatMessage(name, message);
    if (messageInput) messageInput.value = '';
    renderChatMessages();
    messageInput?.focus();
}

// Hiển thị tin nhắn
function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    
    let messages = window.chatAPI ? window.chatAPI.getAllChatMessages() : [];
    
    // Kiểm tra và Fix lỗi dữ liệu từ Google Sheet
    messages = messages.filter(msg => msg && msg.name && msg.message);
    
    // Sắp xếp theo thời gian
    messages = [...messages].sort((a, b) => {
        let timeA = a.time ? new Date(a.time).getTime() : 0;
        let timeB = b.time ? new Date(b.time).getTime() : 0;
        return timeA - timeB;
    });
    
    const currentUser = window.chatAPI ? window.chatAPI.getCurrentUserId() : '';
    
    const messageCountSpan = document.getElementById('messageCount');
    if (messageCountSpan) {
        messageCountSpan.innerHTML = `📨 ${messages.length} tin nhắn`;
    }
    
    if (messages.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:#94a3b8;padding:40px;">💬 Chưa có tin nhắn nào. Hãy là người đầu tiên!</div>`;
        return;
    }
    
    container.innerHTML = messages.map(msg => {
        const isOwnMessage = msg.userId === currentUser;
        const canDelete = isOwnMessage;
        
        // Xử lý thời gian an toàn
        let timeStr = '';
        try {
            const date = new Date(msg.time);
            if (!isNaN(date.getTime())) {
                timeStr = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
            } else {
                timeStr = 'vừa xong';
            }
        } catch(e) {
            timeStr = 'vừa xong';
        }
        
        const isSystem = msg.userId === 'system' || msg.name === 'Hệ thống';
        let displayName = msg.name || 'Khách';
        
        if (isOwnMessage && currentUserName && currentUserName !== msg.name) {
            displayName = `${msg.name} → ${currentUserName}`;
        }
        
        if (isSystem) {
            return `<div style="text-align:center;margin:8px 0;">
                <span style="background:#e2e8f0;padding:4px 12px;border-radius:20px;font-size:11px;color:#64748b;">
                    🔔 ${escapeHtml(msg.message || '')}
                </span>
            </div>`;
        }
        
        return `
            <div class="chat-message ${isOwnMessage ? 'chat-message-own' : 'chat-message-other'}">
                ${canDelete ? `<button class="chat-delete-btn" onclick="deleteChatMessage(${msg.id})">✕</button>` : ''}
                <div class="chat-bubble ${isOwnMessage ? 'chat-bubble-own' : 'chat-bubble-other'}">
                    <div class="chat-name">
                        <span class="chat-name-text">${escapeHtml(displayName)}</span>
                    </div>
                    <div>${escapeHtml(msg.message || '')}</div>
                    <div class="chat-time">${timeStr}</div>
                </div>
            </div>
        `;
    }).join('');
    
    container.scrollTop = container.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function deleteChatMessage(messageId) {
    if (!window.chatAPI) return;
    const messages = window.chatAPI.getAllChatMessages();
    const msg = messages.find(m => m.id == messageId);
    if (msg && msg.userId === window.chatAPI.getCurrentUserId()) {
        window.chatAPI.deleteChatMessage(messageId, false);
        renderChatMessages();
    } else {
        alert('❌ Bạn chỉ có thể xóa tin nhắn của chính mình!');
    }
}

function clearAllChatMessages() {
    if (!window.chatAPI) return;
    const currentName = document.getElementById('chatName')?.value || '';
    const isAdmin = ['Admin', 'admin', 'Trịnh Văn Tú', 'F9'].includes(currentName);
    if (!isAdmin) {
        alert('❌ Chỉ Admin mới có quyền xóa toàn bộ tin nhắn!');
        return;
    }
    if (confirm('⚠️ Xóa TOÀN BỘ tin nhắn? Không thể hoàn tác!')) {
        window.chatAPI.clearAllChatMessages();
        renderChatMessages();
        alert('✅ Đã xóa toàn bộ!');
    }
}

// Khởi tạo khi DOM ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initChat();
        
        // Bắt đầu lắng nghe tin nhắn mới
        if (window.chatAPI) {
            window.chatAPI.startSyncListener(() => {
                // Tự động cập nhật giao diện khi có tin nhắn mới
                renderChatMessages();
                console.log('🔄 Tự động cập nhật tin nhắn mới');
            });
        }
    }, 500);
    
    const clearBtn = document.getElementById('clearAllChatBtn');
    if (clearBtn) {
        clearBtn.onclick = clearAllChatMessages;
    }
    
    const sendBtn = document.getElementById('sendChatBtn');
    if (sendBtn) {
        sendBtn.onclick = function(e) {
            e.preventDefault();
            sendChatMessage();
        };
    }
    
    const messageInput = document.getElementById('chatMessage');
    if (messageInput) {
        messageInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendChatMessage();
            }
        };
    }
});

// Dọn dẹp interval
window.addEventListener('beforeunload', function() {
    if (window.chatRefreshInterval) {
        clearInterval(window.chatRefreshInterval);
    }
});

// Fix Ctrl A + Tất Cả 
// ==================== FIX TẤT CẢ (Ctrl+A, khóa chat, bôi đen) ====================
(function() {
    // 1. FIX Ctrl+A - Cho phép bôi đen toàn trang
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'a') {
            // Cho phép Ctrl+A hoạt động bình thường
            return true;
        }
    });
    
    // 2. Bỏ chặn selectstart để có thể bôi đen text
    document.removeEventListener('selectstart', function(e) { e.preventDefault(); });
    document.onselectstart = null;
    
    // 3. Cho phép copy
    document.removeEventListener('copy', function(e) { e.preventDefault(); });
    
    // 4. KHÓA CHAT (chỉ admin mới mở được)
    let isChatLocked = localStorage.getItem('chat_locked') === 'true';
    
    function updateChatLockUI() {
        const chatContainer = document.querySelector('#tab-chat .chat-container');
        const chatInputArea = document.getElementById('chatInputArea');
        const lockStatusSpan = document.getElementById('chatLockStatus');
        const lockBtn = document.getElementById('toggleChatLockBtn');
        
        if (!chatContainer) return;
        
        if (isChatLocked) {
            if (chatInputArea) chatInputArea.style.opacity = '0.5';
            if (chatContainer) chatContainer.style.opacity = '0.7';
            if (lockStatusSpan) lockStatusSpan.innerHTML = '🔒 Chat đang bị khóa';
            if (lockBtn) {
                lockBtn.innerHTML = '<i class="fas fa-unlock"></i> Mở khóa';
                lockBtn.style.background = '#10b981';
            }
            // Vô hiệu hóa input
            const nameInput = document.getElementById('chatName');
            const msgInput = document.getElementById('chatMessage');
            const sendBtn = document.getElementById('sendChatBtn');
            if (nameInput) nameInput.disabled = true;
            if (msgInput) msgInput.disabled = true;
            if (sendBtn) sendBtn.disabled = true;
        } else {
            if (chatInputArea) chatInputArea.style.opacity = '1';
            if (chatContainer) chatContainer.style.opacity = '1';
            if (lockStatusSpan) lockStatusSpan.innerHTML = '🔓 Chat đang mở';
            if (lockBtn) {
                lockBtn.innerHTML = '<i class="fas fa-lock"></i> Khóa chat';
                lockBtn.style.background = '#f59e0b';
            }
            // Kích hoạt input
            const nameInput = document.getElementById('chatName');
            const msgInput = document.getElementById('chatMessage');
            const sendBtn = document.getElementById('sendChatBtn');
            if (nameInput) nameInput.disabled = false;
            if (msgInput) msgInput.disabled = false;
            if (sendBtn) sendBtn.disabled = false;
        }
    }
    
    // Hàm khóa/mở khóa chat (chỉ admin)
    window.toggleChatLock = function() {
        const currentUser = document.getElementById('chatName')?.value || '';
        const isAdmin = currentUser === 'Admin' || currentUser === 'admin' || currentUser === 'Trịnh Văn Tú';
        
        if (!isAdmin) {
            alert('🔒 Chỉ Admin mới có quyền khóa/mở khóa chat!');
            return;
        }
        
        isChatLocked = !isChatLocked;
        localStorage.setItem('chat_locked', isChatLocked);
        updateChatLockUI();
        
        const status = isChatLocked ? 'đã khóa' : 'đã mở';
        alert(`✅ Chat ${status} thành công!`);
    };
    
    // Gán sự kiện cho nút khóa chat
    document.addEventListener('DOMContentLoaded', function() {
        const lockBtn = document.getElementById('toggleChatLockBtn');
        if (lockBtn) {
            lockBtn.onclick = window.toggleChatLock;
        }
        updateChatLockUI();
    });
    
    // 5. Ghi đè hàm gửi tin nhắn để kiểm tra khóa
    const originalSendChatMessage = window.sendChatMessage;
    window.sendChatMessage = function() {
        if (isChatLocked) {
            alert('🔒 Chat đang bị khóa! Chỉ Admin mới có thể mở khóa.');
            return;
        }
        if (originalSendChatMessage) originalSendChatMessage();
    };
    
    console.log('✅ Fix Ctrl+A và khóa chat đã được áp dụng!');
})();


// ==================== KHỞI TẠO TOÀN BỘ ====================
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initHocPhan();
    initQuaMon();
    initTotNghiep();
    initQuyDoi();
    initOnTap();
    initHocBong();
    initDuDoan();
    initUniversities();
    initFeedback();
    initDarkMode();
    initMobileMenu();
    initHomeTabLinks();
    loadDocuments();
checkAdminSession();
initDocManager();
    console.log('✅ Hỗ Trợ Học Tập - Hệ thống đã sẵn sàng!');
});