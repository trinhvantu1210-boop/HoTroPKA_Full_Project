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
    momo: {
        image: 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=2|99|0769100185|TRINH VAN TU|0|0|0|&chld=H|0',
        info: '💜 Quét mã Momo để ủng hộ'
    },
    bank: {
        image: 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=0769100185&chld=H|0',
        info: '🏦 Quét mã ngân hàng MBBANK để ủng hộ'
    },
    viettelpay: {
        image: 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=0769100185&chld=H|0',
        info: '📱 Quét mã ViettelPay để ủng hộ'
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
    alert('⚠️ Nội dung được bảo vệ bởi F9 Exploit Team!');
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