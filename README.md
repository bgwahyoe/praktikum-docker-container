# 🚀 Praktikum Docker Containerization

Repository ini berisi hasil praktikum mata kuliah **Virtualisasi dan Keamanan Jaringan** yang berfokus pada penggunaan Docker untuk containerization, mulai dari dasar hingga implementasi multi-container application.

---

## 📂 Struktur Project

```
p6-docker/
├── docker-nodejs-demo      # Praktikum 2 (Node.js + Dockerfile)
├── fullstack-docker        # Praktikum 3 (Multi-container: API + MongoDB + Nginx)
└── tugas-mandiri           # Tugas akhir (Flask + Redis + Nginx)
```

---

# 🧪 Praktikum 1 — Nginx Container

### 🎯 Tujuan

Menjalankan web server sederhana menggunakan Docker container.

### ⚙️ Perintah Utama

```bash
docker run -d -p 8080:80 --name my-nginx nginx
```

### 🌐 Akses

```
http://localhost:8080
```

---

# 🧪 Praktikum 2 — Node.js Docker Image

### 📁 Lokasi

```
docker-nodejs-demo/
```

### 🎯 Tujuan

Membuat custom Docker image menggunakan Dockerfile untuk aplikasi Node.js.

### ⚙️ Cara Menjalankan

```bash
cd docker-nodejs-demo

docker build -t nodejs-demo .
docker run -d -p 3000:3000 nodejs-demo
```

### 🌐 Akses

```
http://localhost:3000
```

---

# 🧪 Praktikum 3 — Docker Compose (Fullstack)

### 📁 Lokasi

```
fullstack-docker/
```

### 🎯 Tujuan

Menjalankan aplikasi multi-container menggunakan Docker Compose.

### 🧩 Arsitektur

```
Client → Nginx → API (Node.js) → MongoDB
```

### ⚙️ Cara Menjalankan

```bash
cd fullstack-docker

docker compose up -d --build
```

### 🔍 Cek Service

```bash
docker compose ps
```

### 🌐 Akses

```
http://localhost:8080
http://localhost:8080/api/
```

---

# 🏆 Tugas Mandiri — Flask + Redis + Nginx

### 📁 Lokasi

```
tugas-mandiri/
```

### 🎯 Fitur

* Counter jumlah kunjungan
* Increment otomatis setiap refresh
* Reset counter
* Reverse proxy dengan Nginx

### 🧩 Arsitektur

```
Browser → Nginx → Flask → Redis
```

---

## ⚙️ Cara Menjalankan

```bash
cd tugas-mandiri

docker compose up -d --build
```

---

## 🌐 Akses Aplikasi

```
http://localhost:8080
```

---

## 🔄 Endpoint

| Endpoint | Fungsi                       |
| -------- | ---------------------------- |
| `/`      | Menampilkan jumlah kunjungan |
| `/reset` | Reset counter ke 0           |

---

# 🐳 Teknologi yang Digunakan

* Docker
* Docker Compose
* Node.js
* Python Flask
* Redis
* MongoDB
* Nginx

---

# 📚 Pembelajaran yang Didapat

* Memahami konsep containerization
* Membuat dan menjalankan Docker container
* Membuat Docker image dengan Dockerfile
* Mengelola multi-container dengan Docker Compose
* Menghubungkan antar service dalam satu network
* Implementasi reverse proxy dengan Nginx

---

# ✨ Author

**Name : Wahyu Ahmad Yassin**
**Nim : 0110224047**
Teknik Informatika — STT Terpadu Nurul Fikri

---

# 🚀 Penutup

Project ini merupakan implementasi dasar hingga lanjutan dari Docker yang dapat digunakan sebagai fondasi dalam pengembangan aplikasi modern berbasis container.

---
