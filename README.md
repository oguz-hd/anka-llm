# Gemini 2.0 AI Asistanı

Bu proje, React (Frontend) ve Node.js (Backend) ile geliştirilmiş, Google'ın en yeni **Gemini 2.0 Flash** yapay zeka modelini kullanan minimal bir web uygulamasıdır.

## 🚀 Başlarken

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edin.

### 1. Backend Kurulumu (Sunucu)

Sunucu `8020` portunda çalışır ve API isteklerini yönetir.

```bash
cd server
npm install    # Gerekli paketleri yükle (ilk çalıştırmada)
node server.js # Sunucuyu başlat
```

### 2. Frontend Kurulumu (Arayüz)

Arayüz React ile yapılmıştır ve `5173` portunda çalışır.

```bash
cd client
npm install    # Paketleri yükle (ilk çalıştırmada)
npm run dev    # Uygulamayı başlat
```

### 3. Kullanım

- Tarayıcınızı açıp `http://localhost:5173` adresine gidin.
- Kutuya sorunuzu yazın ve "GÖNDER" butonuna basın.
- Yapay zekanın (Gemini 2.0 Flash) cevabını anında görün.

## 🛠️ Teknolojiler

- **Backend:** Node.js, Express, Fetch API
- **Frontend:** React, Vite, Axios
- **Tasarım:** Siyah & Beyaz Minimalist CSS
- **AI Model:** Google Gemini 2.0 Flash Experimental

**Not:** API anahtarı `server.js` dosyasında tanımlıdır. Kendi anahtarınızı kullanmak isterseniz `server.js` dosyasındaki `apiKey` değişkenini güncelleyebilirsiniz.
