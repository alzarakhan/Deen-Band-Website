/**
 * =========================================
 * DEEN BAND - Daily Quran Verse Application
 * =========================================
 */

// =========================================
// CONFIGURATION
// =========================================

const CONFIG = {
    QURAN_API_BASE: 'https://api.alquran.cloud/v1',
    UNSPLASH_API_BASE: 'https://api.unsplash.com',
    
    // Unsplash API key
    UNSPLASH_ACCESS_KEY: 'd4-CXBwtTQGY_0KWZXlHRdJjfM85vnV5VVlKfcg3X58' ,
    
    ROTATION_INTERVAL_MS: 24 * 60 * 60 * 1000,
    TOTAL_QURAN_VERSES: 6236,
    
    STORAGE_KEYS: {
        CURRENT_VERSE: 'deenband_current_verse',
        USED_VERSES: 'deenband_used_verses',
        BACKGROUND_IMAGE: 'deenband_background',
        THEME: 'deenband_theme'
    },
    
    UNSPLASH_QUERY: 'nature,landscape,sky,mountains,water',
    
    SURAH_DATA: [
        { number: 1, name: "Al-Fatiha", verses: 7 },
        { number: 2, name: "Al-Baqarah", verses: 286 },
        { number: 3, name: "Ali 'Imran", verses: 200 },
        { number: 4, name: "An-Nisa", verses: 176 },
        { number: 5, name: "Al-Ma'idah", verses: 120 },
        { number: 6, name: "Al-An'am", verses: 165 },
        { number: 7, name: "Al-A'raf", verses: 206 },
        { number: 8, name: "Al-Anfal", verses: 75 },
        { number: 9, name: "At-Tawbah", verses: 129 },
        { number: 10, name: "Yunus", verses: 109 },
        { number: 11, name: "Hud", verses: 123 },
        { number: 12, name: "Yusuf", verses: 111 },
        { number: 13, name: "Ar-Ra'd", verses: 43 },
        { number: 14, name: "Ibrahim", verses: 52 },
        { number: 15, name: "Al-Hijr", verses: 99 },
        { number: 16, name: "An-Nahl", verses: 128 },
        { number: 17, name: "Al-Isra", verses: 111 },
        { number: 18, name: "Al-Kahf", verses: 110 },
        { number: 19, name: "Maryam", verses: 98 },
        { number: 20, name: "Taha", verses: 135 },
        { number: 21, name: "Al-Anbiya", verses: 112 },
        { number: 22, name: "Al-Hajj", verses: 78 },
        { number: 23, name: "Al-Mu'minun", verses: 118 },
        { number: 24, name: "An-Nur", verses: 64 },
        { number: 25, name: "Al-Furqan", verses: 77 },
        { number: 26, name: "Ash-Shu'ara", verses: 227 },
        { number: 27, name: "An-Naml", verses: 93 },
        { number: 28, name: "Al-Qasas", verses: 88 },
        { number: 29, name: "Al-'Ankabut", verses: 69 },
        { number: 30, name: "Ar-Rum", verses: 60 },
        { number: 31, name: "Luqman", verses: 34 },
        { number: 32, name: "As-Sajdah", verses: 30 },
        { number: 33, name: "Al-Ahzab", verses: 73 },
        { number: 34, name: "Saba", verses: 54 },
        { number: 35, name: "Fatir", verses: 45 },
        { number: 36, name: "Ya-Sin", verses: 83 },
        { number: 37, name: "As-Saffat", verses: 182 },
        { number: 38, name: "Sad", verses: 88 },
        { number: 39, name: "Az-Zumar", verses: 75 },
        { number: 40, name: "Ghafir", verses: 85 },
        { number: 41, name: "Fussilat", verses: 54 },
        { number: 42, name: "Ash-Shura", verses: 53 },
        { number: 43, name: "Az-Zukhruf", verses: 89 },
        { number: 44, name: "Ad-Dukhan", verses: 59 },
        { number: 45, name: "Al-Jathiyah", verses: 37 },
        { number: 46, name: "Al-Ahqaf", verses: 35 },
        { number: 47, name: "Muhammad", verses: 38 },
        { number: 48, name: "Al-Fath", verses: 29 },
        { number: 49, name: "Al-Hujurat", verses: 18 },
        { number: 50, name: "Qaf", verses: 45 },
        { number: 51, name: "Adh-Dhariyat", verses: 60 },
        { number: 52, name: "At-Tur", verses: 49 },
        { number: 53, name: "An-Najm", verses: 62 },
        { number: 54, name: "Al-Qamar", verses: 55 },
        { number: 55, name: "Ar-Rahman", verses: 78 },
        { number: 56, name: "Al-Waqi'ah", verses: 96 },
        { number: 57, name: "Al-Hadid", verses: 29 },
        { number: 58, name: "Al-Mujadila", verses: 22 },
        { number: 59, name: "Al-Hashr", verses: 24 },
        { number: 60, name: "Al-Mumtahanah", verses: 13 },
        { number: 61, name: "As-Saf", verses: 14 },
        { number: 62, name: "Al-Jumu'ah", verses: 11 },
        { number: 63, name: "Al-Munafiqun", verses: 11 },
        { number: 64, name: "At-Taghabun", verses: 18 },
        { number: 65, name: "At-Talaq", verses: 12 },
        { number: 66, name: "At-Tahrim", verses: 12 },
        { number: 67, name: "Al-Mulk", verses: 30 },
        { number: 68, name: "Al-Qalam", verses: 52 },
        { number: 69, name: "Al-Haqqah", verses: 52 },
        { number: 70, name: "Al-Ma'arij", verses: 44 },
        { number: 71, name: "Nuh", verses: 28 },
        { number: 72, name: "Al-Jinn", verses: 28 },
        { number: 73, name: "Al-Muzzammil", verses: 20 },
        { number: 74, name: "Al-Muddaththir", verses: 56 },
        { number: 75, name: "Al-Qiyamah", verses: 40 },
        { number: 76, name: "Al-Insan", verses: 31 },
        { number: 77, name: "Al-Mursalat", verses: 50 },
        { number: 78, name: "An-Naba", verses: 40 },
        { number: 79, name: "An-Nazi'at", verses: 46 },
        { number: 80, name: "'Abasa", verses: 42 },
        { number: 81, name: "At-Takwir", verses: 29 },
        { number: 82, name: "Al-Infitar", verses: 19 },
        { number: 83, name: "Al-Mutaffifin", verses: 36 },
        { number: 84, name: "Al-Inshiqaq", verses: 25 },
        { number: 85, name: "Al-Buruj", verses: 22 },
        { number: 86, name: "At-Tariq", verses: 17 },
        { number: 87, name: "Al-A'la", verses: 19 },
        { number: 88, name: "Al-Ghashiyah", verses: 26 },
        { number: 89, name: "Al-Fajr", verses: 30 },
        { number: 90, name: "Al-Balad", verses: 20 },
        { number: 91, name: "Ash-Shams", verses: 15 },
        { number: 92, name: "Al-Layl", verses: 21 },
        { number: 93, name: "Ad-Duhaa", verses: 11 },
        { number: 94, name: "Ash-Sharh", verses: 8 },
        { number: 95, name: "At-Tin", verses: 8 },
        { number: 96, name: "Al-'Alaq", verses: 19 },
        { number: 97, name: "Al-Qadr", verses: 5 },
        { number: 98, name: "Al-Bayyinah", verses: 8 },
        { number: 99, name: "Az-Zalzalah", verses: 8 },
        { number: 100, name: "Al-'Adiyat", verses: 11 },
        { number: 101, name: "Al-Qari'ah", verses: 11 },
        { number: 102, name: "At-Takathur", verses: 8 },
        { number: 103, name: "Al-'Asr", verses: 3 },
        { number: 104, name: "Al-Humazah", verses: 9 },
        { number: 105, name: "Al-Fil", verses: 5 },
        { number: 106, name: "Quraysh", verses: 4 },
        { number: 107, name: "Al-Ma'un", verses: 7 },
        { number: 108, name: "Al-Kawthar", verses: 3 },
        { number: 109, name: "Al-Kafirun", verses: 6 },
        { number: 110, name: "An-Nasr", verses: 3 },
        { number: 111, name: "Al-Masad", verses: 5 },
        { number: 112, name: "Al-Ikhlas", verses: 4 },
        { number: 113, name: "Al-Falaq", verses: 5 },
        { number: 114, name: "An-Nas", verses: 6 }
    ]
};

// =========================================
// STORAGE MANAGEMENT MODULE
// =========================================

const StorageManager = {
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`Storage get error for ${key}:`, error);
            return null;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Storage set error for ${key}:`, error);
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Storage remove error for ${key}:`, error);
        }
    },
    
    getCurrentVerse() {
        return this.get(CONFIG.STORAGE_KEYS.CURRENT_VERSE);
    },
    
    saveCurrentVerse(verseData) {
        const data = {
            ...verseData,
            timestamp: Date.now()
        };
        this.set(CONFIG.STORAGE_KEYS.CURRENT_VERSE, data);
    },
    
    getUsedVerses() {
        return this.get(CONFIG.STORAGE_KEYS.USED_VERSES) || [];
    },
    
    addUsedVerse(surah, ayah) {
        const used = this.getUsedVerses();
        const verseId = `${surah}:${ayah}`;
        if (!used.includes(verseId)) {
            used.push(verseId);
            this.set(CONFIG.STORAGE_KEYS.USED_VERSES, used);
        }
    },
    
    resetUsedVerses() {
        this.set(CONFIG.STORAGE_KEYS.USED_VERSES, []);
    },
    
    getBackgroundImage() {
        return this.get(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE);
    },
    
    saveBackgroundImage(imageData) {
        this.set(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE, imageData);
    },
    
    getTheme() {
        return this.get(CONFIG.STORAGE_KEYS.THEME) || 'light';
    },
    
    saveTheme(theme) {
        this.set(CONFIG.STORAGE_KEYS.THEME, theme);
    }
};

// =========================================
// QURAN API MODULE
// =========================================

const QuranAPI = {
    async fetchVerse(surah, ayah) {
        try {
            const [arabicResponse, englishResponse] = await Promise.all([
                fetch(`${CONFIG.QURAN_API_BASE}/ayah/${surah}:${ayah}/ar.alafasy`),
                fetch(`${CONFIG.QURAN_API_BASE}/ayah/${surah}:${ayah}/en.sahih`)
            ]);
            
            if (!arabicResponse.ok || !englishResponse.ok) {
                throw new Error('Failed to fetch verse');
            }
            
            const arabicData = await arabicResponse.json();
            const englishData = await englishResponse.json();
            
            if (arabicData.code !== 200 || englishData.code !== 200) {
                throw new Error('Invalid API response');
            }
            
            return {
                surah: surah,
                ayah: ayah,
                arabicText: arabicData.data.text,
                englishText: englishData.data.text,
                surahName: arabicData.data.surah.englishName,
                surahNameArabic: arabicData.data.surah.name
            };
        } catch (error) {
            console.error('Quran API error:', error);
            throw error;
        }
    },
    
    getSurahInfo(surahNumber) {
        return CONFIG.SURAH_DATA.find(s => s.number === surahNumber);
    }
};

// =========================================
// VERSE SELECTION MODULE
// =========================================

const VerseSelector = {
    getAllVerseIds() {
        const allVerses = [];
        for (const surah of CONFIG.SURAH_DATA) {
            for (let ayah = 1; ayah <= surah.verses; ayah++) {
                allVerses.push(`${surah.number}:${ayah}`);
            }
        }
        return allVerses;
    },
    
    getAvailableVerses() {
        const allVerses = this.getAllVerseIds();
        const usedVerses = StorageManager.getUsedVerses();
        return allVerses.filter(v => !usedVerses.includes(v));
    },
    
    selectRandomVerse() {
        const available = this.getAvailableVerses();
        
        if (available.length === 0) {
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * available.length);
        const [surah, ayah] = available[randomIndex].split(':').map(Number);
        
        return { surah, ayah };
    },
    
    allVersesUsed() {
        return this.getAvailableVerses().length === 0;
    }
};

// =========================================
// UNSPLASH API MODULE
// =========================================

const UnsplashAPI = {
    async fetchRandomImage() {
        if (CONFIG.UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') {
            console.warn('Unsplash API key not configured. Using fallback.');
            return null;
        }
        
        try {
            const params = new URLSearchParams({
                query: CONFIG.UNSPLASH_QUERY,
                orientation: 'landscape',
                content_filter: 'high',
                client_id: CONFIG.UNSPLASH_ACCESS_KEY
            });
            
            const response = await fetch(
                `${CONFIG.UNSPLASH_API_BASE}/photos/random?${params}`
            );
            
            if (!response.ok) {
                throw new Error(`Unsplash API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            return {
                url: data.urls.regular,
                photographerName: data.user.name,
                photographerUrl: data.user.links.html,
                unsplashUrl: data.links.html
            };
        } catch (error) {
            console.error('Unsplash API error:', error);
            return null;
        }
    }
};

// =========================================
// UI RENDERING MODULE
// =========================================

const UIRenderer = {
    elements: {},
    
    init() {
        this.elements = {
            backgroundImage: document.getElementById('backgroundImage'),
            loadingState: document.getElementById('loadingState'),
            verseContent: document.getElementById('verseContent'),
            errorState: document.getElementById('errorState'),
            arabicText: document.getElementById('arabicText'),
            translationText: document.getElementById('translationText'),
            surahName: document.getElementById('surahName'),
            verseNumber: document.getElementById('verseNumber'),
            errorMessage: document.getElementById('errorMessage'),
            retryButton: document.getElementById('retryButton'),
            themeToggle: document.getElementById('themeToggle'),
            themeIcon: document.getElementById('themeIcon'),
            hoursValue: document.getElementById('hoursValue'),
            minutesValue: document.getElementById('minutesValue'),
            secondsValue: document.getElementById('secondsValue'),
            timerSection: document.getElementById('timerSection'),
            photoCredit: document.getElementById('photoCredit'),
            verseCount: document.getElementById('verseCount'),
            modalOverlay: document.getElementById('modalOverlay'),
            resetButton: document.getElementById('resetButton')
        };
    },
    
    showLoading() {
        this.elements.loadingState.style.display = 'flex';
        this.elements.verseContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
    },
    
    showVerse() {
        this.elements.loadingState.style.display = 'none';
        this.elements.verseContent.style.display = 'block';
        this.elements.errorState.style.display = 'none';
    },
    
    showError(message) {
        this.elements.loadingState.style.display = 'none';
        this.elements.verseContent.style.display = 'none';
        this.elements.errorState.style.display = 'flex';
        this.elements.errorMessage.textContent = message;
    },
    
    renderVerse(verseData) {
        this.elements.arabicText.textContent = verseData.arabicText;
        this.elements.translationText.textContent = `"${verseData.englishText}"`;
        this.elements.surahName.textContent = `Surah ${verseData.surahName}`;
        this.elements.verseNumber.textContent = `Verse ${verseData.ayah}`;
        this.showVerse();
    },
    
    setBackgroundImage(imageUrl) {
        if (imageUrl) {
            this.elements.backgroundImage.style.backgroundImage = `url(${imageUrl})`;
            this.elements.backgroundImage.classList.remove('fallback');
            
            const img = new Image();
            img.onload = () => {
                this.elements.backgroundImage.classList.add('loaded');
            };
            img.src = imageUrl;
        } else {
            this.elements.backgroundImage.classList.add('fallback', 'loaded');
        }
    },
    
    updatePhotoCredit(imageData) {
        if (imageData && imageData.photographerName) {
            this.elements.photoCredit.innerHTML = `Photo by <a href="${imageData.photographerUrl}?utm_source=deen_band&utm_medium=referral" target="_blank" rel="noopener">${imageData.photographerName}</a> on <a href="${imageData.unsplashUrl}?utm_source=deen_band&utm_medium=referral" target="_blank" rel="noopener">Unsplash</a>`;
        } else {
            this.elements.photoCredit.textContent = '';
        }
    },
    
    updateVerseCount() {
        const used = StorageManager.getUsedVerses().length;
        const total = CONFIG.TOTAL_QURAN_VERSES;
        this.elements.verseCount.textContent = `${used} of ${total} verses explored`;
    },
    
    updateTimer(hours, minutes, seconds) {
        this.elements.hoursValue.textContent = String(hours).padStart(2, '0');
        this.elements.minutesValue.textContent = String(minutes).padStart(2, '0');
        this.elements.secondsValue.textContent = String(seconds).padStart(2, '0');
    },
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.elements.themeIcon.textContent = theme === 'dark' ? '☾' : '☀';
    },
    
    showAllVersesUsedModal() {
        this.elements.modalOverlay.style.display = 'flex';
    },
    
    hideModal() {
        this.elements.modalOverlay.style.display = 'none';
    }
};

// =========================================
// DAILY VERSE ROTATION MODULE
// =========================================

const DailyVerseManager = {
    timerInterval: null,
    
    isCurrentVerseValid() {
        const currentVerse = StorageManager.getCurrentVerse();
        if (!currentVerse || !currentVerse.timestamp) {
            return false;
        }
        
        const elapsed = Date.now() - currentVerse.timestamp;
        return elapsed < CONFIG.ROTATION_INTERVAL_MS;
    },
    
    getTimeRemaining() {
        const currentVerse = StorageManager.getCurrentVerse();
        if (!currentVerse || !currentVerse.timestamp) {
            return { hours: 0, minutes: 0, seconds: 0, total: 0 };
        }
        
        const elapsed = Date.now() - currentVerse.timestamp;
        const remaining = Math.max(0, CONFIG.ROTATION_INTERVAL_MS - elapsed);
        
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        
        return { hours, minutes, seconds, total: remaining };
    },
    
    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            const remaining = this.getTimeRemaining();
            
            if (remaining.total <= 0) {
                clearInterval(this.timerInterval);
                this.loadNewVerse();
            } else {
                UIRenderer.updateTimer(remaining.hours, remaining.minutes, remaining.seconds);
            }
        }, 1000);
    },
    
    updateTimerDisplay() {
        const remaining = this.getTimeRemaining();
        UIRenderer.updateTimer(remaining.hours, remaining.minutes, remaining.seconds);
    },
    
    async loadVerse() {
        UIRenderer.showLoading();
        
        if (this.isCurrentVerseValid()) {
            const currentVerse = StorageManager.getCurrentVerse();
            UIRenderer.renderVerse(currentVerse);
            
            const storedImage = StorageManager.getBackgroundImage();
            UIRenderer.setBackgroundImage(storedImage?.url || null);
            UIRenderer.updatePhotoCredit(storedImage);
            
            this.startTimer();
            UIRenderer.updateVerseCount();
            return;
        }
        
        await this.loadNewVerse();
    },
    
    async loadNewVerse() {
        UIRenderer.showLoading();
        
        try {
            if (VerseSelector.allVersesUsed()) {
                UIRenderer.showAllVersesUsedModal();
                return;
            }
            
            const selection = VerseSelector.selectRandomVerse();
            const verseData = await QuranAPI.fetchVerse(selection.surah, selection.ayah);
            
            StorageManager.saveCurrentVerse(verseData);
            StorageManager.addUsedVerse(selection.surah, selection.ayah);
            
            const imageData = await UnsplashAPI.fetchRandomImage();
            if (imageData) {
                StorageManager.saveBackgroundImage(imageData);
            }
            
            UIRenderer.renderVerse(verseData);
            UIRenderer.setBackgroundImage(imageData?.url || null);
            UIRenderer.updatePhotoCredit(imageData);
            UIRenderer.updateVerseCount();
            
            this.startTimer();
            
        } catch (error) {
            console.error('Error loading verse:', error);
            UIRenderer.showError('Unable to load verse. Please check your connection and try again.');
        }
    },
    
    async resetAndRestart() {
        StorageManager.resetUsedVerses();
        StorageManager.remove(CONFIG.STORAGE_KEYS.CURRENT_VERSE);
        StorageManager.remove(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE);
        UIRenderer.hideModal();
        await this.loadNewVerse();
    }
};

// =========================================
// THEME MANAGER
// =========================================

const ThemeManager = {
    init() {
        let theme = StorageManager.getTheme();
        
        if (!theme) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            theme = prefersDark ? 'dark' : 'light';
        }
        
        UIRenderer.setTheme(theme);
    },
    
    toggle() {
        const currentTheme = StorageManager.getTheme() || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        StorageManager.saveTheme(newTheme);
        UIRenderer.setTheme(newTheme);
    }
};

// =========================================
// APPLICATION INITIALIZATION
// =========================================

const App = {
    async init() {
        UIRenderer.init();
        ThemeManager.init();
        this.setupEventListeners();
        await DailyVerseManager.loadVerse();
    },
    
    setupEventListeners() {
        UIRenderer.elements.themeToggle.addEventListener('click', () => {
            ThemeManager.toggle();
        });
        
        UIRenderer.elements.retryButton.addEventListener('click', async () => {
            await DailyVerseManager.loadVerse();
        });
        
        UIRenderer.elements.resetButton.addEventListener('click', async () => {
            await DailyVerseManager.resetAndRestart();
        });
        
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                DailyVerseManager.updateTimerDisplay();
            }
        });
    }
};

// =========================================
// START APPLICATION
// =========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}
