const form = document.getElementById("registerForm");
const list = document.getElementById("listPeserta");
const message = document.getElementById("message");
const jumlah = document.getElementById("jumlah");

let totalPeserta = 0;
const kuota = 50;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const hp = document.getElementById("hp").value.trim();
    const kategori = document.getElementById("kategori").value;

    // Validasi
    if (!nama || !email || !hp || !kategori) {
        message.style.color = "red";
        message.textContent = "Semua input wajib diisi!";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Email harus mengandung karakter @";
        return;
    }

    if (isNaN(hp)) {
        message.style.color = "red";
        message.textContent = "Nomor HP hanya boleh angka!";
        return;
    }

    if (totalPeserta >= kuota) {
        message.style.color = "red";
        message.textContent = "Pendaftaran ditutup, kuota sudah penuh";
        return;
    }

    // Tambah peserta
    totalPeserta++;
    jumlah.textContent = totalPeserta;

    const li = document.createElement("li");
    li.textContent = `${nama} - ${email} - ${hp} (${kategori})`;
    list.appendChild(li);

    message.style.color = "green";
    message.textContent = "Pendaftaran berhasil!";

    form.reset();
});
